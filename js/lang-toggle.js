/*
Author: David Quintana
MSU Denver login name: dquint32
Date Created: 11/02/2025
Date Due: 12/01/2024
Modified: 12/15/2025 
Filename: lang-toggle.js
Purpose: Bilingual language toggle functionality for Spanish/English translation across all pages.
Editor: Notepad
Generative AI Used: Yes, Gemini, Copilot, Claude
*/

// js/lang-toggle.js
(function () {
  console.log('lang-toggle.js initializing');

  const translations = {
    en: {
      // ========================================
      // GLOBAL SITE TRANSLATIONS
      // ========================================
      "site.title": "Tienda Salvadoreña – Home",
      "meta.description": "Authentic Salvadoran and Central American products in Denver – tradition, flavor and community.",

      // Per-page SEO titles & descriptions
      "title.home": "Tienda Salvadoreña Denver | #1 Salvadoran Store",
      "desc.home": "Denver's oldest Salvadoran store (30+ years). Authentic Salvadoran & Central American food, cheeses, drinks and more on E Colfax Ave.",
      "title.items": "Salvadoran Products in Denver | Items – Tienda Salvadoreña",
      "desc.items": "Browse Salvadoran & Central American food, drinks, cheeses, clothing and nostalgic goods in Denver. Kolashampan, queso duro, pan dulce and more.",
      "title.history": "Our Story | Tienda Salvadoreña Denver",
      "desc.history": "The story of Jorge and Delia Romero: 30+ years serving Denver's Salvadoran and Central American community with authentic products.",
      "title.pollo": "Pollo Campero: Tradition & Reheating Tips | Tienda Salvadoreña Denver",
      "desc.pollo": "Pollo Campero history and a step-by-step reheating guide (air fryer & oven) for the best flavor. Central American tradition in Denver, Colorado.",
      "title.press": "Press & Recognition | Tienda Salvadoreña Denver",
      "desc.press": "Media coverage of Tienda Salvadoreña, Denver's first Salvadoran store. Featured in Diario El Salvador and Denverite.",
      "title.contact": "Contact & Location on E Colfax | Tienda Salvadoreña Denver",
      "desc.contact": "Visit us at 5128 E Colfax Ave, Denver, CO 80220. Hours, phone (303) 394-4185, map and parking. Salvadoran store in Denver.",
      
      // Navigation
      "nav.home": "Home",
      "nav.items": "Items",
      "nav.history": "History",
      "nav.pollo": "Pollo Campero",
      "nav.press": "Press",
      "nav.contact": "Contact",
      
      // Footer
      "footer.hours_label": "Hours:",
      "footer.hours": "Sunday 10 AM–6 PM · Mon–Sat 10 AM–7 PM",
      "footer.contactline": "Contact: 5128 E Colfax Ave, Denver, CO 80220 | Phone: (303) 394-4185 | Email: info@tiendasalvadorenadenver.com",
      "footer.copy": "© 2025 Tienda Salvadoreña. All rights reserved. – This website was created in partial fulfillment of the requirements for course CIS 3030.",

      // ========================================
      // HOME PAGE (index.html)
      // ========================================
      "hero.title": "Tienda Salvadoreña",
      "hero.lead": "Authentic Salvadoran and Central American products in Denver – tradition, flavor and community.",
      "hero.note": "Colorado's oldest Salvadoran store (30+ years)",
      "hero.explore": "Explore our products",
      "hero.press": "Press",
      "hero.imgAltNavidad": "Jorge and Delia praying at the Christmas nativity with a Merry Christmas sign",
      
      "mission.title": "Colorado's oldest Salvadoran store",
      "mission.lead": "Tienda Salvadoreña is a family business rooted in the community. For over 30 years we've served Denver's Hispanic community with authentic products, food and culture, keeping our traditions alive.",
      
      "categories.title": "Explore Our Products",
      "categories.viewall": "View all items",
      
      // Category Cards
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
      
      // Press Section
      "press.title": "Community Recognition",
      "press.quote": "\"A pillar of Denver's Hispanic community.\"",
      "press.readmore": "Read more in Press",

      // ========================================
      // ITEMS PAGE (items.html)
      // ========================================
      "items.hero.title": "Discover our products",
      "items.hero.lead": "Authentic Central American products in Colorado.",
      "items.hero.button": "Explore our products",
      
      "items.intro.title": "Authentic Products",
      "items.intro.note": "Over 30 years importing the best products of El Salvador and Central America. From traditional foods to clothing and nostalgic items.",
      
      // Filter Buttons
      "items.category.all": "Show all",
      "items.category.food": "Food and snacks",
      "items.category.drinks": "Drinks",
      "items.category.clothing": "Clothing and footwear",
      "items.category.wellness": "Wellness and OTC",
      "items.category.nostalgia": "Nostalgia and home",
      
      // Product Cards - Wellness
      "items.medicine-cabinet": "Medicine Cabinet",
      "items.medicine-cabinet.desc": "Imported over-the-counter medicines for your health.",
      "items.vitamins": "Vitamins",
      "items.vitamins.desc": "Essential vitamins and oral supplements.",
      "items.natural-soaps": "Natural Soaps and Herbs",
      "items.natural-soaps.desc": "Natural hygiene products and herbal remedies.",
      "items.supplements": "Supplements",
      "items.supplements.desc": "Nopalina, flaxseed, and other food supplements.",
      "items.personal-care": "Personal Care",
      "items.personal-care.desc": "Imported soaps, oils, and hygiene items.",
      
      // Product Cards - Food
      "items.pantry-staples": "Pantry Staples",
      "items.pantry-staples.desc": "Authentic beans, sauces, and seasonings.",
      "items.dairy-essentials": "Essential Dairy",
      "items.dairy-essentials.desc": "Fresh Salvadoran Cream and cheeses.",
      "items.queso-duro": "Aged Hard Cheese",
      "items.queso-duro.desc": "Famous hard cheese from El Salvador.",
      "items.spices-herbs": "Spices and Herbs",
      "items.spices-herbs.desc": "Dried herbs, tea bags, and cooking spices.",
      "items.pan-dulce": "Sweet Bread",
      "items.pan-dulce.desc": "Fresh sweet bread, quesadillas, and cookies.",
      "items.traditional-candy": "Traditional Candies",
      "items.traditional-candy.desc": "Typical treats from the homeland.",
      "items.chips-snacks": "Chips and Snacks",
      "items.chips-snacks.desc": "Plantain chips, appetizers, and savory snacks.",
      "items.frozen-nances": "Frozen Nances",
      "items.frozen-nances.desc": "Acidic yellow nances, preserved frozen.",
      "items.tamales-elote": "Corn Tamales",
      "items.tamales-elote.desc": "Sweet corn tamales, ready to heat.",
      "items.charrales": "Fried Charrales",
      "items.charrales.desc": "Crispy charrales with chili and lime.",
      
      // Product Cards - Drinks
      "items.kolashampan": "Kolashampan",
      "items.kolashampan.desc": "The famous orange soda from El Salvador.",
      "items.glass-sodas": "Glass Bottle Sodas",
      "items.glass-sodas.desc": "Mirinda, Coca-Cola, and Tropical Banana.",
      "items.natural-juices": "Natural Juices",
      "items.natural-juices.desc": "Tamarind, Passion Fruit, Coconut, and Horchata.",
      "items.coconut-juice": "Coconut Juice",
      "items.coconut-juice.desc": "Refreshing FOCO juice with coconut chunks.",
      
      // Product Cards - Clothing
      "items.guayaberas": "Guayaberas",
      "items.guayaberas.desc": "Traditional shirts for boys and men.",
      "items.dresses-bags": "Dresses and Bags",
      "items.dresses-bags.desc": "Traditional dresses, bags, and blankets.",
      "items.jerseys": "Special Jerseys",
      "items.jerseys.desc": "Soccer and commemorative jerseys.",
      "items.handbags": "Wallets/Purses",
      "items.handbags.desc": "Mix of traditional and modern bags.",
      "items.chanclas": "Flip-flops/Sandals",
      "items.chanclas.desc": "Comfortable footwear for the house or pool.",
      "items.country-hats": "Country Hats/Caps",
      "items.country-hats.desc": "Hats representing Central American countries.",
      "items.beanies": "Winter Hats",
      "items.beanies.desc": "Warm hats for the Colorado winter.",
      
      // Product Cards - Nostalgia
      "items.silabario": "Hispano-American Syllabary",
      "items.silabario.desc": "The classic phonetics book that taught generations to read.",
      "items.trinkets": "Trinkets and Gifts",
      "items.trinkets.desc": "Keychains, bracelets, and hair accessories.",
      "items.souvenirs": "Souvenirs",
      "items.souvenirs.desc": "Wallets and gifts with beautiful patterns.",

      // ========================================
      // HISTORY PAGE (history.html)
      // ========================================
      "history.hero.title": "Family History",
      "history.hero.lead": "From a classroom in El Salvador to a little store in Denver: this is how Jorge and Delia built a home for culture, food, and community.",
      
      "history.mission.title": "Our Mission",
      "history.mission.text": "Our mission is to keep Salvadoran traditions alive by offering authentic products that nourish both body and spirit. Inspired by Jorge and Delia's dedication, we serve Colorado's community with warmth, integrity, and a commitment to cultural pride.",
      
      "history.story.title": "The Grandparents' Story",
      "history.story.p1": "Tienda Salvadoreña was born from the love story between Delia, a dedicated teacher from El Salvador, and Jorge, a tireless worker from the airline industry in Ecuador. Upon arriving in Denver, Delia dreamed of creating a place where Central Americans could feel at home, and Jorge was always by her side to make it happen. Their first store on Colorado Boulevard was as small as a closet, but it offered the flavors and traditions that reminded people of their homeland. With effort and heart, they grew to open the larger store on East Colfax, where today they offer a wide variety of products that celebrate Central American culture. For Delia and Jorge, the store is much more than a business: it is a pillar of the community, a way to keep traditions alive in Denver families, and a legacy of love, resilience, and pride that continues to inspire their children, grandchildren, and neighbors.",
      
      "history.highlights.title": "Key Highlights",
      "history.highlights.meeting": "<strong>The Meeting:</strong> A respected teacher in El Salvador meets Jorge, an entrepreneurial and kind man.",
      "history.highlights.partnership": "<strong>The Partnership:</strong> Shared values of education, faith, and service guide their path.",
      "history.highlights.beginnings": "<strong>The Beginnings:</strong> A little store on Colorado Boulevard grows with dedication.",
      "history.highlights.legacy": "<strong>The Legacy:</strong> A community pillar that serves Denver for over three decades.",
      
      "history.heritage.title": "Heritage and Nostalgia",
      "history.heritage.caption1": "Our sign – a landmark and a welcome.",
      "history.heritage.caption2": "A pillar of the classroom – literacy, dignity, and shared roots.",
      "history.heritage.caption3": "Blue and white – the origin we bring to our daily work.",
      
      "history.purpose.title": "Purpose of this Page",
      "history.purpose.text": "To share the personal legacy of Jorge and Delia and establish the authentic and nostalgic roots of the business. This page fulfills the main visual requirement with the pupusas cartoon scene and supports the real story through images of heritage and community context.",
      
      "history.values.title": "Our Values",
      "history.values.authenticity": "✓ Authenticity – genuine products that represent our culture.",
      "history.values.family": "✓ Family – a business founded on love and legacy.",
      "history.values.community": "✓ Community – serving with warmth and respect.",
      "history.values.pride": "✓ Cultural Pride – sharing our roots with Colorado.",
      
      "history.cta.title": "Visit Us",
      "history.cta.text": "We invite you to visit Tienda Salvadoreña in Denver and be part of our story. Every purchase supports a family legacy and keeps the traditions of El Salvador alive.",
      "history.cta.button": "Go to Contact",

      // ========================================
      // POLLO CAMPERO PAGE (pollo.html)
      // ========================================
      "pollo.meta.description": "Pollo Campero – Family tradition and reheating recommendations.",
      "pollo.hero.title": "Pollo Campero – Family Tradition",
      "pollo.hero.lead": "Note: Pollo Campero is a beloved food in Central America. Our family enjoys it as part of our traditions, and we know many travelers bring cold boxes from Guatemala or El Salvador to share at home.",
      "pollo.hero.note": "Here we share recommendations for reheating and enjoying it with the best flavor, just like we do as a family.",
      
      "pollo.story.title": "Cultural History of the Food",
      "pollo.story.p1": "Pollo Campero originated in Guatemala and became a pillar in El Salvador since 1972. It is deeply tied to family traditions, celebrations, and childhood memories. Many travelers carry boxes of Pollo Campero from the airport to share with loved ones – because it tastes like home.",
      "pollo.story.p2": "For our family, enjoying Pollo Campero means reliving heritage, cherished memories, and the authentic <em>Campero Flavor</em>.",
      
      "pollo.image.caption": "Pollo Campero – family tradition celebrated for generations.",
      
      "pollo.reheat.title": "Reheating Recommendations",
      "pollo.reheat.intro": "The chicken is typically delivered cold in a box. To restore crispy texture and flavor, use one of these methods:",
      
      "pollo.reheat.airfryer.title": "🍗 Air Fryer Method (Quick and Crispy)",
      "pollo.reheat.airfryer.step1": "Preheat the air fryer to <strong>190°C (375°F)</strong>.",
      "pollo.reheat.airfryer.step2": "Place the chicken in a single layer in the basket (do not overcrowd).",
      "pollo.reheat.airfryer.step3": "Reheat <strong>4–6 minutes</strong>, flipping halfway if the pieces are large.",
      "pollo.reheat.airfryer.step4": "Check the internal temperature: it should reach <strong>74°C (165°F)</strong>.",
      "pollo.reheat.airfryer.step5": "Let rest for 1–2 minutes before serving.",
      
      "pollo.reheat.oven.title": "🔥 Oven Method (Slower but Reliable)",
      "pollo.reheat.oven.step1": "Preheat the oven to <strong>200°C (400°F)</strong>.",
      "pollo.reheat.oven.step2": "Place the chicken on a wire rack over a baking sheet to keep the crust crispy.",
      "pollo.reheat.oven.step3": "Optional: loosely cover with aluminum foil for the first half to prevent drying out; then remove to brown.",
      "pollo.reheat.oven.step4": "Bake <strong>12–15 minutes</strong>, flipping halfway if not using a rack.",
      "pollo.reheat.oven.step5": "Check that the internal temperature reaches <strong>74°C (165°F)</strong>.",
      "pollo.reheat.oven.step6": "Let rest for 2 minutes before serving.",
      
      "pollo.notes.title": "Important Information",
      "pollo.notes.text": "This page is dedicated to sharing the cultural tradition of Pollo Campero and its best reheating methods.",
      
      "pollo.why.title": "Why Pollo Campero?",
      "pollo.why.authentic": "<strong>Authentic:</strong> Original Guatemalan recipe since 1971",
      "pollo.why.nostalgic": "<strong>Nostalgic:</strong> Flavor that connects with home and childhood",
      "pollo.why.family": "<strong>Family:</strong> Perfect for gatherings and celebrations",
      "pollo.why.exclusive": "<strong>Exclusive:</strong> Difficult to find outside Central America",

      // ========================================
      // PRESS PAGE (press.html)
      // ========================================
      "press.hero.title": "Press and Recognition",
      "press.hero.lead": "We document the impact of Tienda Salvadoreña on the community: articles, mentions and recognitions that tell our story.",
      "press.lead": "Over 30 years of community service documented by local and international media.",
      
      "press.coverage.title": "Featured Coverage",
      "press.quote1.text": "\"Tienda Salvadoreña is a business located in Denver, Colorado, and was the first store with products from El Salvador founded in that city.\"",
      "press.quote2.text": "\"Most of the people who visit the business are filled with nostalgia when they see the traditional foods they find.\"",
      "press.quote3.text": "\"People come here from all over Colorado, Wyoming and Nebraska to buy cheeses and souvenirs that he imports from home.\"",
      "press.quote4.text": "\"On East Colfax, next to the trendy Bellwether coffeeshop, Jorge Romero and his wife, Delia, have run a Salvadoran grocery for more than 25 years.\"",
      "press.quote.readarticle": "Read article",
      
      "press.images.title": "Images and Credits",
      "press.images.caption1": "Delia Romero holding the flag inside Tienda Salvadoreña. Photo © Kevin Beaty / Denverite, 2018",
      "press.images.credits1": "Photo © Kevin Beaty / Denverite",
      "press.images.caption2": "Jorge Romero behind the counter.",
      "press.images.credits2": "Photo © Kevin Beaty / Denverite, 2018",
      "press.images.caption3": "Jorge and Delia with the flag of El Salvador.",
      "press.images.credits3": "Photo: Nicolle Menéndez / Diario El Salvador",
      
      "press.featured.title": "Featured Articles",
      "press.featured.article1": "A store in Denver celebrates 32 years of sharing Salvadoran culture – Diario El Salvador",
      "press.featured.article2": "DACA fight overshadows status battle for Denver's Salvadorans – Denverite",
      
      "press.impact.title": "Community Impact",
      "press.impact.text": "Delia and Jorge have been recognized for their service to the community, especially during emergencies such as earthquakes in El Salvador. The store has served as a cultural meeting point and support for generations of families.",
      
      "press.recognition.title": "Recognition",
      "press.recog.item1": "🏆 First Salvadoran business in Denver (1991)",
      "press.recog.item2": "📰 Featured in local and international media",
      "press.recog.item3": "🤝 Community support during humanitarian crises",
      "press.recog.item4": "❤️ Over 30 years serving the Hispanic community",

      // ========================================
      // CONTACT PAGE (contact.html)
      // ========================================
      "contact.hero.title": "Contact & Location",
      "contact.hero.lead": "We're here to help. Call us, write to us or visit us at the address below. We'll respond as soon as possible.",
      
      "contact.info.title": "Contact information",
      "contact.label.address": "Address:",
      "contact.directions": "View on Google Maps →",
      "contact.label.phone": "Phone:",
      "contact.label.email": "Email:",
      "contact.facebook.link": "Visit our Facebook page →",
      
      "contact.label.hours": "Hours:",
      "contact.hours.sunday": "Sunday",
      "contact.hours.monday": "Monday",
      "contact.hours.tuesday": "Tuesday",
      "contact.hours.wednesday": "Wednesday",
      "contact.hours.thursday": "Thursday",
      "contact.hours.friday": "Friday",
      "contact.hours.saturday": "Saturday",
      
      "contact.label.parking": "Parking:",
      "contact.parking.details": "Street parking and behind the store (we share a lot with other businesses; approximately 4 spaces). You can also park on Forrest Street and walk to the store.",
      
      "contact.map.title": "How to get there",
      "contact.map.note": "We recommend calling ahead to confirm availability of special products.",
      
      "contact.notes.title": "Additional information",
      "contact.notes.text": "For large orders or press inquiries, use the phone or email listed above.",
      
      // Quintana Notary Partnership
      "quintana.title.compact": "Notary & Translation Here",
      "quintana.notary.title.compact": "📝 Notary Services",
      "quintana.notary.desc.compact": "$10/signature at this location (regular $15) • No travel fee",
      "quintana.translation.title.compact": "🌐 Certified Translations",
      "quintana.translation.desc.compact": "English ↔ Spanish • USCIS/DMV accepted • $5 OFF with store receipt",
      "quintana.translation.link": "Learn More →",
      "quintana.website": "Visit Website"
    },
    
    es: {
      // ========================================
      // GLOBAL SITE TRANSLATIONS (SPANISH)
      // ========================================
      "site.title": "Tienda Salvadoreña – Inicio",
      "meta.description": "Productos auténticos salvadoreños y centroamericanos en Denver – tradición, sabor y comunidad.",

      // Títulos y descripciones SEO por página
      "title.home": "Tienda Salvadoreña Denver | Productos Salvadoreños #1",
      "desc.home": "La tienda salvadoreña más antigua de Denver (30+ años). Productos salvadoreños y centroamericanos auténticos: comida, quesos, bebidas y más en E Colfax Ave.",
      "title.items": "Artículos Salvadoreños en Denver | Tienda Salvadoreña",
      "desc.items": "Explora comida, bebidas, quesos, ropa y artículos nostálgicos salvadoreños y centroamericanos en Denver. Kolashampan, queso duro, pan dulce y más.",
      "title.history": "Nuestra Historia | Tienda Salvadoreña Denver",
      "desc.history": "La historia de Jorge y Delia Romero: 30+ años sirviendo a la comunidad salvadoreña y centroamericana de Denver con productos auténticos.",
      "title.pollo": "Pollo Campero: Tradición y Cómo Recalentar | Tienda Salvadoreña Denver",
      "desc.pollo": "Historia del Pollo Campero y guía para recalentarlo (air fryer y horno) con el mejor sabor. Tradición centroamericana en Denver, Colorado.",
      "title.press": "Prensa y Reconocimientos | Tienda Salvadoreña Denver",
      "desc.press": "Cobertura de medios sobre Tienda Salvadoreña, la primera tienda salvadoreña de Denver. Artículos de Diario El Salvador y Denverite.",
      "title.contact": "Contacto y Ubicación en E Colfax | Tienda Salvadoreña Denver",
      "desc.contact": "Visítanos en 5128 E Colfax Ave, Denver, CO 80220. Horario, teléfono (303) 394-4185, mapa y estacionamiento. Tienda salvadoreña en Denver.",
      
      // Navigation
      "nav.home": "Inicio",
      "nav.items": "Artículos",
      "nav.history": "Historia",
      "nav.pollo": "Pollo Campero",
      "nav.press": "Prensa",
      "nav.contact": "Contacto",
      
      // Footer
      "footer.hours_label": "Horario:",
      "footer.hours": "Domingo 10 AM–6 PM · Lunes–Sábado 10 AM–7 PM",
      "footer.contactline": "Contacto: 5128 E Colfax Ave, Denver, CO 80220 | Teléfono: (303) 394-4185 | Correo: info@tiendasalvadorenadenver.com",
      "footer.copy": "© 2025 Tienda Salvadoreña. Todos los derechos reservados. – Este sitio web fue creado en cumplimiento parcial de los requisitos del curso CIS 3030.",

      // ========================================
      // HOME PAGE (index.html) - SPANISH
      // ========================================
      "hero.title": "Tienda Salvadoreña",
      "hero.lead": "Productos auténticos salvadoreños y centroamericanos en Denver – tradición, sabor y comunidad.",
      "hero.note": "La tienda salvadoreña más antigua de Colorado (30+ años)",
      "hero.explore": "Explorar productos",
      "hero.press": "Prensa",
      "hero.imgAltNavidad": "Jorge y Delia rezando en el pesebre navideño con un cartel de Feliz Navidad",
      
      "mission.title": "La tienda salvadoreña más antigua de Colorado",
      "mission.lead": "Tienda Salvadoreña es un negocio familiar arraigado en la comunidad. Durante más de 30 años hemos servido a la comunidad hispana de Denver con productos, comida y cultura auténticos, manteniendo vivas nuestras tradiciones.",
      
      "categories.title": "Explora Nuestros Productos",
      "categories.viewall": "Ver todos los artículos",
      
      // Category Cards
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
      
      // Press Section
      "press.title": "Reconocimiento Comunitario",
      "press.quote": "\"Un pilar de la comunidad hispana de Denver.\"",
      "press.readmore": "Leer más en Prensa",

      // ========================================
      // ITEMS PAGE (items.html) - SPANISH
      // ========================================
      "items.hero.title": "Descubre nuestros productos",
      "items.hero.lead": "Productos centroamericanos auténticos en Colorado.",
      "items.hero.button": "Explora nuestros productos",
      
      "items.intro.title": "Productos Auténticos",
      "items.intro.note": "Más de 30 años importando los mejores productos de El Salvador y Centroamérica. Desde alimentos tradicionales hasta ropa y artículos nostálgicos.",
      
      // Filter Buttons
      "items.category.all": "Mostrar todo",
      "items.category.food": "Alimentos y bocadillos",
      "items.category.drinks": "Bebidas",
      "items.category.clothing": "Ropa y calzado",
      "items.category.wellness": "Bienestar y De Venta Libre",
      "items.category.nostalgia": "Nostalgia y hogar",
      
      // Product Cards - Wellness
      "items.medicine-cabinet": "Botiquín",
      "items.medicine-cabinet.desc": "Medicinas de venta libre importadas para su salud.",
      "items.vitamins": "Vitaminas",
      "items.vitamins.desc": "Vitaminas esenciales y suplementos orales.",
      "items.natural-soaps": "Jabones y hierbas naturales",
      "items.natural-soaps.desc": "Productos de higiene natural y remedios herbales.",
      "items.supplements": "Suplementos",
      "items.supplements.desc": "Nopalina, linaza y otros complementos alimenticios.",
      "items.personal-care": "Cuidado personal",
      "items.personal-care.desc": "Jabones importados, aceites y artículos de higiene.",
      
      // Product Cards - Food
      "items.pantry-staples": "Básicos de despensa",
      "items.pantry-staples.desc": "Frijoles, salsas y condimentos auténticos.",
      "items.dairy-essentials": "Lácteos esenciales",
      "items.dairy-essentials.desc": "Crema Salvadoreña fresca y quesos.",
      "items.queso-duro": "Queso Duro Viejo",
      "items.queso-duro.desc": "Famoso queso duro de El Salvador.",
      "items.spices-herbs": "Especias y hierbas",
      "items.spices-herbs.desc": "Hierbas secas, bolsas de té y especias para cocinar.",
      "items.pan-dulce": "Pan Dulce",
      "items.pan-dulce.desc": "Pan dulce fresco, quesadillas y galletas.",
      "items.traditional-candy": "Dulces tradicionales",
      "items.traditional-candy.desc": "Golosinas típicas de la tierra.",
      "items.chips-snacks": "Chips y bocadillos",
      "items.chips-snacks.desc": "Chips de plátano, bocadillos y snacks salados.",
      "items.frozen-nances": "Nances congelados",
      "items.frozen-nances.desc": "Nanches amarillos ácidos, conservados congelados.",
      "items.tamales-elote": "Tamales de elote",
      "items.tamales-elote.desc": "Tamales de maíz dulce, listos para calentar.",
      "items.charrales": "Charrales fritos",
      "items.charrales.desc": "Charrales crujientes con chile y limón.",
      
      // Product Cards - Drinks
      "items.kolashampan": "Kolashampan",
      "items.kolashampan.desc": "La famosa gaseosa naranja de El Salvador.",
      "items.glass-sodas": "Gaseosas en botella de vidrio",
      "items.glass-sodas.desc": "Mirinda, Coca-Cola y Tropical Banana.",
      "items.natural-juices": "Jugos naturales",
      "items.natural-juices.desc": "Tamarindo, Maracuyá, Coco y Horchata.",
      "items.coconut-juice": "Jugo de coco",
      "items.coconut-juice.desc": "Refrescante jugo FOCO con trozos de coco.",
      
      // Product Cards - Clothing
      "items.guayaberas": "Guayaberas",
      "items.guayaberas.desc": "Camisas tradicionales para niños y hombres.",
      "items.dresses-bags": "Vestidos y bolsos",
      "items.dresses-bags.desc": "Vestidos tradicionales, bolsos y mantas.",
      "items.jerseys": "Jerseys especiales",
      "items.jerseys.desc": "Camisetas de fútbol y conmemorativas.",
      "items.handbags": "Carteras",
      "items.handbags.desc": "Mezcla de bolsos tradicionales y modernos.",
      "items.chanclas": "Chanclas",
      "items.chanclas.desc": "Calzado cómodo para la casa o la piscina.",
      "items.country-hats": "Gorras de país",
      "items.country-hats.desc": "Gorras representando países de Centroamérica.",
      "items.beanies": "Gorros de invierno",
      "items.beanies.desc": "Gorros cálidos para el invierno de Colorado.",
      
      // Product Cards - Nostalgia
      "items.silabario": "Silabario Hispanoamericano",
      "items.silabario.desc": "El clásico libro de fonética que enseñó a leer a generaciones.",
      "items.trinkets": "Chucherías y regalos",
      "items.trinkets.desc": "Llaveros, pulseras y accesorios para el cabello.",
      "items.souvenirs": "Souvenirs",
      "items.souvenirs.desc": "Billeteras y regalos con hermosos patrones.",

      // ========================================
      // HISTORY PAGE (history.html) - SPANISH
      // ========================================
      "history.hero.title": "Historia Familiar",
      "history.hero.lead": "De un aula en El Salvador a una tiendita en Denver: así construyeron Jorge y Delia un hogar para la cultura, la comida y la comunidad.",
      
      "history.mission.title": "Nuestra Misión",
      "history.mission.text": "Nuestra misión es mantener vivas las tradiciones salvadoreñas ofreciendo productos auténticos que nutren tanto el cuerpo como el espíritu. Inspirados por la dedicación de Jorge y Delia, servimos a la comunidad de Colorado con calidez, integridad y un compromiso con el orgullo cultural.",
      
      "history.story.title": "La historia de los abuelos",
      "history.story.p1": "Tienda Salvadoreña nació de la historia de amor entre Delia, una dedicada maestra de El Salvador, y Jorge, un trabajador incansable de la industria aérea en Ecuador. Al llegar a Denver, Delia soñaba con crear un lugar donde los centroamericanos pudieran sentirse en casa, y Jorge estuvo siempre a su lado para hacerlo realidad. Su primera tienda en Colorado Boulevard era tan pequeña como un clóset, pero ofrecía los sabores y tradiciones que recordaban a la gente su tierra natal. Con esfuerzo y corazón, crecieron hasta abrir la tienda más grande en East Colfax, donde hoy ofrecen una amplia variedad de productos que celebran la cultura centroamericana. Para Delia y Jorge, la tienda es mucho más que un negocio: es un pilar de la comunidad, una manera de mantener vivas las tradiciones en las familias de Denver, y un legado de amor, resiliencia y orgullo que sigue inspirando a sus hijos, nietos y vecinos.",
      
      "history.highlights.title": "Puntos clave",
      "history.highlights.meeting": "<strong>El encuentro:</strong> Una maestra respetada en El Salvador conoce a Jorge, un hombre emprendedor y amable.",
      "history.highlights.partnership": "<strong>La sociedad:</strong> Valores compartidos de educación, fe y servicio guían su camino.",
      "history.highlights.beginnings": "<strong>Los comienzos:</strong> Una tiendita en Colorado Boulevard crece con dedicación.",
      "history.highlights.legacy": "<strong>El legado:</strong> Un pilar comunitario que sirve a Denver por más de tres décadas.",
      
      "history.heritage.title": "Herencia y nostalgia",
      "history.heritage.caption1": "Nuestro letrero – un punto de referencia y una bienvenida.",
      "history.heritage.caption2": "Un pilar del aula – alfabetización, dignidad y raíces compartidas.",
      "history.heritage.caption3": "Azul y blanco – el origen que llevamos a nuestro trabajo diario.",
      
      "history.purpose.title": "Propósito de esta página",
      "history.purpose.text": "Compartir el legado personal de Jorge y Delia y establecer las raíces auténticas y nostálgicas del negocio. Esta página cumple el requisito visual principal con la escena de pupusas en caricatura y apoya la historia real mediante imágenes de herencia y contexto comunitario.",
      
      "history.values.title": "Nuestros Valores",
      "history.values.authenticity": "✓ Autenticidad – productos genuinos que representan nuestra cultura.",
      "history.values.family": "✓ Familia – un negocio fundado en amor y legado.",
      "history.values.community": "✓ Comunidad – servir con calidez y respeto.",
      "history.values.pride": "✓ Orgullo cultural – compartir nuestras raíces con Colorado.",
      
      "history.cta.title": "Visítanos",
      "history.cta.text": "Te invitamos a visitar Tienda Salvadoreña en Denver y ser parte de nuestra historia. Cada compra apoya un legado familiar y mantiene vivas las tradiciones de El Salvador.",
      "history.cta.button": "Ir a Contacto",

      // ========================================
      // POLLO CAMPERO PAGE (pollo.html) - SPANISH
      // ========================================
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
      "pollo.notes.text": "Esta página está dedicada a compartir la tradición cultural de Pollo Campero y sus mejores métodos de recalentamiento.",
      
      "pollo.why.title": "¿Por qué Pollo Campero?",
      "pollo.why.authentic": "<strong>Auténtico:</strong> Receta original guatemalteca desde 1971",
      "pollo.why.nostalgic": "<strong>Nostálgico:</strong> Sabor que conecta con el hogar y la infancia",
      "pollo.why.family": "<strong>Familiar:</strong> Perfecto para reuniones y celebraciones",
      "pollo.why.exclusive": "<strong>Exclusivo:</strong> Difícil de encontrar fuera de Centroamérica",

      // ========================================
      // PRESS PAGE (press.html) - SPANISH
      // ========================================
      "press.hero.title": "Prensa y Reconocimientos",
      "press.hero.lead": "Documentamos el impacto de Tienda Salvadoreña en la comunidad: artículos, menciones y reconocimientos que cuentan nuestra historia.",
      "press.lead": "Más de 30 años de servicio comunitario documentado por medios locales e internacionales.",
      
      "press.coverage.title": "Cobertura destacada",
      "press.quote1.text": "\"Tienda Salvadoreña es un negocio situado en Denver, Colorado, y fue el primer comercio con productos de El Salvador fundado en esa ciudad.\"",
      "press.quote2.text": "\"La mayoría de las personas que visitan el negocio se llenan de nostalgia al ver las comidas tradicionales que encuentran.\"",
      "press.quote3.text": "\"People come here from all over Colorado, Wyoming and Nebraska to buy cheeses and souvenirs that he imports from home.\"",
      "press.quote4.text": "\"On East Colfax, next to the trendy Bellwether coffeeshop, Jorge Romero and his wife, Delia, have run a Salvadoran grocery for more than 25 years.\"",
      "press.quote.readarticle": "Leer artículo",
      
      "press.images.title": "Imágenes y créditos",
      "press.images.caption1": "Delia Romero sosteniendo la bandera dentro de Tienda Salvadoreña. Foto © Kevin Beaty / Denverite, 2018",
      "press.images.credits1": "Foto © Kevin Beaty / Denverite",
      "press.images.caption2": "Jorge Romero detrás del mostrador.",
      "press.images.credits2": "Foto © Kevin Beaty / Denverite, 2018",
      "press.images.caption3": "Jorge y Delia con la bandera de El Salvador.",
      "press.images.credits3": "Foto: Nicolle Menéndez / Diario El Salvador",
      
      "press.featured.title": "Artículos destacados",
      "press.featured.article1": "Una tienda en Denver cumple 32 años de compartir la cultura salvadoreña – Diario El Salvador",
      "press.featured.article2": "DACA fight overshadows status battle for Denver's Salvadorans – Denverite",
      
      "press.impact.title": "Impacto comunitario",
      "press.impact.text": "Delia y Jorge han sido reconocidos por su servicio a la comunidad, especialmente durante emergencias como los terremotos en El Salvador. La tienda ha servido como punto de encuentro cultural y apoyo para generaciones de familias.",
      
      "press.recognition.title": "Reconocimientos",
      "press.recog.item1": "🏆 Primer negocio salvadoreño en Denver (1991)",
      "press.recog.item2": "📰 Destacado en medios locales e internacionales",
      "press.recog.item3": "🤝 Apoyo comunitario durante crisis humanitarias",
      "press.recog.item4": "❤️ Más de 30 años sirviendo a la comunidad hispana",

      // ========================================
      // CONTACT PAGE (contact.html) - SPANISH
      // ========================================
      "contact.hero.title": "Contacto y Ubicación",
      "contact.hero.lead": "Estamos aquí para ayudar. Llámanos, escríbenos o visítanos en la dirección indicada. Responderemos lo antes posible.",
      
      "contact.info.title": "Información de contacto",
      "contact.label.address": "Dirección:",
      "contact.directions": "Ver en Google Maps →",
      "contact.label.phone": "Teléfono:",
      "contact.label.email": "Correo electrónico:",
      "contact.facebook.link": "Visitar nuestra página de Facebook →",
      
      "contact.label.hours": "Horario de atención:",
      "contact.hours.sunday": "Domingo",
      "contact.hours.monday": "Lunes",
      "contact.hours.tuesday": "Martes",
      "contact.hours.wednesday": "Miércoles",
      "contact.hours.thursday": "Jueves",
      "contact.hours.friday": "Viernes",
      "contact.hours.saturday": "Sábado",
      
      "contact.label.parking": "Estacionamiento:",
      "contact.parking.details": "Estacionamiento en la calle y detrás de la tienda (compartimos un lote con otros comercios; aproximadamente 4 espacios). También puede estacionar en Forrest Street y caminar hasta la tienda.",
      
      "contact.map.title": "Cómo llegar",
      "contact.map.note": "Recomendamos llamar antes de venir para confirmar disponibilidad de productos especiales.",
      
      "contact.notes.title": "Información adicional",
      "contact.notes.text": "Para pedidos grandes o consultas de prensa, utilice el teléfono o el correo electrónico indicados arriba.",
      
      // Quintana Notary Partnership
      "quintana.title.compact": "Notaría y Traducciones Aquí",
      "quintana.notary.title.compact": "📝 Servicios Notariales",
      "quintana.notary.desc.compact": "$10/firma en esta ubicación (regular $15) • Sin cargo de viaje",
      "quintana.translation.title.compact": "🌐 Traducciones Certificadas",
      "quintana.translation.desc.compact": "Inglés ↔ Español • Aceptadas por USCIS/DMV • $5 OFF con recibo de la tienda",
      "quintana.translation.link": "Más Información →",
      "quintana.website": "Visitar Sitio Web"
    }
  };

  // ========================================
  // LANGUAGE APPLICATION LOGIC
  // ========================================
  
  // Get current language from localStorage or default to Spanish
  let currentLang = localStorage.getItem('language') || 'es';

  /**
   * Apply translations to all elements with data-i18n attribute
   * @param {string} lang - Language code ('en' or 'es')
   */
  function applyTranslations(lang) {
    console.log('Applying translations for:', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[lang][key];
      
      if (translation) {
        // Handle Meta tags (e.g., description in <head>)
        if (el.tagName === 'META' && el.hasAttribute('content')) {
          el.setAttribute('content', translation);
        }
        // Handle Images (Alt Text)
        else if (el.tagName === 'IMG') {
          el.alt = translation;
        }
        // Handle Inputs (Placeholders)
        else if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && el.hasAttribute('placeholder')) {
          el.placeholder = translation;
        }
        // Handle Standard Text Content (innerHTML) and check for data-i18n-html
        else {
          if (el.hasAttribute('data-i18n-html') && el.getAttribute('data-i18n-html') === 'true') {
            el.innerHTML = translation;
          } else {
            el.textContent = translation;
          }
        }
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${lang}`);
      }
    });
    
    // Update page title if exists
    const titleKey = document.querySelector('title[data-i18n]')?.getAttribute('data-i18n');
    if (titleKey && translations[lang][titleKey]) {
      document.title = translations[lang][titleKey];
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    
    // Save preference
    localStorage.setItem('language', lang);
    currentLang = lang;
    
    // Update button states
    updateButtonStates(lang);
  }

  /**
   * Update button active states
   * @param {string} lang - Language code ('en' or 'es')
   */
  function updateButtonStates(lang) {
    const btnSpanish = document.getElementById('btnSpanish');
    const btnEnglish = document.getElementById('btnEnglish');
    
    if (btnSpanish && btnEnglish) {
      if (lang === 'es') {
        btnSpanish.classList.add('active');
        btnSpanish.setAttribute('aria-pressed', 'true');
        btnEnglish.classList.remove('active');
        btnEnglish.setAttribute('aria-pressed', 'false');
      } else {
        btnEnglish.classList.add('active');
        btnEnglish.setAttribute('aria-pressed', 'true');
        btnSpanish.classList.remove('active');
        btnSpanish.setAttribute('aria-pressed', 'false');
      }
    }
  }

  // ========================================
  // INITIALIZATION
  // ========================================
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing language:', currentLang);
    
    // Apply initial translations
    applyTranslations(currentLang);
    
    const btnSpanish = document.getElementById('btnSpanish');
    const btnEnglish = document.getElementById('btnEnglish');
    
    if (btnSpanish) btnSpanish.addEventListener('click', () => applyTranslations('es'));
    if (btnEnglish) btnEnglish.addEventListener('click', () => applyTranslations('en'));
  });
  
  console.log('lang-toggle.js loaded successfully');
})();
