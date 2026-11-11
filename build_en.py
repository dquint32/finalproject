#!/usr/bin/env python3
"""Build the English pages (en/*.html) and sitemap.xml.

The pages in this folder are the Spanish site. Their English text lives in
js/lang-toggle.js (the "en" translations, keyed by each element's data-i18n
attribute). This script writes an English twin of every page under en/ with
the English text already in the HTML, so search engines can read and index
it, plus <html lang="en">, its own canonical address, hreflang pairs, English
social tags and English structured data.

    Edit the pages in this folder (Spanish) and the English strings in
    js/lang-toggle.js, never the copies in en/.
    Then run:   python build_en.py
    Then commit everything, including the en/ folder and sitemap.xml.
"""
import datetime
import html
import json
import os
import re
import sys

BASE = "https://tiendasalvadorenadenver.com/"
HERE = os.path.dirname(os.path.abspath(__file__))
IMG = BASE + "images/web/"

# page -> (sitemap priority, change frequency, English og:image alt)
PAGES = {
    "index.html":   ("1.0", "monthly", "Jorge and Delia Romero in front of an El Salvador flag inside the store"),
    "items.html":   ("0.9", "monthly", "Shelves of Salvadoran beans, sauces and seasonings"),
    "contact.html": ("0.9", "monthly", "The Tienda Salvadoreña store sign"),
    "history.html": ("0.7", "yearly",  "Jorge and Delia Romero with the flag of El Salvador inside the store"),
    "pollo.html":   ("0.6", "yearly",  "Jorge and Delia enjoying Pollo Campero"),
    "press.html":   ("0.6", "yearly",  "Delia Romero holding the flag of El Salvador"),
}
CRUMBS = {"Inicio": "Home", "Artículos": "Products", "Historia": "History",
          "Pollo Campero": "Pollo Campero", "Prensa": "Press", "Contacto": "Contact"}
VOID = {"meta", "img", "br", "hr", "input", "link", "source", "wbr"}
missing = set()


def url_es(page):
    return BASE if page == "index.html" else BASE + page


def url_en(page):
    return BASE + "en/" if page == "index.html" else BASE + "en/" + page


def load_translations():
    """English strings from js/lang-toggle.js: every "key": "value" pair that
    sits in an English block (the en: { } object or Object.assign(translations.en, { }))."""
    js = open(os.path.join(HERE, "js", "lang-toggle.js"), encoding="utf-8").read()
    marks = sorted([(m.start(), "es") for m in re.finditer(r"\n    es: \{|translations\.es, \{", js)] +
                   [(m.start(), "en") for m in re.finditer(r"\n    en: \{|translations\.en, \{", js)])
    en = {}
    for m in re.finditer(r'"([\w.\-]+)":\s*"((?:[^"\\]|\\.)*)"', js):
        lang = None
        for pos, name in marks:
            if pos < m.start():
                lang = name
        if lang == "en":
            en[m.group(1)] = json.loads('"' + m.group(2) + '"')
    return en


def close_of(s, tag, pos):
    """Index of the </tag> that closes the element whose start tag ends at pos."""
    depth = 1
    for m in re.compile(r"<(/?)%s\b[^>]*>" % re.escape(tag), re.I).finditer(s, pos):
        if m.group(0).endswith("/>"):
            continue
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return m.start(), m.end()
    raise ValueError("no closing </%s> after %d" % (tag, pos))


def set_attr(tag, name, value):
    value = html.escape(value, quote=True)
    if re.search(r'\s%s="[^"]*"' % name, tag):
        return re.sub(r'(\s%s=")[^"]*(")' % name, lambda m: m.group(1) + value + m.group(2), tag, count=1)
    return re.sub(r"\s*(/?)>$", lambda m: ' %s="%s"%s>' % (name, value, m.group(1)), tag, count=1)


