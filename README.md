# Tienda Salvadoreña – CIS 3030 Final Project

Welcome to my CIS 3030 Final Project!  
This repository contains the source code and assets for **Tienda Salvadoreña**, a bilingual website designed to showcase Salvadoran culture, branding, and accessibility while meeting course compliance requirements.

---

## About the Project
- **Course:** CIS 3030 – Web Development  
- **Professor:** Janos Fustos  
- **Institution:** Metropolitan State University of Denver  
- **Student:** David Quintana, Senior in Human-Centered Information Systems (HCIS)  

This project demonstrates:
- Accessible, bilingual (Spanish/English) web design  
- Branding and layout consistency across multiple pages  
- Compliance with course rubrics and web standards  
- Integration of Salvadoran cultural elements into a professional site  

---

## Live Site
The project is hosted on GitHub Pages:  
[View Tienda Salvadoreña](https://dquint32.github.io/finalproject/)

---

## Repository Contents
- `index.html` – Home page (Spanish; English twin at `en/index.html`)  
- `items.html` – Products we sell  
- `history.html` – Family and cultural background  
- `pollo.html` – Pollo Campero page  
- `press.html` – Press & recognition  
- `contact.html` – Contact & location info  
- `css/main.css` – One shared, mobile-first stylesheet: WCAG AAA light (cream/paper) and dark (navy/gold) themes, uniform product cards, mobile action bar, Ilobasco and banderitas accents  
- `js/lang-toggle.js` – All English translations (keyed by `data-i18n`) and the small script that remembers the visitor's language  
- `en/` – English pages, **generated** by `build_en.py`; never edit them by hand  
- `build_en.py` – Writes `en/*.html` and `sitemap.xml` from the Spanish pages + the English translations. After editing any page or translation, run `python build_en.py`  
- `js/site.js` – Mobile menu, light/dark theme toggle, live open/closed status, back-to-top button  
- `js/items.js` – Product filters and photo zoom (Artículos page)  
- `js/radio.js` – Opt-in "Radio Tienda" marimba player (home page)  
- `llms.txt` – Plain-text store summary (founders, address, hours, products) for AI answer engines  
- `robots.txt` / `sitemap.xml` – Crawl rules (search and AI crawlers allowed) and sitemap with last-modified dates  
- `images/web/` – Optimized WebP photos used on the site; `images/` – original photos  

---

## About Me
I’m a senior at **MSU Denver** studying **Human-Centered Information Systems (HCIS)**.  
My focus is on:
- Building accessible, bilingual web experiences  
- Designing systems that balance compliance, usability, and cultural identity  
- Supporting family and community projects through technology  

I also work on other web and business projects outside of class, but this repository is dedicated to my CIS 3030 Final Project.

---

## Purpose
This repository exists to:
- Fulfill the CIS 3030 Final Project requirements  
- Provide a live, accessible demo site for grading and review  
- Showcase my ability to combine technical skills with cultural storytelling  

---

## 📬 Contact
For questions about this project:  
**David Quintana**  
MSU Denver – HCIS Program  
