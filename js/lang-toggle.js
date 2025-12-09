/*
Author: David Quintana
MSU Denver login name: dquint32@msudenver.edu
Date Created: 11/02/2025
Date Due: 12/01/2024
Modified: 11/30/2025
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
      
      // Contact page
      "contact.hero.title": "Contact and Location",
      "contact.hero.lead": "We're here to help. Call us, write to us, or visit us at the address shown. We'll respond as soon as possible.",
      "contact.info.title": "Contact Information",
      "contact.label.address": "Address",
      "contact.label.phone": "Phone",
      "contact.label.email": "Email",
      "contact.facebook.link": "Visit our Facebook page",
      "contact.label.hours": "Hours",
      "contact.hours.sunday": "Sunday",
      "contact.hours.monday": "Monday",
      "contact.hours.tuesday": "Tuesday",
      "contact.hours.wednesday": "Wednesday",
      "contact.hours.thursday": "Thursday",
      "contact.hours.friday": "Friday",
      "contact.hours.saturday": "Saturday",
      "contact.label.parking": "Parking",
      "contact.parking.details": "Street parking and behind the store (we share a lot with other businesses; approximately 4 spaces). You can also park on Forrest Street and walk to the store.",
      "contact.map.title": "How to Get Here",
      "contact.map.note": "We recommend calling ahead to confirm availability of special products (for example Pollo Campero).",
      "contact.notes.title": "Additional Information",
      "contact.notes.text": "For large orders or press inquiries, use the phone or email listed above.",
      
      // Press page
      "press.hero.title": "Press and Recognition",
      "press.hero.lead": "We document Tienda Salvadoreña's impact on the community: articles, mentions and recognitions that tell our story.",
      "press.coverage.title": "Featured Coverage",
      "press.quote.readarticle": "Read article",
      "press.images.title": "Images and Credits",
      "press.images.caption1": "Delia Romero holding the flag inside Tienda Salvadoreña. Photo © Kevin Beaty / Denverite, 2018",
      "press.images.caption2": "Jorge Romero behind the counter. Photo © Kevin Beaty / Denverite, 2018",
      "press.images.caption3": "Jorge and Delia with the El Salvador flag. Photo: Nicolle Menéndez / Diario El Salvador",
      "press.featured.title": "Featured Articles",
      "press.featured.article1": "A store in Denver celebrates 32 years of sharing Salvadoran culture – Diario El Salvador",
      "press.featured.article2": "DACA fight overshadows status battle for Denver's Salvadorans – Denverite",
      "press.impact.title": "Community Impact",
      "press.impact.text": "Delia and Jorge have been recognized for their service to the community, especially during emergencies such as earthquakes in El Salvador. The store has served as a cultural meeting point and support for generations of families.",
      
      // History page
      "history.hero.title": "Family History",
      "history.hero.lead": "From a classroom in El Salvador to a little store in Denver: this is how Jorge and Delia built a home for culture, food and community.",
      "history.story.title": "The Grandparents' Story",
      "history.story.p1": "Tienda Salvadoreña was born from the love story of Delia, a devoted schoolteacher from El Salvador, and Jorge, a hardworking airline professional from Ecuador. When they came to Denver, Delia dreamed of creating a place where Central Americans could feel at home, and Jorge stood by her side to make it possible. Their first shop on Colorado Boulevard was no bigger than a closet, yet it carried the flavors and traditions that reminded people of home. With dedication and heart, they grew into the larger store on East Colfax, where today they proudly offer a wide variety of products that celebrate Central American culture. For Delia and Jorge, the store is more than a business—it is a pillar of community, a way to keep traditions alive for families in Denver, and a legacy of love, resilience, and pride that continues to inspire their children, grandchildren, and neighbors alike.",
      "history.story.p2": "",
      "history.story.p3": "",
      "history.story.p4": "",
      "history.story.p5": "",
      "history.highlights.title": "Key Points",
      "history.highlights.meeting": "<strong>The Meeting:</strong> A respected teacher in El Salvador meets Jorge, an entrepreneurial and kind man.",
      "history.highlights.partnership": "<strong>The Partnership:</strong> Shared values of education, faith and service guide their path.",
      "history.highlights.beginnings": "<strong>The Beginnings:</strong> A little store on Colorado Boulevard grows with dedication.",
      "history.highlights.legacy": "<strong>The Legacy:</strong> A community pillar serving Denver for more than three decades.",
      "history.heritage.title": "Heritage and Nostalgia",
      "history.heritage.caption1": "Our sign – a landmark and a welcome.",
      "history.heritage.caption2": "A classroom pillar – literacy, dignity and shared roots.",
      "history.heritage.caption3": "Blue and white – the origin we carry into our daily work.",
      "history.purpose.title": "Purpose of this Page",
      "history.purpose.text": "To share Jorge and Delia's personal legacy and establish the authentic and nostalgic roots of the business. This page fulfills the main visual requirement with the pupusa cartoon scene and supports the real story through heritage images and community context.",
      "history.mission.title": "Our Mission",
      "history.mission.text": "Our mission is to keep Salvadoran traditions alive by offering authentic products that nourish both body and spirit. Inspired by Jorge and Delia’s dedication, we serve Colorado’s community with warmth, integrity, and a commitment to cultural pride.",
      "history.values.title": "Our Values",
      "history.values.authenticity": "Authenticity — genuine products that represent our culture.",
      "history.values.family": "Family — a business founded on love and legacy.",
      "history.values.community": "Community — serving with warmth and respect.",
      "history.values.pride": "Cultural Pride — sharing our roots with Colorado.",
      "history.cta.title": "Visit Us",
      "history.cta.text": "We invite you to visit Tienda Salvadoreña in Denver and be part of our story. Every purchase supports a family legacy and keeps the traditions of El Salvador alive.",
      "history.cta.button": "Go to Contact",
      
      // Pollo page
      "pollo.meta.description": "Pollo Campero – call to confirm availability and find reheating recommendations.",
      "pollo.hero.title": "Pollo Campero",
      "pollo.hero.lead": "Call to confirm if we have Pollo Campero; availability varies and often sells out quickly.",
      "pollo.hero.note": "Note: chicken is delivered cold in a box; see reheating instructions below.",
      "pollo.story.title": "Cultural History of the Food",
      "pollo.story.p1": "Pollo Campero originated in Guatemala and became a staple in El Salvador since 1972. It's deeply tied to family traditions, celebrations and childhood memories. Many travelers carry boxes of Pollo Campero from the airport to share with loved ones – because it tastes like home.",
      "pollo.story.p2": "Offering Pollo Campero means delivering heritage, cherished memories and the authentic <em>Sabor Campero</em>.",
      "pollo.story.availability": "To confirm availability:",
      "pollo.image.caption": "Pollo Campero – a family tradition celebrated for generations.",
      "pollo.reheat.title": "Reheating Recommendations",
      "pollo.reheat.intro": "The chicken is delivered cold in a box. To restore crispy texture and flavor, use one of these methods:",
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
      "pollo.notes.title": "Notes",
      "pollo.notes.text": "Pollo Campero is very popular and availability varies. We recommend calling ahead to confirm availability or reserve. For large orders, please inquire in advance."
    },
    es: {
      "site.title": "Tienda Salvadoreña – Inicio",
      "meta.description": "Auténticos productos salvadoreños y centroamericanos en Denver – tradición, sabor y comunidad.",
      "nav.home": "Inicio",
      "nav.items": "Artículos",
      "nav.history": "Historia",
      "nav.pollo": "Pollo Campero",
      "nav.press": "Prensa",
      "nav.contact": "Contacto",
      "hero.title": "Tienda Salvadoreña",
      "hero.lead": "Auténticos productos salvadoreños y centroamericanos en Denver – tradición, sabor y comunidad.",
      "hero.explore": "Explora nuestros productos",
      "hero.press": "Prensa",
      "hero.imgAlt": "Jorge y Delia comprando",
      "mission.title": "La tienda salvadoreña más antigua de Colorado",
      "mission.lead": "Tienda Salvadoreña es un negocio familiar arraigado en la comunidad. Durante más de 30 años hemos servido a la comunidad hispana de Denver con productos auténticos, comida y cultura, manteniendo vivas nuestras tradiciones.",
      "categories.title": "Explora Nuestros Productos",
      "cat.food.title": "Comida y Bebidas",
      "cat.food.lead": "Gaseosas, jugos, chocolate y frutas congeladas.",
      "cat.food.imgAlt": "Comida y Bebidas",
      "cat.clothing.title": "Ropa y Accesorios",
      "cat.clothing.lead": "Guayaberas, gorros y calzado tradicional.",
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
      "footer.contactline": "Contacto: 5128 E Colfax Ave, Denver, CO 80220 | Teléfono: (303) 394-4185 | Correo: info@tiendasalvadorena.com",
      "footer.copy": "© 2025 Tienda Salvadoreña. Todos los derechos reservados. – Este sitio web fue creado en cumplimiento parcial de los requisitos del curso CIS 3030.",
      
      // Items page
      "items.hero.title": "Descubre nuestros productos",
      "items.hero.lead": "Productos auténticos de Centroamérica en Colorado.",
      "items.hero.explore": "Explora nuestros productos",
      "items.filter.all": "Mostrar todo",
      "items.filter.food": "Alimentos y bocadillos",
      "items.filter.drinks": "Bebidas",
      "items.filter.clothing": "Ropa y calzado",
      "items.filter.wellness": "Bienestar y OTC",
      "items.filter.nostalgia": "Nostalgia y hogar",
      
      // Product cards
      "items.medicine-cabinet": "Botiquín",
      "items.medicine-cabinet.desc": "Medicinas de venta libre importadas para su salud.",
      "items.vitamins": "Vitaminas",
      "items.vitamins.desc": "Vitaminas esenciales y suplementos orales.",
      "items.natural-soaps": "Jabones y hierbas naturales",
      "items.natural-soaps.desc": "Productos de higiene natural y remedios herbales.",
      "items.supplements": "Suplementos",
      "items.supplements.desc": "Nopalina, linaza y otros complementos alimenticios.",
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
      "items.kolashampan": "Kolashampan",
      "items.kolashampan.desc": "La famosa gaseosa naranja de El Salvador.",
      "items.glass-sodas": "Gaseosas en botella de vidrio",
      "items.glass-sodas.desc": "Mirinda, Coca-Cola y Tropical Banana.",
      "items.natural-juices": "Jugos naturales",
      "items.natural-juices.desc": "Tamarindo, Maracuyá, Coco y Horchata.",
      "items.coconut-juice": "Jugo de coco",
      "items.coconut-juice.desc": "Refrescante jugo FOCO con trozos de coco.",
      "items.frozen-nances": "Nances congelados",
      "items.frozen-nances.desc": "Nanches amarillos ácidos, conservados congelados.",
      "items.tamales-elote": "Tamales de elote",
      "items.tamales-elote.desc": "Tamales de maíz dulce, listos para calentar.",
      "items.charrales": "Charrales fritos",
      "items.charrales.desc": "Charrales crujientes con chile y limón.",
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
      "items.silabario": "Silabario Hispanoamericano",
      "items.silabario.desc": "El clásico libro de fonética que enseñó a leer a generaciones.",
      "items.trinkets": "Chucherías y regalos",
      "items.trinkets.desc": "Llaveros, pulseras y accesorios para el cabello.",
      "items.souvenirs": "Souvenirs",
      "items.souvenirs.desc": "Billeteras y regalos con hermosos patrones.",
      "items.personal-care": "Cuidado personal",
      "items.personal-care.desc": "Jabones importados, aceites y artículos de higiene.",
      
      // Contact page
      "contact.hero.title": "Contacto y Ubicación",
      "contact.hero.lead": "Estamos aquí para ayudar. Llámanos, escríbenos o visítanos en la dirección indicada. Responderemos lo antes posible.",
      "contact.info.title": "Información de contacto",
      "contact.label.address": "Dirección",
      "contact.label.phone": "Teléfono",
      "contact.label.email": "Correo",
      "contact.facebook.link": "Visitar nuestra página de Facebook",
      "contact.label.hours": "Horario",
      "contact.hours.sunday": "Domingo",
      "contact.hours.monday": "Lunes",
      "contact.hours.tuesday": "Martes",
      "contact.hours.wednesday": "Miércoles",
      "contact.hours.thursday": "Jueves",
      "contact.hours.friday": "Viernes",
      "contact.hours.saturday": "Sábado",
      "contact.label.parking": "Estacionamiento",
      "contact.parking.details": "Estacionamiento en la calle y detrás de la tienda (compartimos un lote con otros comercios; aproximadamente 4 espacios). También puede estacionar en Forrest Street y caminar hasta la tienda.",
      "contact.map.title": "Cómo llegar",
      "contact.map.note": "Recomendamos llamar antes de venir para confirmar disponibilidad de productos especiales (por ejemplo Pollo Campero).",
      "contact.notes.title": "Información adicional",
      "contact.notes.text": "Para pedidos grandes o consultas de prensa, utilice el teléfono o el correo electrónico indicados arriba.",
      
      // Press page
      "press.hero.title": "Prensa y Reconocimientos",
      "press.hero.lead": "Documentamos el impacto de Tienda Salvadoreña en la comunidad: artículos, menciones y reconocimientos que cuentan nuestra historia.",
      "press.coverage.title": "Cobertura destacada",
      "press.quote.readarticle": "Leer artículo",
      "press.images.title": "Imágenes y créditos",
      "press.images.caption1": "Delia Romero sosteniendo la bandera dentro de Tienda Salvadoreña. Foto © Kevin Beaty / Denverite, 2018",
      "press.images.caption2": "Jorge Romero detrás del mostrador. Foto © Kevin Beaty / Denverite, 2018",
      "press.images.caption3": "Jorge y Delia con la bandera de El Salvador. Foto: Nicolle Menéndez / Diario El Salvador",
      "press.featured.title": "Artículos destacados",
      "press.featured.article1": "Una tienda en Denver cumple 32 años de compartir la cultura salvadoreña – Diario El Salvador",
      "press.featured.article2": "DACA fight overshadows status battle for Denver's Salvadorans – Denverite",
      "press.impact.title": "Impacto comunitario",
      "press.impact.text": "Delia y Jorge han sido reconocidos por su servicio a la comunidad, especialmente durante emergencias como los terremotos en El Salvador. La tienda ha servido como punto de encuentro cultural y apoyo para generaciones de familias.",
      
      // History page
      "history.hero.title": "Historia Familiar",
      "history.hero.lead": "De un aula en El Salvador a una tiendita en Denver: así construyeron Jorge y Delia un hogar para la cultura, la comida y la comunidad.",
      "history.story.title": "La historia de los abuelos",
      "history.story.p1": "Tienda Salvadoreña nació de la historia de amor entre Delia, una dedicada maestra de El Salvador, y Jorge, un trabajador incansable de la industria aérea en Ecuador. Al llegar a Denver, Delia soñaba con crear un lugar donde los centroamericanos pudieran sentirse en casa, y Jorge estuvo siempre a su lado para hacerlo realidad. Su primera tienda en Colorado Boulevard era tan pequeña como un clóset, pero ofrecía los sabores y tradiciones que recordaban a la gente su tierra natal. Con esfuerzo y corazón, crecieron hasta abrir la tienda más grande en East Colfax, donde hoy ofrecen una amplia variedad de productos que celebran la cultura centroamericana. Para Delia y Jorge, la tienda es mucho más que un negocio: es un pilar de la comunidad, una manera de mantener vivas las tradiciones en las familias de Denver, y un legado de amor, resiliencia y orgullo que sigue inspirando a sus hijos, nietos y vecinos.",
      "history.story.p2": "",
      "history.story.p3": "",
      "history.story.p4": "",
      "history.story.p5": "",
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
      "history.mission.title": "Nuestra Misión",
      "history.mission.text": "Nuestra misión es mantener vivas las tradiciones salvadoreñas ofreciendo productos auténticos que nutren tanto el cuerpo como el espíritu. Inspirados por la dedicación de Jorge y Delia, servimos a la comunidad de Colorado con calidez, integridad y un compromiso con el orgullo cultural.",
      "history.values.title": "Nuestros Valores",
      "history.values.authenticity": "Autenticidad — productos genuinos que representan nuestra cultura.",
      "history.values.family": "Familia — un negocio fundado en amor y legado.",
      "history.values.community": "Comunidad — servir con calidez y respeto.",
      "history.values.pride": "Orgullo cultural — compartir nuestras raíces con Colorado.",
      "history.cta.title": "Visítanos",
      "history.cta.text": "Te invitamos a visitar Tienda Salvadoreña en Denver y ser parte de nuestra historia. Cada compra apoya un legado familiar y mantiene vivas las tradiciones de El Salvador.",
      "history.cta.button": "Ir a Contacto",
      
      // Pollo page
      "pollo.meta.description": "Pollo Campero – llama para confirmar disponibilidad y encuentra recomendaciones para recalentar.",
      "pollo.hero.title": "Pollo Campero",
      "pollo.hero.lead": "Llame para confirmar si tenemos Pollo Campero; la disponibilidad es variable y a menudo se agota rápido.",
      "pollo.hero.note": "Nota: el pollo se entrega frío en caja; consulte las instrucciones de recalentado más abajo.",
      "pollo.story.title": "Historia cultural del alimento",
      "pollo.story.p1": "Pollo Campero se originó en Guatemala y se convirtió en un pilar en El Salvador desde 1972. Está profundamente ligado a tradiciones familiares, celebraciones y recuerdos de la infancia. Muchos viajeros llevan cajas de Pollo Campero desde el aeropuerto para compartir con sus seres queridos – porque sabe a casa.",
      "pollo.story.p2": "Ofrecer Pollo Campero significa entregar herencia, recuerdos preciados y el auténtico <em>Sabor Campero</em>.",
      "pollo.story.availability": "Para confirmar disponibilidad:",
      "pollo.image.caption": "Pollo Campero – tradición familiar celebrada por generaciones.",
      "pollo.reheat.title": "Recomendaciones para recalentar",
      "pollo.reheat.intro": "El pollo se entrega frío en caja. Para recuperar textura crujiente y sabor, use uno de estos métodos:",
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
      "pollo.notes.title": "Notas",
      "pollo.notes.text": "Pollo Campero es muy popular y la disponibilidad varía. Recomendamos llamar antes de venir para confirmar existencia o reservar. Para pedidos grandes, por favor consulte con antelación."
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