def translate(s, en):
    out, pos = [], 0
    start = re.compile(r'<(\w+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>')
    while True:
        m = start.search(s, pos)
        if not m:
            out.append(s[pos:])
            break
        tag, key, open_tag = m.group(1).lower(), m.group(2), m.group(0)
        out.append(s[pos:m.start()])
        val = en.get(key)
        if val is None:
            missing.add(key)
            out.append(open_tag)
            pos = m.end()
            continue
        if tag == "meta":
            out.append(set_attr(open_tag, "content", val))
            pos = m.end()
        elif tag == "img":
            out.append(set_attr(open_tag, "alt", val))
            pos = m.end()
        else:
            c_start, c_end = close_of(s, tag, m.end())
            inner = val if 'data-i18n-html="true"' in open_tag else html.escape(val, quote=False)
            out.append(open_tag + inner + s[c_start:c_end])
            pos = c_end
    s = "".join(out)
    for data_attr, target in (("data-i18n-alt", "alt"), ("data-i18n-aria-label", "aria-label"), ("data-i18n-title", "title")):
        def fix(m, data_attr=data_attr, target=target):
            key = re.search(r'%s="([^"]+)"' % data_attr, m.group(0)).group(1)
            if key not in en:
                missing.add(key)
                return m.group(0)
            return set_attr(m.group(0), target, en[key])
        s = re.sub(r'<\w+\b[^>]*\s%s="[^"]+"[^>]*>' % data_attr, fix, s, flags=re.S)
    return s


def strip(t):
    return " ".join(html.unescape(re.sub(r"<[^>]+>", "", t)).split())


def english_ld(s, page, title):
    """Point page-level structured data at the English address, in English."""
    me = url_en(page)

    def walk(o):
        if isinstance(o, list):
            return [walk(v) for v in o]
        if not isinstance(o, dict):
            return o
        t = o.get("@type")
        if t == "BreadcrumbList":
            for li in o["itemListElement"]:
                li["name"] = CRUMBS.get(li["name"], li["name"])
                p = li["item"][len(BASE):] or "index.html"
                li["item"] = url_en(p)
            return o
        if t in ("ContactPage", "AboutPage", "CollectionPage"):
            o["@id"] = me + "#page"
            o["url"] = me
            o["name"] = title
            o["inLanguage"] = "en"
        if t == "FAQPage":
            qs = re.findall(r'<h3 class="faq__q"[^>]*>(.*?)</h3>\s*<p class="faq__a"[^>]*>(.*?)</p>', s, re.S)
            o["@id"] = me + "#faq"
            o["inLanguage"] = "en"
            o["mainEntity"] = [{"@type": "Question", "name": strip(q),
                                "acceptedAnswer": {"@type": "Answer", "text": strip(a)}} for q, a in qs]
            return o
        if t == "ItemList":
            o["@id"] = me + "#products"
            o["name"] = "Salvadoran and Central American groceries at Tienda Salvadoreña, Denver"
            tiles = re.findall(r'<li class="tile" data-category="\w+">(.*?)</li>', s, re.S)
            for li, body in zip(o["itemListElement"], tiles):
                item = li["item"]
                item["name"] = strip(re.search(r'shelf-tag__name"[^>]*>(.*?)</span>', body, re.S).group(1))
                item["category"] = strip(re.search(r'shelf-tag__cat"[^>]*>(.*?)</span>', body, re.S).group(1))
                item["description"] = strip(re.search(r'class="lore"[^>]*>(.*?)</span>', body, re.S).group(1))
            return o
        if t == "HowTo":
            return o  # rebuilt below, where both cards are known
        return {k: walk(v) for k, v in o.items()}

    def block(m):
        d = json.loads(m.group(2))
        d = walk(d)
        graph = d.get("@graph")
        if graph and all(g.get("@type") == "HowTo" for g in graph):
            cards = re.findall(r'<div class="recipe-card">\s*<h3[^>]*>(.*?)</h3>\s*<ol[^>]*>(.*?)</ol>', s, re.S)
            for g, (name, ol) in zip(graph, cards):
                g["name"] = "How to reheat Pollo Campero: " + strip(name)
                g["inLanguage"] = "en"
                g["tool"] = [{"@type": "HowToTool", "name": "Air fryer" if "Air" in name else "Oven"}]
                g["step"] = [{"@type": "HowToStep", "position": i, "text": strip(t)}
                             for i, t in enumerate(re.findall(r"<li[^>]*>(.*?)</li>", ol, re.S), 1)]
        return m.group(1) + json.dumps(d, ensure_ascii=False, indent=2) + m.group(3)

    return re.sub(r'(<script type="application/ld\+json">\n)(.*?)(\n  </script>)', block, s, flags=re.S)


