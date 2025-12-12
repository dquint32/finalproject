/*
Author: David Quintana
MSU Denver login name: dquint32@msudenver.edu
Date Created: 11/02/2025
Date Due: 12/01/2024
Modified: 12/12/2025
Filename: lang-toggle.js
Purpose: Bilingual language toggle functionality for Spanish/English translation across all pages.
Editor: Notepad
Generative AI Used: Yes
Specific Tools Used: Copilot, Gemini, and Claude
Gemini Use Case: Image Generation (creating the custom cartoon images of Jorge and Delia, the flags, etc.)
*/

// js/lang-toggle.js
(function () {
  console.log('lang-toggle.js initializing');

  const translations = {
    en: {
      "site.title": "Tienda Salvadoreña – Home",
      "meta.description": "Authentic Salvadoran and Central American products in Denver – tradition, flavor and community.",
      "nav.home": "Home",
      "nav.items": "Items",
      "nav.history": "History",
      "nav.pollo": "Pollo Campero",
      "nav.press": "Press",
      "nav.contact": "Contact",
      "hero.title": "Tienda Salvadoreña",
      "hero.lead": "Authentic Salvadoran and Central American products in Denver – tradition, flavor and community.",
      "hero.explore": "Explore our products",
      "hero.press": "Press",
      "hero.imgAlt": "Jorge and Delia shopping",
      "mission.title": "Colorado's oldest Salvadoran store",
      "mission.lead": "Tienda Salvadoreña is a family business rooted in the community. For over 30 years we've served Denver's Hispanic community with authentic products, food and culture, keeping our traditions alive.",
      "categories.title": "Explore Our Products",
      "cat.food.title": "Food & Drinks",
      "cat.food.lead": "Sodas, juices, chocolate and frozen fruit.",
      "cat.food.imgAlt": "Food and Drinks",
      "cat.clothing.title": "Clothing & Accessories",
      "cat.clothing.lead": "Guayaberas, hats and traditional footwear.",
      "cat.clothing.imgAlt": "Clothing and Accessories",
      "cat.nostalgia.title": "Trinkets and souvenirs",
      "cat.nostalgia.lead": "Keychains, bracelets and gifts with identity.",
      "cat.nostalgia.imgAlt": "Trinkets and gifts",
      "cat.wellness.title": "Herbs and Care",
      "cat.wellness.lead": "Medicines, natural soaps and hygiene items.",
      "cat.wellness.imgAlt": "Herbs and Care",
      "categories.viewall": "View all items",
      "press.title": "Community Recognition",
      "press.quote": "\"A pillar of Denver's Hispanic community.\"",
      "press.readmore": "Read more in Press",
      "footer.hours_label": "Hours:",
      "footer.hours": "Sunday 10 AM–6 PM · Mon–Sat 10 AM–7 PM",
      "footer.contactline": "Contact: 5128 E Colfax Ave, Denver, CO 80220 | Phone: (303) 394-4185 | Email: info@tiendasalvadorena.com",
      "footer.copy": "© 2025 Tienda Salvadoreña. All rights reserved. – This website was created in partial fulfillment of the requirements for course CIS 3030.",
      
      // Items page
      "items.hero.title": "Discover our products",
      "items.hero.lead": "Authentic Central American products in Colorado.",
      "items.hero.explore": "Explore our products",
      "items.filter.all": "Show all",
      "items.filter.food": "Food and snacks",
      "items.filter.drinks": "Drinks",
      "items.filter.clothing": "Clothing and footwear",
      "items.filter.wellness": "Wellness and OTC",
      "items.filter.nostalgia": "Nostalgia and home",
      
      // Product cards
      "items.medicine-cabinet": "Medicine Cabinet",
      "items.medicine-cabinet.desc": "Imported over-the-counter medicines for your health.",
      "items.vitamins": "Vitamins",
      "items.vitamins.desc": "Essential vitamins and oral supplements.",
      "items.natural-soaps": "Natural soaps and herbs",
      "items.natural-soaps.desc": "Natural hygiene products and herbal remedies.",
      "items.supplements": "Supplements",
      "items.supplements.desc": "Nopalina, flax seed and other dietary supplements.",
      "items.pantry-staples": "Pantry staples",
      "items.pantry-staples.desc": "Authentic beans, sauces and seasonings.",
      "items.dairy-essentials": "Dairy essentials",
      "items.dairy-essentials.desc": "Fresh Salvadoran cream and cheeses.",
      "items.queso-duro": "Queso Duro Viejo",
      "items.queso-duro.desc": "Famous hard cheese from El Salvador.",
      "items.spices-herbs": "Spices and herbs",
      "items.spices-herbs.desc": "Dried herbs, tea bags and cooking spices.",
      "items.pan-dulce": "Pan Dulce",
      "items.pan-dulce.desc": "Fresh sweet bread, quesadillas and cookies.",
      "items.traditional-candy": "Traditional candy",
      "items.traditional-candy.desc": "Typical treats from home.",
      "items.chips-snacks": "Chips and snacks",
      "items.chips-snacks.desc": "Plantain chips, snacks and salty treats.",
      "items.kolashampan": "Kolashampan",
      "items.kolashampan.desc": "The famous orange soda from El Salvador.",
      "items.glass-sodas": "Glass bottle sodas",
      "items.glass-sodas.desc": "Mirinda, Coca-Cola and Tropical Banana.",
      "items.natural-juices": "Natural juices",
      "items.natural-juices.desc": "Tamarindo, Passion Fruit, Coconut and Horchata.",
      "items.coconut-juice": "Coconut juice",
      "items.coconut-juice.desc": "Refreshing FOCO juice with coconut pieces.",
      "items.frozen-nances": "Frozen nances",
      "items.frozen-nances.desc": "Sour yellow nances, preserved frozen.",
      "items.tamales-elote": "Corn tamales",
      "items.tamales-elote.desc": "Sweet corn tamales, ready to heat.",
      "items.charrales": "Fried charrales",
      "items.charrales.desc": "Crispy charrales with chili and lime.",
      "items.guayaberas": "Guayaberas",
      "items.guayaberas.desc": "Traditional shirts for boys and men.",
      "items.dresses-bags": "Dresses and bags",
      "items.dresses-bags.desc": "Traditional dresses, bags and blankets.",
      "items.jerseys": "Special jerseys",
      "items.jerseys.desc": "Soccer and commemorative jerseys.",
      "items.handbags": "Handbags",
      "items.handbags.desc": "Mix of traditional and modern bags.",
      "items.chanclas": "Chanclas",
      "items.chanclas.desc": "Comfortable footwear for home or pool.",
      "items.country-hats": "Country hats",
      "items.country-hats.desc": "Hats representing Central American countries.",
      "items.beanies": "Winter beanies",
      "items.beanies.desc": "Warm hats for Colorado winter.",
      "items.silabario": "Silabario Hispanoamericano",
      "items.silabario.desc": "The classic phonics book that taught generations to read.",
      "items.trinkets": "Trinkets and gifts",
      "items.trinkets.desc": "Keychains, bracelets and hair accessories.",
      "items.souvenirs": "Souvenirs",
      "items.souvenirs.desc": "Wallets and gifts with beautiful patterns.",
      "items.personal-care": "Personal care",
      "items.personal-care.desc": "Imported soaps, oils and hygiene items.",
      
      // Pollo page - UPDATED ENGLISH STRINGS (NO SALES/ORDERING)
      "pollo.meta.description": "Pollo Campero – Family tradition and reheating recommendations.",
      "pollo.hero.title": "Pollo Campero – Family Tradition",
      "pollo.hero.lead": "Note: Pollo Campero is a beloved food in Central America. Our family enjoys it as part of our traditions, and we know many travelers bring cold boxes from Guatemala or El Salvador to share at home.",
      "pollo.hero.note": "Here we share recommendations for reheating and enjoying it with the best flavor, just as we do as a family.",
      "pollo.story.title": "Cultural History of the Food",
      "pollo.story.p1": "Pollo Campero originated in Guatemala and became a staple in El Salvador since 1972. It's deeply tied to family traditions, celebrations and childhood memories. Many travelers carry boxes of Pollo Campero from the airport to share with loved ones – because it tastes like home.",
      "pollo.story.p2": "For our family, enjoying Pollo Campero means reviving heritage, cherished memories and the authentic <em>Sabor Campero</em>.",
      "pollo.image.caption": "Pollo Campero – a family tradition celebrated for generations.",
      "pollo.reheat.title": "Reheating Recommendations",
      "pollo.reheat.intro": "The chicken is typically delivered cold in a box. To restore crispy texture and flavor, use one of these methods:",
      "pollo.reheat.airfryer.title": "🍗 Air Fryer Method (Quick and Crispy)",
      "pollo.reheat.airfryer.step1": "Preheat the air fryer to <strong>190°C (375°F)</strong>.",
      "pollo.reheat.airfryer.step2": "Place chicken in a single layer in the basket (don't overcrowd).",
      "pollo.reheat.airfryer.step3": "Reheat for <strong>4–6 minutes</strong>, flipping halfway if pieces are large.",
      "pollo.reheat.airfryer.step4": "Check internal temperature: it should reach <strong>74°C (165°F)</strong>.",
      "pollo.reheat.airfryer.step5": "Let rest 1–2 minutes before serving.",
      "pollo.reheat.oven.title": "🔥 Oven Method (Slower but Reliable)",
      "pollo.reheat.oven.step1": "Preheat oven to <strong>200°C (400°F)</strong>.",
      "pollo.reheat.oven.step2": "Place chicken on a rack over a baking sheet to keep the crust crispy.",
      "pollo.reheat.oven.step3": "Optional: loosely cover with foil for the first half to prevent drying; then remove to brown.",
      "pollo.reheat.oven.step4": "Bake for <strong>12–15 minutes</strong>, flipping halfway if not using a rack.",
      "pollo.reheat.oven.step5": "Check that internal temperature reaches <strong>74°C (165°F)</strong>.",
      "pollo.reheat.oven.step6": "Let rest 2 minutes before serving.",
      "pollo.notes.title": "Important Information",
      "pollo.notes.text": "This page is dedicated to sharing the cultural tradition of Pollo Campero and its best reheating methods."
    },
    es: {
      "site.title": "Tienda Salvadoreña – Inicio",
      "meta.description": "Productos auténticos salvadoreños y centroamericanos en Denver – tradición, sabor y comunidad.",
      "nav.home": "Inicio",
      "nav.items": "Artículos",
      "nav.history": "Historia",
      "nav.pollo": "Pollo Campero",
      "nav.press": "Prensa",
      "nav.contact": "Contacto",
      "hero.title": "Tienda Salvadoreña",
      "hero.lead": "Productos auténticos salvadoreños y centroamericanos en Denver – tradición, sabor y comunidad.",
      "hero.explore": "Explorar productos",
      "hero.press": "Prensa",
      "hero.imgAlt": "Jorge y Delia comprando",
      "mission.title": "La tienda salvadoreña más antigua de Colorado",
      "mission.lead": "Tienda Salvadoreña es un negocio familiar arraigado en la comunidad. Durante más de 30 años hemos servido a la comunidad hispana de Denver con productos, comida y cultura auténticos, manteniendo vivas nuestras tradiciones.",
      "categories.title": "Explora Nuestros Productos",
      "cat.food.title": "Comida y Bebidas",
      "cat.food.lead": "Refrescos, jugos, chocolate y fruta congelada.",
      "cat.food.imgAlt": "Comida y Bebidas",
      "cat.clothing.title": "Ropa y Accesorios",
      "cat.clothing.lead": "Guayaberas, sombreros y calzado tradicional.",
      "cat.clothing.imgAlt": "Ropa y Accesorios",
      "cat.nostalgia.title": "Chucherías y recuerdos",
      "cat.nostalgia.lead": "Llaveros, pulseras y regalos con identidad.",
      "cat.nostalgia.imgAlt": "Chucherías y regalos",
      "cat.wellness.title": "Hierbas y Cuidado",
      "cat.wellness.lead": "Medicinas, jabones naturales y artículos de higiene.",
      "cat.wellness.imgAlt": "Hierbas y Cuidado",
      "categories.viewall": "Ver todos los artículos",
      "press.title": "Reconocimiento Comunitario",
      "press.quote": "\"Un pilar de la comunidad hispana de Denver.\"",
      "press.readmore": "Leer más en Prensa",
      "footer.hours_label": "Horario:",
      "footer.hours": "Domingo 10 AM–6 PM · Lunes–Sábado 10 AM–7 PM",
      "footer.contactline": "Contacto: 5128 E Colfax Ave, Denver, CO 80220 | Teléfono: (303) 394-4185 | Correo: info@tiendasalvadorenadenver.com",
      "footer.copy": "© 2025 Tienda Salvadoreña. Todos los derechos reservados. – Este sitio web fue creado en cumplimiento parcial de los requisitos del curso CIS 3030.",
      
      // Items page
      "items.hero.title": "Descubre nuestros productos",
      "items.hero.lead": "Productos centroamericanos auténticos en Colorado.",
      "items.hero.explore": "Explorar nuestros productos",
      "items.filter.all": "Mostrar todo",
      "items.filter.food": "Comida y snacks",
      "items.filter.drinks": "Bebidas",
      "items.filter.clothing": "Ropa y calzado",
      "items.filter.wellness": "Bienestar y medicinas",
      "items.filter.nostalgia": "Nostalgia y hogar",
      
      // Product cards
      "items.medicine-cabinet": "Gabinete de Medicinas",
      "items.medicine-cabinet.desc": "Medicinas de venta libre importadas para su salud.",
      "items.vitamins": "Vitaminas",
      "items.vitamins.desc": "Vitaminas esenciales y suplementos orales.",
      "items.natural-soaps": "Jabones naturales y hierbas",
      "items.natural-soaps.desc": "Productos de higiene natural y remedios a base de hierbas.",
      "items.supplements": "Suplementos",
      "items.supplements.desc": "Nopalina, linaza y otros suplementos dietéticos.",
      "items.pantry-staples": "Básicos de la despensa",
      "items.pantry-staples.desc": "Frijoles, salsas y condimentos auténticos.",
      "items.dairy-essentials": "Esenciales lácteos",
      "items.dairy-essentials.desc": "Crema y quesos salvadoreños frescos.",
      "items.queso-duro": "Queso Duro Viejo",
      "items.queso-duro.desc": "Famoso queso duro de El Salvador.",
      "items.spices-herbs": "Especias y hierbas",
      "items.spices-herbs.desc": "Hierbas secas, bolsitas de té y especias para cocinar.",
      "items.pan-dulce": "Pan Dulce",
      "items.pan-dulce.desc": "Pan dulce fresco, quesadillas y galletas.",
      "items.traditional-candy": "Dulces tradicionales",
      "items.traditional-candy.desc": "Golosinas típicas de casa.",
      "items.chips-snacks": "Chips y snacks",
      "items.chips-snacks.desc": "Chips de plátano, snacks y frituras saladas.",
      "items.kolashampan": "Kolashampan",
      "items.kolashampan.desc": "El famoso refresco de naranja de El Salvador.",
      "items.glass-sodas": "Refrescos en botella de vidrio",
      "items.glass-sodas.desc": "Mirinda, Coca-Cola y Tropical Banana.",
      "items.natural-juices": "Jugos naturales",
      "items.natural-juices.desc": "Tamarindo, Maracuyá, Coco y Horchata.",
      "items.coconut-juice": "Jugo de coco",
      "items.coconut-juice.desc": "Refrescante jugo FOCO con trozos de coco.",
      "items.frozen-nances": "Nances congelados",
      "items.frozen-nances.desc": "Nances amarillos agrios, conservados congelados.",
      "items.tamales-elote": "Tamales de elote",
      "items.tamales-elote.desc": "Tamales dulces de maíz, listos para calentar.",
      "items.charrales": "Charrales fritos",
      "items.charrales.desc": "Charrales crujientes con chile y limón.",
      "items.guayaberas": "Guayaberas",
      "items.guayaberas.desc": "Camisas tradicionales para niños y hombres.",
      "items.dresses-bags": "Vestidos y Bolsos",
      "items.dresses-bags.desc": "Vestidos tradicionales, bolsos y mantas.",
      "items.jerseys": "Jerseys especiales",
      "items.jerseys.desc": "Jerseys de fútbol y conmemorativos.",
      "items.handbags": "Bolsos de mano",
      "items.handbags.desc": "Mezcla de bolsos tradicionales y modernos.",
      "items.chanclas": "Chanclas",
      "items.chanclas.desc": "Calzado cómodo para casa o piscina.",
      "items.country-hats": "Sombreros de país",
      "items.country-hats.desc": "Sombreros que representan países centroamericanos.",
      "items.beanies": "Gorros de invierno",
      "items.beanies.desc": "Gorros abrigados para el invierno de Colorado.",
      "items.silabario": "Silabario Hispanoamericano",
      "items.silabario.desc": "El clásico libro de fonética que enseñó a leer a generaciones.",
      "items.trinkets": "Chucherías y regalos",
      "items.trinkets.desc": "Llaveros, pulseras y accesorios para el cabello.",
      "items.souvenirs": "Souvenirs",
      "items.souvenirs.desc": "Carteras y regalos con hermosos patrones.",
      "items.personal-care": "Cuidado personal",
      "items.personal-care.desc": "Jabones, aceites y artículos de higiene importados.",
      
      // Pollo page - SPANISH STRINGS UPDATED (ONLY CULTURAL)
      "pollo.meta.description": "Pollo Campero – Tradición familiar y recomendaciones para recalentar.",
      "pollo.hero.title": "Pollo Campero – Tradición Familiar",
      "pollo.hero.lead": "Nota: Pollo Campero es un alimento muy querido en Centroamérica. Nuestra familia lo disfruta como parte de nuestras tradiciones, y sabemos que muchos viajeros lo traen en cajas frías desde Guatemala o El Salvador para compartir en casa.",
      "pollo.hero.note": "Aquí compartimos recomendaciones para recalentar y disfrutarlo con el mejor sabor, tal como lo hacemos en familia.",
      "pollo.story.title": "Historia cultural del alimento",
      "pollo.story.p1": "Pollo Campero se originó en Guatemala y se convirtió en un pilar en El Salvador desde 1972. Está profundamente ligado a tradiciones familiares, celebraciones y recuerdos de la infancia. Muchos viajeros llevan cajas de Pollo Campero desde el aeropuerto para compartir con sus seres queridos – porque sabe a casa.",
      "pollo.story.p2": "Para nuestra familia, disfrutar Pollo Campero significa revivir herencia, recuerdos preciados y el auténtico <em>Sabor Campero</em>.",
      "pollo.image.caption": "Pollo Campero – tradición familiar celebrada por generaciones.",
      "pollo.reheat.title": "Recomendaciones para recalentar",
      "pollo.reheat.intro": "El pollo suele entregarse frío en caja. Para recuperar textura crujiente y sabor, use uno de estos métodos:",
      "pollo.reheat.airfryer.title": "🍗 Método Air Fryer (Rápido y crujiente)",
      "pollo.reheat.airfryer.step1": "Precaliente la freidora a <strong>190°C (375°F)</strong>.",
      "pollo.reheat.airfryer.step2": "Coloque el pollo en una sola capa en la canasta (no sobrecargue).",
      "pollo.reheat.airfryer.step3": "Recaliente <strong>4–6 minutos</strong>, volteando a la mitad si las piezas son grandes.",
      "pollo.reheat.airfryer.step4": "Verifique la temperatura interna: debe alcanzar <strong>74°C (165°F)</strong>.",
      "pollo.reheat.airfryer.step5": "Deje reposar 1–2 minutos antes de servir.",
      "pollo.reheat.oven.title": "🔥 Método Horno (Más lento pero confiable)",
      "pollo.reheat.oven.step1": "Precaliente el horno a <strong>200°C (400°F)</strong>.",
      "pollo.reheat.oven.step2": "Coloque el pollo sobre una rejilla encima de una bandeja para hornear para mantener la corteza crujiente.",
      "pollo.reheat.oven.step3": "Opcional: cubra flojamente con papel aluminio la primera mitad para evitar que se reseque; luego retire para dorar.",
      "pollo.reheat.oven.step4": "Hornee <strong>12–15 minutos</strong>, volteando a la mitad si no usa rejilla.",
      "pollo.reheat.oven.step5": "Verifique que la temperatura interna alcance <strong>74°C (165°F)</strong>.",
      "pollo.reheat.oven.step6": "Deje reposar 2 minutos antes de servir.",
      "pollo.notes.title": "Información Importante",
      "pollo.notes.text": "Esta página está dedicada a compartir la tradición cultural de Pollo Campero y sus mejores métodos de recalentamiento."
    }
  };

  // Get translation for a key
  function t(lang, key) {
    return translations[lang] && translations[lang][key] ? translations[lang][key] : null;
  }

  // Apply translations to all elements with data-i18n attributes
  function applyTranslations(lang) {
    console.log('Applying translations for language:', lang);

    // Set document language
    document.documentElement.lang = lang;

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = t(lang, key);
      if (text) {
        if (el.tagName === 'TITLE') {
          document.title = text;
        } else if (el.getAttribute('data-i18n-html') === 'true' || text.includes('<strong>') || text.includes('<em>')) {
          // If data-i18n-html is true, or text contains HTML tags, use innerHTML
          el.innerHTML = text;
        } else {
          // Otherwise, use textContent for security
          el.textContent = text;
        }
      } else {
        console.warn('Missing translation for key:', key, 'in element:', el);
      }
    });

    // Translate attributes
    const attributeMap = [
      ['data-i18n-placeholder', 'placeholder'],
      ['data-i18n-value', 'value'],
      ['data-i18n-alt', 'alt'],
      ['data-i18n-title', 'title'],
      ['data-i18n-aria', 'aria-label']
    ];

    attributeMap.forEach(([dataAttr, targetAttr]) => {
      document.querySelectorAll(`[${dataAttr}]`).forEach(el => {
        const key = el.getAttribute(dataAttr);
        const text = t(lang, key);
        if (text) {
          if (targetAttr === 'value') {
            el.value = text;
          } else {
            el.setAttribute(targetAttr, text);
          }
        } else {
          console.warn('Missing translation for attribute key:', key);
        }
      });
    });

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
    if (metaDesc) {
      const key = metaDesc.getAttribute('data-i18n');
      const text = t(lang, key);
      if (text) {
        metaDesc.setAttribute('content', text);
      }
    }

    console.log('Translation complete for:', lang);
  }

  // Save language preference to localStorage
  function saveLanguagePreference(lang) {
    try {
      localStorage.setItem('siteLang', lang);
      console.log('Saved language preference:', lang);
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }

  // Set active language and update UI
  function setLanguage(lang) {
    console.log('Setting language to:', lang);
    saveLanguagePreference(lang);

    // Apply translations
    applyTranslations(lang);

    // Update button states
    const btnEs = document.getElementById('btnSpanish');
    const btnEn = document.getElementById('btnEnglish');

    if (btnEs && btnEn) {
      if (lang === 'es') {
        btnEs.classList.add('active');
        btnEs.setAttribute('aria-pressed', 'true');
        btnEn.classList.remove('active');
        btnEn.setAttribute('aria-pressed', 'false');
      } else {
        btnEn.classList.add('active');
        btnEn.setAttribute('aria-pressed', 'true');
        btnEs.classList.remove('active');
        btnEs.setAttribute('aria-pressed', 'false');
      }
    }
  }

  // Initialize on page load
  function init() {
    console.log('Initializing language toggle');

    const btnEs = document.getElementById('btnSpanish');
    const btnEn = document.getElementById('btnEnglish');

    if (btnEs && btnEn) {
      // Add click handlers
      btnEs.addEventListener('click', () => {
        console.log('Spanish button clicked');
        setLanguage('es');
      });

      btnEn.addEventListener('click', () => {
        console.log('English button clicked');
        setLanguage('en');
      });

      // Load saved preference or default to Spanish
      try {
        const saved = localStorage.getItem('siteLang');
        const initialLang = saved === 'en' ? 'en' : 'es';
        console.log('Initial language:', initialLang);
        setLanguage(initialLang);
      } catch (e) {
        console.log('Loading default language: es');
        setLanguage('es');
      }
    } else {
      // Fallback: apply default language (Spanish) if buttons are missing
      setLanguage('es');
      console.error('Language toggle buttons not found!');
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already loaded
    init();
  }
})();