def build_page(page, en):
    src = open(os.path.join(HERE, page), encoding="utf-8").read()
    s = translate(src, en)
    title = strip(re.search(r"<title[^>]*>(.*?)</title>", s, re.S).group(1))
    desc = re.search(r'<meta name="description"[^>]*content="([^"]*)"', s).group(1)
    alt = PAGES[page][2]

    s = re.sub(r'<html lang="es"', '<html lang="en"', s, count=1)
    s = re.sub(r"<!--", "<!-- GENERATED by build_en.py from ../%s -- edit that file (Spanish) or js/lang-toggle.js (English), then run: python build_en.py -->\n<!--" % page, s, count=1)

    # Head: social tags, locale, addresses
    for prop in ("og:title", "twitter:title"):
        s = re.sub(r'(<meta (?:property|name)="%s" content=")[^"]*' % prop, lambda m: m.group(1) + html.escape(title), s)
    for prop in ("og:description", "twitter:description"):
        s = re.sub(r'(<meta (?:property|name)="%s" content=")[^"]*' % prop, lambda m: m.group(1) + desc, s)
    for prop in ("og:image:alt", "twitter:image:alt"):
        s = re.sub(r'(<meta (?:property|name)="%s" content=")[^"]*' % prop, lambda m: m.group(1) + html.escape(alt), s)
    s = s.replace('content="es_US"', 'content="__ES__"').replace('content="en_US"', 'content="es_US"').replace('content="__ES__"', 'content="en_US"')
    s = re.sub(r'(<meta property="og:url" content=")[^"]*', lambda m: m.group(1) + url_en(page), s)
    s = re.sub(r'\n\s*<meta name="keywords"[^>]*>', "", s)
    s = re.sub(r'(<link rel="canonical" href=")[^"]*', lambda m: m.group(1) + url_en(page), s)

    # Assets live one folder up
    s = re.sub(r'\b(src|href)="(images|css|js)/', r'\1="../\2/', s)

    # Language switch: English is the current page; Spanish is one folder up
    es_href = "../" if page == "index.html" else "../" + page
    en_href = "./" if page == "index.html" else page
    s = re.sub(r'<a class="lang-button" href="[^"]*" hreflang="es"', '<a class="lang-button" href="%s" hreflang="es"' % es_href, s)
    s = re.sub(r'<a class="lang-button" href="[^"]*" hreflang="en"', '<a class="lang-button" href="%s" hreflang="en"' % en_href, s)
    s = s.replace(' hreflang="es" lang="es" aria-current="true">', ' hreflang="es" lang="es">')
    s = s.replace(' hreflang="en" lang="en">', ' hreflang="en" lang="en" aria-current="true">')

    s = english_ld(s, page, title)
    out = os.path.join(HERE, "en", page)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with open(out, "w", encoding="utf-8", newline="\n") as f:
        f.write(s)


def build_sitemap():
    today = datetime.date.today().isoformat()
    rows = []
    for page, (prio, freq, _) in PAGES.items():
        links = ('    <xhtml:link rel="alternate" hreflang="es" href="%s"/>\n'
                 '    <xhtml:link rel="alternate" hreflang="en" href="%s"/>\n'
                 '    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>\n') % (url_es(page), url_en(page), url_es(page))
        for loc in (url_es(page), url_en(page)):
            rows.append("  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n    <changefreq>%s</changefreq>\n"
                        "    <priority>%s</priority>\n%s  </url>" % (loc, today, freq, prio, links))
    xml = ('<?xml version="1.0" encoding="UTF-8"?>\n'
           "<!-- GENERATED by build_en.py: every page in Spanish and English, paired with hreflang. -->\n"
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
           '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + "\n".join(rows) + "\n</urlset>\n")
    with open(os.path.join(HERE, "sitemap.xml"), "w", encoding="utf-8", newline="\n") as f:
        f.write(xml)


def main():
    en = load_translations()
    for page in PAGES:
        build_page(page, en)
    build_sitemap()
    print("Built %d English pages in en/ and sitemap.xml" % len(PAGES))
    if missing:
        print("Missing English for: " + ", ".join(sorted(missing)))
        sys.exit(1)


if __name__ == "__main__":
    main()
