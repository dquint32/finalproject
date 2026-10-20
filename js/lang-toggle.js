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

  const translations = {
    en: {
      // ========================================
      // GLOBAL SITE TRANSLATIONS
      // ========================================
      "site.title": "Tienda Salvadoreña – Home",
      "meta.description": "Authentic Salvadoran and Central American products in Denver – tradition, flavor and community.",

      // Per-page SEO titles & descriptions
      "title.home": "Tienda Salvadoreña Denver | #1 Salvadoran Store",
      "desc.home": "Denver's oldest Salvadoran store (30+ years). Authentic Salvadoran & Central American groceries, drinks, clothing, souvenirs and more on E Colfax Ave.",
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
      "footer.hours": "Sunday 10 AM–6 PM · Monday–Saturday 10 AM–7 PM",
      "footer.contactline": "Contact: 5128 E Colfax Ave, Denver, CO 80220 | Phone: (303) 394-4185 | Email: info@tiendasalvadorenadenver.com",
      "footer.copy": "© 2026 Tienda Salvadoreña. All rights reserved.",

      // Full bilingual coverage: alt text, ARIA labels, press and contact strings
      "alt.medicinas-otc": "Shelves of imported over-the-counter medicines",
      "alt.vitaminas-y-suplementos": "Vitamins and supplements on a display rack",
      "alt.jabones-y-hierbas-naturales": "Natural soaps and herbal products on store shelves",
      "alt.suplementos-nopalina-y-linaza": "Nopalina, flaxseed and other dietary supplements on a shelf",
      "alt.articulos-de-cuidado-personal": "Personal care items, soaps and oils on a rack",
      "alt.frijoles-salsas-y-condimentos": "Beans, sauces and seasonings on store shelves",
      "alt.crema-y-quesos-centroamericanos": "Salvadoran cream and Central American cheeses in the cooler",
      "alt.queso-duro-viejo": "Package of aged queso duro viejo from El Salvador",
      "alt.hierbas-secas-y-especias": "Bags of dried herbs and spices hanging on a display",
      "alt.pan-dulce-y-quesadillas": "Packaged pan dulce, quesadillas and cookies",
      "alt.dulces-tradicionales": "Shelves of traditional Central American candy",
      "alt.chips-de-platano-y-bocadillos": "Racks of plantain chips and snacks",
      "alt.nances-congelados": "Bags of frozen yellow nances",
      "alt.tamales-de-elote": "Packages of Cuzcatlecos sweet corn tamales",
      "alt.charrales-fritos": "Bags of fried charrales with chile and lime",
      "alt.kolashampan": "Bottles of Kolashampan, the orange Salvadoran soda",
      "alt.gaseosas-en-botella-de-vidrio": "Glass-bottle sodas: Mirinda, Coca-Cola and Tropical",
      "alt.jugos-naturales": "Cans of tamarind, passion fruit, coconut and horchata drinks",
      "alt.jugo-de-coco-foco": "Cans of FOCO coconut juice",
      "alt.guayaberas-tradicionales": "Traditional guayabera shirts on a rack",
      "alt.vestidos-y-bolsos": "Traditional dresses, handbags and blankets on display",
      "alt.jerseys-especiales": "Commemorative El Salvador soccer jersey",
      "alt.carteras": "Traditional and modern handbags in a glass case",
      "alt.chanclas": "Sandals and house shoes on a shelf",
      "alt.gorras-de-pais": "Caps representing Central American countries",
      "alt.gorros-de-invierno": "Blue and white winter beanies for Guatemala and El Salvador",
      "alt.silabario-hispanoamericano": "Cover of the Silabario Hispanoamericano reading primer",
      "alt.chucherias-y-regalos": "Bracelets, keychains and hair accessories on display",
      "alt.souvenirs": "Woven wallets with colorful traditional patterns",
      "aria.filtros-de-categoria": "Category filters",
      "aria.galeria-de-productos": "Product gallery",
      "a11y.close": "Close",
      "items.filter.title": "Filter by category",
      "alt.letrero-de-la-tienda": "The Tienda Salvadoreña store sign with Central American flags",
      "alt.bandera-de-el-salvador": "Flag of El Salvador",
      "alt.jorge-y-delia-comiendo-pollo-campero-en-": "A family sharing Pollo Campero around the table",
      "alt.delia-romero-sosteniendo-la-bandera-de-e": "Delia Romero holding the flag of El Salvador",
      "alt.jorge-romero-detras-del-mostrador": "Jorge Romero behind the counter",
      "alt.jorge-y-delia-con-la-bandera-de-el-salva": "Jorge and Delia with the flag of El Salvador",
      "aria.imagenes-de-prensa": "Press images",
      "aria.articulos-destacados": "Featured articles",
      "press.credit1": "Photo © Kevin Beaty / Denverite",
      "press.credit2": "Photo © Kevin Beaty / Denverite, 2018",
      "press.credit3": "Photo: Nicolle Menéndez / Diario El Salvador",
      "press.recog1": "First Salvadoran business in Denver (1991)",
      "press.recog2": "Featured in local and international media",
      "press.recog3": "Community support during humanitarian crises",
      "press.recog4": "More than 30 years serving the Hispanic community",
      "aria.llamar-tienda-salvadorena": "Call Tienda Salvadoreña",
      "aria.visitar-facebook-de-tienda-salvadorena": "Visit Tienda Salvadoreña on Facebook",
      "contact.why.title": "Why visit us?",
      "contact.why.years": "30+ Years of History",
      "contact.why.years.text": "Colorado's oldest Salvadoran store",
      "contact.why.products": "Authentic Products",
      "contact.why.products.text": "Imported directly from El Salvador and Central America",
      "contact.why.family": "Family Business",
      "contact.why.family.text": "Founded and run by Jorge and Delia Romero",
      "map.frameTitle": "Google Map: Tienda Salvadoreña, 5128 E Colfax Ave, Denver",
      "a11y.language": "Language",

      // 2026 refresh: shared UI, home sections, map and service cards
      "a11y.skip": "Skip to content",
      "nav.menu": "Menu",
      "nav.label": "Main navigation",
      "footer.tagline": "Colorado's oldest Salvadoran store. Products from El Salvador and Central America for more than 30 years.",
      "footer.links": "Quick links",
      "footer.visit": "Visit us",
      "hero.badge": "30+ years on East Colfax",
      "hero.visit": "See Location & Hours",
      "hero.img.owners": "Jorge and Delia Romero, founders of Tienda Salvadoreña, standing in front of an El Salvador flag inside the store",
      "hero.img.owners.caption": "Jorge and Delia Romero, founders",
      "hero.img.owners.credit": "Photo: Nicolle Menéndez / Diario El Salvador",
      "hero.img.bread": "Caps in the colors and crests of El Salvador and other Central American countries in a display case",
      "hero.img.kola": "Bottles of Kolashampan, the orange Salvadoran soda, lined up on the shelf",
      "mission.eyebrow": "Our story",
      "mission.link": "Read our story",
      "fact.years.title": "30+ years",
      "fact.years.text": "Colorado's oldest Salvadoran store.",
      "fact.family.title": "Family owned",
      "fact.family.text": "Founded and run by Jorge and Delia Romero.",
      "fact.import.title": "Authentic products",
      "fact.import.text": "Imported from El Salvador and Central America.",
      "categories.eyebrow": "What you'll find",
      "categories.lead": "From pantry staples to clothing and keepsakes: everything you miss from home.",
      "cat.cta": "See products",
      "cat.food.badge": "Kolashampan · Queso duro",
      "cat.clothing.badge": "Guayaberas",
      "cat.nostalgia.badge": "Gifts",
      "cat.wellness.badge": "Natural remedies",
      "visit.eyebrow": "Visit us",
      "visit.title": "Location & hours",
      "visit.hours": "Hours",
      "visit.hours.sun": "Sunday 10 AM–6 PM",
      "visit.hours.week": "Monday–Saturday 10 AM–7 PM",
      "visit.location": "Location",
      "visit.phone": "Phone",
      "visit.call": "Call now",
      "visit.more": "Parking and more details",
      "notice.construction": "<strong>Construction notice:</strong> there is construction on East Colfax in front of the store. Please park behind the store and come around to the entrance, or park on the street.",
      "map.placeholder": "Map of Tienda Salvadoreña",
      "map.directions": "Get directions",
      "map.view": "View on Google Maps",
      "items.hero.imgAlt": "Racks full of plantain chips and Central American snacks inside the store",
      "press.hero.imgAlt": "Central American country flags for sale inside the store",
      "contact.hero.imgAlt": "Store interior with glass display cases, caps and El Salvador souvenirs",
      "contact.quick.title": "Quick actions",
      "contact.quick.email": "Send an email",
      "quintana.badge": "Partner service",
      "quintana.logoAlt": "Quintana Notary & Signing logo: a navy seal with an orange fountain pen",
      "quintana.call": "Call 303-500-4122",

      // ========================================
      // HOME PAGE (index.html)
      // ========================================
      "hero.title": "A little piece of El Salvador <span class=\"hero__accent\">in the heart of Denver</span>",
      "hero.lead": "Groceries, frozen goods, drinks, clothing, souvenirs, natural remedies and much more, brought from El Salvador and Central America.",
      "hero.note": "Colorado's oldest Salvadoran store (30+ years)",
      "hero.explore": "Explore Products",
      "hero.press": "Press",
      "hero.imgAltNavidad": "Jorge and Delia praying at the Christmas nativity with a Merry Christmas sign",
      
      "mission.title": "Colorado's oldest Salvadoran store",
      "mission.lead": "Tienda Salvadoreña is a family business rooted in the community. For over 30 years we've served Denver's Hispanic community with authentic products from El Salvador and Central America: groceries, clothing, souvenirs and much more, keeping our traditions alive.",
      
      "categories.title": "Explore Our Products",
      "categories.viewall": "View all items",
      
      // Category Cards
      "cat.food.title": "Food & Drinks",
      "cat.food.lead": "Sodas, juices, chocolate and frozen fruit.",
      "cat.food.imgAlt": "Store shelves stocked with beans, sauces, seasonings and other Central American pantry staples",
      
      "cat.clothing.title": "Clothing & Accessories",
      "cat.clothing.lead": "Guayaberas, hats and traditional footwear.",
      "cat.clothing.imgAlt": "Traditional white embroidered guayabera shirts hanging on a rack in the store",
      
      "cat.nostalgia.title": "Trinkets and souvenirs",
      "cat.nostalgia.lead": "Keychains, bracelets and gifts with identity.",
      "cat.nostalgia.imgAlt": "Display of bracelets, keychains, necklaces and hair accessories",
      
      "cat.wellness.title": "Herbs and Care",
      "cat.wellness.lead": "Medicines, natural soaps and hygiene items.",
      "cat.wellness.imgAlt": "Shelves of natural soaps, herbal supplements and personal care items",
      
      // Press Section
      "press.title": "Community Recognition",
      "press.quote": "A pillar of Denver's Hispanic community.",
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
      
      
      "history.values.title": "Our Values",
      "history.values.authenticity": "Authenticity – genuine products that represent our culture.",
      "history.values.family": "Family – a business founded on love and legacy.",
      "history.values.community": "Community – serving with warmth and respect.",
      "history.values.pride": "Cultural Pride – sharing our roots with Colorado.",
      
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
      
      "pollo.reheat.airfryer.title": "Air Fryer Method (Quick and Crispy)",
      "pollo.reheat.airfryer.step1": "Preheat the air fryer to <strong>190°C (375°F)</strong>.",
      "pollo.reheat.airfryer.step2": "Place the chicken in a single layer in the basket (do not overcrowd).",
      "pollo.reheat.airfryer.step3": "Reheat <strong>4–6 minutes</strong>, flipping halfway if the pieces are large.",
      "pollo.reheat.airfryer.step4": "Check the internal temperature: it should reach <strong>74°C (165°F)</strong>.",
      "pollo.reheat.airfryer.step5": "Let rest for 1–2 minutes before serving.",
      
      "pollo.reheat.oven.title": "Oven Method (Slower but Reliable)",
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
      "quintana.notary.title.compact": "Notary Services",
      "quintana.notary.desc.compact": "$10/signature at this location (regular $15) • No travel fee",
      "quintana.translation.title.compact": "Certified Translations",
      "quintana.translation.desc.compact": "English ↔ Spanish • Prepared to the receiving agency's requirements (e.g., USCIS or DMV) • $5 off with store receipt",
      "quintana.translation.link": "Learn more",
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
      "desc.home": "La tienda salvadoreña más antigua de Denver (30+ años). Productos salvadoreños y centroamericanos auténticos: comestibles, bebidas, ropa, recuerdos y más en E Colfax Ave.",
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
      "footer.copy": "© 2026 Tienda Salvadoreña. Todos los derechos reservados.",

      // Full bilingual coverage: alt text, ARIA labels, press and contact strings
      "alt.medicinas-otc": "Medicinas OTC",
      "alt.vitaminas-y-suplementos": "Vitaminas y suplementos",
      "alt.jabones-y-hierbas-naturales": "Jabones y hierbas naturales",
      "alt.suplementos-nopalina-y-linaza": "Suplementos nopalina y linaza",
      "alt.articulos-de-cuidado-personal": "Artículos de cuidado personal",
      "alt.frijoles-salsas-y-condimentos": "Frijoles, salsas y condimentos",
      "alt.crema-y-quesos-centroamericanos": "Crema y quesos centroamericanos",
      "alt.queso-duro-viejo": "Queso Duro Viejo",
      "alt.hierbas-secas-y-especias": "Hierbas secas y especias",
      "alt.pan-dulce-y-quesadillas": "Pan dulce y quesadillas",
      "alt.dulces-tradicionales": "Dulces tradicionales",
      "alt.chips-de-platano-y-bocadillos": "Chips de plátano y bocadillos",
      "alt.nances-congelados": "Nances congelados",
      "alt.tamales-de-elote": "Tamales de elote",
      "alt.charrales-fritos": "Charrales fritos",
      "alt.kolashampan": "Kolashampan",
      "alt.gaseosas-en-botella-de-vidrio": "Gaseosas en botella de vidrio",
      "alt.jugos-naturales": "Jugos naturales",
      "alt.jugo-de-coco-foco": "Jugo de coco FOCO",
      "alt.guayaberas-tradicionales": "Guayaberas tradicionales",
      "alt.vestidos-y-bolsos": "Vestidos y bolsos",
      "alt.jerseys-especiales": "Jerseys especiales",
      "alt.carteras": "Carteras",
      "alt.chanclas": "Chanclas",
      "alt.gorras-de-pais": "Gorras de país",
      "alt.gorros-de-invierno": "Gorros de invierno",
      "alt.silabario-hispanoamericano": "Silabario Hispanoamericano",
      "alt.chucherias-y-regalos": "Chucherías y regalos",
      "alt.souvenirs": "Souvenirs",
      "aria.filtros-de-categoria": "Filtros de categoría",
      "aria.galeria-de-productos": "Galería de productos",
      "a11y.close": "Cerrar",
      "items.filter.title": "Filtrar por categoría",
      "alt.letrero-de-la-tienda": "Letrero de la tienda",
      "alt.bandera-de-el-salvador": "Bandera de El Salvador",
      "alt.jorge-y-delia-comiendo-pollo-campero-en-": "Jorge y Delia comiendo Pollo Campero en familia",
      "alt.delia-romero-sosteniendo-la-bandera-de-e": "Delia Romero sosteniendo la bandera de El Salvador",
      "alt.jorge-romero-detras-del-mostrador": "Jorge Romero detrás del mostrador",
      "alt.jorge-y-delia-con-la-bandera-de-el-salva": "Jorge y Delia con la bandera de El Salvador",
      "aria.imagenes-de-prensa": "Imágenes de prensa",
      "aria.articulos-destacados": "Artículos destacados",
      "press.credit1": "Foto © Kevin Beaty / Denverite",
      "press.credit2": "Foto © Kevin Beaty / Denverite, 2018",
      "press.credit3": "Foto: Nicolle Menéndez / Diario El Salvador",
      "press.recog1": "Primer negocio salvadoreño en Denver (1991)",
      "press.recog2": "Destacado en medios locales e internacionales",
      "press.recog3": "Apoyo comunitario durante crisis humanitarias",
      "press.recog4": "Más de 30 años sirviendo a la comunidad hispana",
      "aria.llamar-tienda-salvadorena": "Llamar Tienda Salvadoreña",
      "aria.visitar-facebook-de-tienda-salvadorena": "Visitar Facebook de Tienda Salvadoreña",
      "contact.why.title": "¿Por qué visitarnos?",
      "contact.why.years": "30+ Años de Historia",
      "contact.why.years.text": "La tienda salvadoreña más antigua de Colorado",
      "contact.why.products": "Productos Auténticos",
      "contact.why.products.text": "Importados directamente de El Salvador y Centroamérica",
      "contact.why.family": "Negocio Familiar",
      "contact.why.family.text": "Fundado y operado por Jorge y Delia Romero",
      "map.frameTitle": "Mapa de Google: Tienda Salvadoreña, 5128 E Colfax Ave, Denver",
      "a11y.language": "Idioma",

      // 2026 refresh: shared UI, home sections, map and service cards
      "a11y.skip": "Saltar al contenido",
      "nav.menu": "Menú",
      "nav.label": "Navegación principal",
      "footer.tagline": "La tienda salvadoreña más antigua de Colorado. Productos de El Salvador y Centroamérica desde hace más de 30 años.",
      "footer.links": "Enlaces rápidos",
      "footer.visit": "Visítanos",
      "hero.badge": "Más de 30 años en East Colfax",
      "hero.visit": "Ver Ubicación y Horario",
      "hero.img.owners": "Jorge y Delia Romero, fundadores de Tienda Salvadoreña, de pie frente a una bandera de El Salvador dentro de la tienda",
      "hero.img.owners.caption": "Jorge y Delia Romero, fundadores",
      "hero.img.owners.credit": "Foto: Nicolle Menéndez / Diario El Salvador",
      "hero.img.bread": "Gorras con los colores y escudos de El Salvador y otros países centroamericanos en una vitrina",
      "hero.img.kola": "Botellas de Kolashampan, la gaseosa salvadoreña color naranja, alineadas en el estante",
      "mission.eyebrow": "Nuestra historia",
      "mission.link": "Conoce nuestra historia",
      "fact.years.title": "Más de 30 años",
      "fact.years.text": "La tienda salvadoreña más antigua de Colorado.",
      "fact.family.title": "Negocio familiar",
      "fact.family.text": "Fundada y atendida por Jorge y Delia Romero.",
      "fact.import.title": "Productos auténticos",
      "fact.import.text": "Importados de El Salvador y Centroamérica.",
      "categories.eyebrow": "Lo que encontrarás",
      "categories.lead": "De la despensa a la ropa y los recuerdos: todo lo que extrañas de casa.",
      "cat.cta": "Ver productos",
      "cat.food.badge": "Kolashampan · Queso duro",
      "cat.clothing.badge": "Guayaberas",
      "cat.nostalgia.badge": "Regalos",
      "cat.wellness.badge": "Remedios naturales",
      "visit.eyebrow": "Visítanos",
      "visit.title": "Ubicación y horario",
      "visit.hours": "Horario",
      "visit.hours.sun": "Domingo 10 AM–6 PM",
      "visit.hours.week": "Lunes–Sábado 10 AM–7 PM",
      "visit.location": "Ubicación",
      "visit.phone": "Teléfono",
      "visit.call": "Llamar ahora",
      "visit.more": "Estacionamiento y más detalles",
      "notice.construction": "<strong>Aviso de construcción:</strong> hay obras en East Colfax frente a la tienda. Estacione detrás de la tienda y dé la vuelta hasta la entrada, o estacione en la calle.",
      "map.placeholder": "Mapa de Tienda Salvadoreña",
      "map.directions": "Cómo llegar",
      "map.view": "Ver en Google Maps",
      "items.hero.imgAlt": "Exhibidores llenos de chips de plátano y bocadillos centroamericanos dentro de la tienda",
      "press.hero.imgAlt": "Banderas de países centroamericanos a la venta dentro de la tienda",
      "contact.hero.imgAlt": "Interior de la tienda con vitrinas de vidrio, gorras y recuerdos de El Salvador",
      "contact.quick.title": "Acciones rápidas",
      "contact.quick.email": "Enviar correo",
      "quintana.badge": "Servicio asociado",
      "quintana.logoAlt": "Logotipo de Quintana Notary & Signing: sello azul marino con una pluma anaranjada",
      "quintana.call": "Llamar al 303-500-4122",

      // ========================================
      // HOME PAGE (index.html) - SPANISH
      // ========================================
      "hero.title": "Un pedacito de El Salvador <span class=\"hero__accent\">en el corazón de Denver</span>",
      "hero.lead": "Comestibles, productos congelados, bebidas, ropa, recuerdos, remedios naturales y mucho más, traídos de El Salvador y Centroamérica.",
      "hero.note": "La tienda salvadoreña más antigua de Colorado (30+ años)",
      "hero.explore": "Explorar Productos",
      "hero.press": "Prensa",
      "hero.imgAltNavidad": "Jorge y Delia rezando en el pesebre navideño con un cartel de Feliz Navidad",
      
      "mission.title": "La tienda salvadoreña más antigua de Colorado",
      "mission.lead": "Tienda Salvadoreña es un negocio familiar arraigado en la comunidad. Durante más de 30 años hemos servido a la comunidad hispana de Denver con productos auténticos de El Salvador y Centroamérica: comestibles, ropa, recuerdos y mucho más, manteniendo vivas nuestras tradiciones.",
      
      "categories.title": "Explora Nuestros Productos",
      "categories.viewall": "Ver todos los artículos",
      
      // Category Cards
      "cat.food.title": "Comida y Bebidas",
      "cat.food.lead": "Refrescos, jugos, chocolate y fruta congelada.",
      "cat.food.imgAlt": "Estantes de la tienda con frijoles, salsas, condimentos y otros básicos de despensa centroamericanos",
      
      "cat.clothing.title": "Ropa y Accesorios",
      "cat.clothing.lead": "Guayaberas, sombreros y calzado tradicional.",
      "cat.clothing.imgAlt": "Guayaberas blancas tradicionales con bordados, colgadas en un perchero de la tienda",
      
      "cat.nostalgia.title": "Chucherías y recuerdos",
      "cat.nostalgia.lead": "Llaveros, pulseras y regalos con identidad.",
      "cat.nostalgia.imgAlt": "Exhibidor con pulseras, llaveros, collares y accesorios para el cabello",
      
      "cat.wellness.title": "Hierbas y Cuidado",
      "cat.wellness.lead": "Medicinas, jabones naturales y artículos de higiene.",
      "cat.wellness.imgAlt": "Estantes con jabones naturales, suplementos herbales y artículos de cuidado personal",
      
      // Press Section
      "press.title": "Reconocimiento Comunitario",
      "press.quote": "Un pilar de la comunidad hispana de Denver.",
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
      
      
      "history.values.title": "Nuestros Valores",
      "history.values.authenticity": "Autenticidad – productos genuinos que representan nuestra cultura.",
      "history.values.family": "Familia – un negocio fundado en amor y legado.",
      "history.values.community": "Comunidad – servir con calidez y respeto.",
      "history.values.pride": "Orgullo cultural – compartir nuestras raíces con Colorado.",
      
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
      
      "pollo.reheat.airfryer.title": "Método Air Fryer (Rápido y crujiente)",
      "pollo.reheat.airfryer.step1": "Precaliente la freidora a <strong>190°C (375°F)</strong>.",
      "pollo.reheat.airfryer.step2": "Coloque el pollo en una sola capa en la canasta (no sobrecargue).",
      "pollo.reheat.airfryer.step3": "Recaliente <strong>4–6 minutos</strong>, volteando a la mitad si las piezas son grandes.",
      "pollo.reheat.airfryer.step4": "Verifique la temperatura interna: debe alcanzar <strong>74°C (165°F)</strong>.",
      "pollo.reheat.airfryer.step5": "Deje reposar 1–2 minutos antes de servir.",
      
      "pollo.reheat.oven.title": "Método Horno (Más lento pero confiable)",
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
      "press.quote3.text": "\"La gente viene de todo Colorado, Wyoming y Nebraska a comprar quesos y recuerdos que él importa de su tierra.\"",
      "press.quote4.text": "\"En East Colfax, junto a la cafetería de moda Bellwether, Jorge Romero y su esposa, Delia, han dirigido una tienda salvadoreña por más de 25 años.\"",
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
      "quintana.notary.title.compact": "Servicios Notariales",
      "quintana.notary.desc.compact": "$10/firma en esta ubicación (regular $15) • Sin cargo de viaje",
      "quintana.translation.title.compact": "Traducciones Certificadas",
      "quintana.translation.desc.compact": "Inglés ↔ Español • Preparadas según los requisitos de la agencia que las recibe (p. ej., USCIS o DMV) • $5 de descuento con recibo de la tienda",
      "quintana.translation.link": "Más información",
      "quintana.website": "Visitar Sitio Web"
    }
  };

  // ========================================
  // HOME PAGE REDESIGN (index.html, Oct 2026) — "home2.*" keys
  // ========================================
  Object.assign(translations.es, {
    "home2.tape": "Obras en Colfax · Seguimos abiertos · Estacione atrás de la tienda · Obras en Colfax · Seguimos abiertos · Estacione atrás de la tienda ·",
    "home2.brand.since": "Est. 1991 · East Colfax",
    "home2.hero.kicker": "5128 E Colfax Ave · Denver · desde 1991",
    "home2.hero.title": "<span class=\"t-small\">Un pedacito de</span> <span class=\"t-huge\">El Salvador</span> <span class=\"t-mid\">en <em>East Colfax.</em></span>",
    "home2.hero.lead": "Queso duro, Kolashampan, pan dulce, guayaberas, el Silabario de la escuela y todo lo que extraña de casa. Hace más de 30 años que lo traemos de El Salvador y Centroamérica, y lo acomodamos a mano en cada estante.",
    "home2.hero.cta": "Ver qué hay en los estantes",
    "home2.hero.cta2": "Horario y cómo llegar",
    "home2.tag.hello": "¡Pase adelante, chero!",
    "home2.note.hi": "¡Qué tal, cheros y cipotes!",
    "home2.note.body": "Si no lo ve en el estante, pregúntenos: a lo mejor está en la bodega. Y si es su primera vez, llévese el queso duro.",
    "home2.note.sign": "— Jorge y Delia",
    "home2.story.kicker": "Capítulo uno",
    "home2.story.title": "Empezó en un local del tamaño de un clóset en Colorado Boulevard.",
    "home2.story.p1": "Delia era maestra en El Salvador; Jorge venía de la industria aérea en Ecuador. En Denver soñaron con un lugar donde los centroamericanos se sintieran en casa. La tiendita creció, se mudó a East Colfax y se convirtió en la tienda salvadoreña más antigua de Colorado.",
    "home2.story.p2": "Más de tres décadas después, siguen detrás del mostrador: recomendando quesos, guardando el pan dulce de los clientes de siempre y apoyando a la comunidad cuando más lo necesita.",
    "home2.ledger.label": "Datos de la tienda",
    "home2.ledger.years": "años en la comunidad hispana de Denver",
    "home2.ledger.owners": "dueños que todavía le atienden en persona",
    "home2.shelves.title": "Lo que hay en <em>los estantes</em>",
    "home2.shelves.scribble": "(…y lo que no cabe, está en la bodega. ¡Pregunte!)",
    "home2.tag.aisle": "Pasillo 1",
    "home2.tag.fav": "Bien chivo",
    "home2.tag.early": "Para el cafecito",
    "home2.tag.wall": "La pared de las bolsitas",
    "home2.tag.case": "La vitrina",
    "home2.cardboard.a": "Y otros chunches:",
    "home2.cardboard.b": "chanclas · banderas · carteras · dulces típicos · nances · tamales de elote · remedios · recuerdos",
    "home2.obras.stamp": "Aviso para los de siempre",
    "home2.obras.title": "¡Ojo, vecino! <span>Colfax anda en obra.</span>",
    "home2.obras.lead": "Esos conos anaranjados frente a la tienda no son decoración nueva. Estacione detrás de la tienda y dé la vuelta hasta la entrada, o busque lugar en la calle. Las obras van despacio; nosotros seguimos abiertos.",
    "home2.obras.joke": "Vaya pues: la vuelta vale la pena por el queso duro.",
    "home2.obras.mapAlt": "Mapa dibujado a mano: estacione en el lote detrás de la tienda y camine por el costado hasta la entrada en Colfax",
    "home2.obras.caption": "Mapa no a escala. Dibujado con cariño.",
    "home2.map.lot": "Parqueo atrás",
    "home2.map.walk": "¡son 30 pasos!",
    "home2.map.door": "entrada",
    "home2.visit.title": "Venga a vernos, pues.",
    "home2.sign.foot": "Abrimos 10 AM · todos los días",
    "home2.receipt.pay": "Pago",
    "home2.receipt.payval": "Efectivo · Crédito · Débito",
    "home2.receipt.park": "Parqueo",
    "home2.receipt.parkval": "Atrás de la tienda o en la calle",
    "home2.receipt.thanks": "¡Gracias por su visita! Vuelva pronto.",
    "home2.footer.wink": "Hecho en East Colfax, con conos y todo. ¡Va pues!",
    "home2.tag.kola": "¡Bien helada!",
    "home2.lore.kola": "Ni uva ni naranja: sabe a kola champán… y a recreo de escuela.",
    "home2.lore.queso": "Rallado sobre los frijolitos, o con tortilla tostada y café.",
    "home2.lore.guaya": "De gala en bodas y bautizos, fresquita para el calor del puerto.",
    "home2.lore.pan": "La quesadilla salvadoreña lleva queso y harina de arroz: dulce y salada a la vez.",
    "home2.lore.sila": "Del maestro chileno Adrián Dufflocq: con él aprendieron a leer generaciones.",
    "home2.art.kicker": "Hecho a mano en el Pulgarcito",
    "home2.art.title": "Los pueblos detrás <em>de lo artesanal</em>",
    "home2.art.lead": "El Salvador es chiquito, pero cada pueblo tiene su oficio. Estas son las tradiciones artesanales que nos recuerdan a casa. ¿Quiere saber de dónde viene una pieza en particular? Pregúntenos en la tienda.",
    "home2.art.photo1": "Carteras y bolsos en la vitrina de la tienda.",
    "home2.art.photo2": "Vestidos, bolsos y mantas de colores.",
    "home2.art.ilobasco": "Barro pintado y las famosas «sorpresas»: cascaritas de barro que esconden escenas en miniatura.",
    "home2.art.ataco": "Telares de colores en plena Ruta de las Flores: cintas, manteles y bolsos tejidos a mano.",
    "home2.art.nahuizalco": "Mimbre y tule: canastos, petates y muebles tejidos a mano. Y su mercado nocturno a la luz de las velas.",
    "home2.art.lapalma": "El estilo de Fernando Llort: casitas, palomas y montañas pintadas en madera con colores vivos.",
    "home2.art.sansebastian": "Hamacas y colchas tejidas en telares de madera, hilo por hilo.",
    "home2.art.guatajiagua": "Barro negro de tradición lenca, pulido a mano y quemado a leña.",
    "home2.pup.kicker": "Para cocinar en casa",
    "home2.pup.title": "¿Y las pupusas, <em>pues?</em>",
    "home2.pup.lead": "Aquí somos tienda, no cocina. Pero si se lleva harina, frijolitos y queso, ya sabemos qué va a hacer en casa. Esta es la anatomía de la pupusa ideal.",
    "home2.pup.day": "<span>Día Nacional de la Pupusa</span> segundo domingo de noviembre",
    "home2.pup.svgAlt": "Diagrama de una pupusa cortada: masa, relleno, manchitas del comal, curtido y salsa de tomate",
    "home2.pup.caption": "Anatomía de la pupusa. Dibujo hecho en casa, como las pupusas.",
    "home2.lbl.masa1": "la masa",
    "home2.lbl.masa2": "maíz o arroz",
    "home2.lbl.comal1": "manchitas doradas",
    "home2.lbl.comal2": "= ¡en su punto!",
    "home2.lbl.fill1": "el relleno",
    "home2.lbl.fill2": "queso, loroco, frijol o revuelta",
    "home2.lbl.curtido1": "el curtido",
    "home2.lbl.curtido2": "que cruja, sin ahogar",
    "home2.lbl.salsa1": "salsa de tomate",
    "home2.lbl.salsa2": "aguadita, nunca espesa",
    "home2.pup.cardTitle": "Tips de la casa",
    "home2.pup.t1": "<strong>La masa:</strong> 2 tazas de harina de maíz, 1½ tazas de agua tibia y una pizca de sal. Amase hasta que quede suavecita, como plastilina. ¿Se raja en las orillas? Un chorrito más de agua.",
    "home2.pup.t2": "<strong>Las manos:</strong> mójelas en agua con un poquito de aceite y la masa no se le pega.",
    "home2.pup.t3": "<strong>El relleno:</strong> una bolita del tamaño de una nuez grande. Si la llena de más, se le revienta en el comal.",
    "home2.pup.t4": "<strong>El comal:</strong> fuego medio, 3 a 4 minutos por lado, hasta que salgan las manchitas doradas.",
    "home2.pup.t5": "<strong>El curtido:</strong> repollo, zanahoria, cebolla, orégano y vinagre, mejor si lo deja reposar desde la noche anterior. Una buena porción encima, que cruja, pero que la pupusa se siga sintiendo.",
    "home2.pup.t6": "<strong>Regla de oro:</strong> se comen con la mano. Ley.",
    "home2.pup.shop": "Busque en los estantes: harina de maíz, frijoles, quesos, crema y especias. ¿Loroco? Pregunte qué llegó esta semana.",
    "home2.pup.shopLink": "Ver la despensa",
    "home2.radio.pitch": "Póngale marimba mientras echa las pupusas.",
    "home2.radio.fine": "Melodía original estilo marimba, tocada por su navegador. Solo suena si usted la enciende.",
    "home2.cal.title": "Caliche de bolsillo",
    "home2.cal.cipote": "niño, chamaco",
    "home2.cal.chero": "amigo, compa",
    "home2.cal.chivo": "¡qué bueno!",
    "home2.cal.chunche": "cosa, cachivache",
    "home2.cal.puchica": "¡caramba!",
    "home2.cal.pisto": "dinero",
    "home2.cal.vaya": "está bien, de acuerdo"
  });

  Object.assign(translations.en, {
    "home2.tape": "Construction on Colfax · We're still open · Park behind the store · Construction on Colfax · We're still open · Park behind the store ·",
    "home2.brand.since": "Est. 1991 · East Colfax",
    "home2.hero.kicker": "5128 E Colfax Ave · Denver · since 1991",
    "home2.hero.title": "<span class=\"t-small\">A little piece of</span> <span class=\"t-huge\">El Salvador</span> <span class=\"t-mid\">on <em>East Colfax.</em></span>",
    "home2.hero.lead": "Queso duro, Kolashampan, pan dulce, guayaberas, the Silabario from grade school and everything else you miss from home. For more than 30 years we've brought it from El Salvador and Central America and stocked every shelf by hand.",
    "home2.hero.cta": "See what's on the shelves",
    "home2.hero.cta2": "Hours & directions",
    "home2.tag.hello": "Come on in, chero!",
    "home2.note.hi": "Hey there, cheros & cipotes!",
    "home2.note.body": "If you don't see it on the shelf, just ask: it might be in the back. And if it's your first visit, take home some queso duro.",
    "home2.note.sign": "— Jorge & Delia",
    "home2.story.kicker": "Chapter one",
    "home2.story.title": "It started in a closet-sized shop on Colorado Boulevard.",
    "home2.story.p1": "Delia was a teacher in El Salvador; Jorge came from the airline industry in Ecuador. In Denver they dreamed of a place where Central Americans could feel at home. The little shop grew, moved to East Colfax and became the oldest Salvadoran store in Colorado.",
    "home2.story.p2": "More than three decades later they're still behind the counter: recommending cheeses, setting aside pan dulce for the regulars and showing up for the community when it needs them most.",
    "home2.ledger.label": "Store facts",
    "home2.ledger.years": "years in Denver's Hispanic community",
    "home2.ledger.owners": "owners who still help you in person",
    "home2.shelves.title": "What's on <em>the shelves</em>",
    "home2.shelves.scribble": "(…and what doesn't fit is in the back. Just ask!)",
    "home2.tag.aisle": "Aisle 1",
    "home2.tag.fav": "Bien chivo (so good)",
    "home2.tag.early": "For your afternoon coffee",
    "home2.tag.wall": "The wall of little bags",
    "home2.tag.case": "The glass case",
    "home2.cardboard.a": "And other chunches:",
    "home2.cardboard.b": "sandals · flags · purses · classic candy · nances · corn tamales · remedies · keepsakes",
    "home2.obras.stamp": "A heads-up for the regulars",
    "home2.obras.title": "Heads up, neighbor! <span>Colfax is torn up.</span>",
    "home2.obras.lead": "Those orange cones out front are not our new décor. Park behind the store and walk around to the front entrance, or find a spot on the street. The roadwork is slow; we're still open.",
    "home2.obras.joke": "Vaya pues: the queso duro is worth the detour.",
    "home2.obras.mapAlt": "Hand-drawn map: park in the lot behind the store and walk along the side to the entrance on Colfax",
    "home2.obras.caption": "Not to scale. Drawn with love.",
    "home2.map.lot": "Back lot",
    "home2.map.walk": "just 30 steps!",
    "home2.map.door": "entrance",
    "home2.visit.title": "Come see us, pues.",
    "home2.sign.foot": "Open 10 AM · every day",
    "home2.receipt.pay": "Payment",
    "home2.receipt.payval": "Cash · Credit · Debit",
    "home2.receipt.park": "Parking",
    "home2.receipt.parkval": "Behind the store or on the street",
    "home2.receipt.thanks": "Thanks for stopping by! Come back soon.",
    "home2.footer.wink": "Made on East Colfax, cones and all. ¡Va pues!",
    "home2.tag.kola": "Ice cold!",
    "home2.lore.kola": "Not grape, not orange: it tastes like champagne cola… and school recess.",
    "home2.lore.queso": "Grated over beans, or with a toasted tortilla and coffee.",
    "home2.lore.guaya": "Dressy enough for weddings and baptisms, cool enough for the port heat.",
    "home2.lore.pan": "Salvadoran quesadilla is a cheese and rice-flour cake: sweet and salty at once.",
    "home2.lore.sila": "By Chilean educator Adrián Dufflocq: generations learned to read with it.",
    "home2.art.kicker": "Handmade in the Pulgarcito",
    "home2.art.title": "The towns behind <em>the handcrafts</em>",
    "home2.art.lead": "El Salvador is tiny, but every town has its craft. These are the handmade traditions that remind us of home. Curious where a particular piece comes from? Ask us at the store.",
    "home2.art.photo1": "Purses and bags in the store's glass case.",
    "home2.art.photo2": "Dresses, bags and colorful blankets.",
    "home2.art.ilobasco": "Painted clay and the famous “sorpresas”: tiny clay shells that hide miniature scenes inside.",
    "home2.art.ataco": "Colorful looms right on the Ruta de las Flores: hand-woven ribbons, tablecloths and bags.",
    "home2.art.nahuizalco": "Wicker and tule reed: hand-woven baskets, sleeping mats and furniture. Plus its candlelit night market.",
    "home2.art.lapalma": "Fernando Llort's style: little houses, doves and mountains painted on wood in bright colors.",
    "home2.art.sansebastian": "Hammocks and bedspreads woven on wooden looms, thread by thread.",
    "home2.art.guatajiagua": "Black clay pottery in the Lenca tradition, hand-polished and wood-fired.",
    "home2.pup.kicker": "For cooking at home",
    "home2.pup.title": "And the pupusas, <em>pues?</em>",
    "home2.pup.lead": "We're a grocery store, not a kitchen. But if you're taking home masa flour, beans and cheese, we know what you're making. Here's the anatomy of the ideal pupusa.",
    "home2.pup.day": "<span>National Pupusa Day</span> second Sunday of November",
    "home2.pup.svgAlt": "Diagram of a cut pupusa: masa, filling, golden griddle spots, curtido and tomato salsa",
    "home2.pup.caption": "Pupusa anatomy. Homemade drawing, just like the pupusas.",
    "home2.lbl.masa1": "the masa",
    "home2.lbl.masa2": "corn or rice",
    "home2.lbl.comal1": "golden spots",
    "home2.lbl.comal2": "= just right!",
    "home2.lbl.fill1": "the filling",
    "home2.lbl.fill2": "cheese, loroco, beans or revuelta",
    "home2.lbl.curtido1": "the curtido",
    "home2.lbl.curtido2": "crunchy, not drowning",
    "home2.lbl.salsa1": "tomato salsa",
    "home2.lbl.salsa2": "thin, never thick",
    "home2.pup.cardTitle": "House tips",
    "home2.pup.t1": "<strong>The masa:</strong> 2 cups masa flour, 1½ cups warm water and a pinch of salt. Knead until it's soft, like modeling clay. Cracking at the edges? Add a splash more water.",
    "home2.pup.t2": "<strong>Your hands:</strong> dip them in water with a little oil so the masa doesn't stick.",
    "home2.pup.t3": "<strong>The filling:</strong> a ball about the size of a large walnut. Overfill it and it bursts on the griddle.",
    "home2.pup.t4": "<strong>The comal:</strong> medium heat, 3 to 4 minutes per side, until golden spots appear.",
    "home2.pup.t5": "<strong>The curtido:</strong> cabbage, carrot, onion, oregano and vinegar, best made the night before. A generous pile on top that crunches, without burying the pupusa.",
    "home2.pup.t6": "<strong>Golden rule:</strong> eat them with your hands. That's the law.",
    "home2.pup.shop": "Look on our shelves: masa flour, beans, cheeses, crema and spices. Loroco? Ask what came in this week.",
    "home2.pup.shopLink": "Browse the pantry",
    "home2.radio.pitch": "Put on some marimba while you pat out the pupusas.",
    "home2.radio.fine": "An original marimba-style tune played by your browser. It only plays if you turn it on.",
    "home2.cal.title": "Pocket caliche (Salvadoran slang)",
    "home2.cal.cipote": "kid",
    "home2.cal.chero": "buddy, pal",
    "home2.cal.chivo": "cool, awesome",
    "home2.cal.chunche": "thing, thingamajig",
    "home2.cal.puchica": "wow! / darn!",
    "home2.cal.pisto": "money",
    "home2.cal.vaya": "alright then"
  });

  // ========================================
  // LANGUAGE APPLICATION LOGIC
  // ========================================
  
  // Get current language from localStorage or default to Spanish
  const SUPPORTED_LANGS = ['es', 'en'];

  /**
   * Language for a first-time visitor, taken from the device/browser language
   * list in order of preference. Spanish devices get Spanish, English devices
   * get English, and any other language falls back to English.
   */
  function detectDeviceLanguage() {
    const preferred = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || ''];
    for (const tag of preferred) {
      const base = String(tag).toLowerCase().split('-')[0];
      if (SUPPORTED_LANGS.includes(base)) return base;
    }
    return 'en';
  }

  /** A language the visitor picked with the ES/EN buttons, if any. */
  function getSavedLanguage() {
    try {
      const saved = localStorage.getItem('language');
      return SUPPORTED_LANGS.includes(saved) ? saved : null;
    } catch (error) {
      return null; // Storage can be blocked (private mode, strict settings)
    }
  }

  // A saved choice wins; otherwise follow the device language
  let currentLang = getSavedLanguage() || detectDeviceLanguage();

  /**
   * Apply translations to all elements with data-i18n attribute
   * @param {string} lang - Language code ('en' or 'es')
   * @param {boolean} [remember] - Save the choice (only when the visitor clicks ES/EN)
   */
  function applyTranslations(lang, remember) {
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
    
    // Translate attributes: data-i18n-alt (image alt text), data-i18n-aria-label, data-i18n-title
    [['data-i18n-alt', 'alt'], ['data-i18n-aria-label', 'aria-label'], ['data-i18n-title', 'title']].forEach(([dataAttr, targetAttr]) => {
      document.querySelectorAll('[' + dataAttr + ']').forEach(el => {
        const translation = translations[lang][el.getAttribute(dataAttr)];
        if (translation) el.setAttribute(targetAttr, translation);
      });
    });

    // Update page title if exists
    const titleKey = document.querySelector('title[data-i18n]')?.getAttribute('data-i18n');
    if (titleKey && translations[lang][titleKey]) {
      document.title = translations[lang][titleKey];
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    
    // Save preference
    if (remember) {
      try {
        localStorage.setItem('language', lang);
      } catch (error) {
        // Preference just won't persist
      }
    }
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
    
    // Apply initial translations
    applyTranslations(currentLang);
    
    const btnSpanish = document.getElementById('btnSpanish');
    const btnEnglish = document.getElementById('btnEnglish');
    
    if (btnSpanish) btnSpanish.addEventListener('click', () => applyTranslations('es', true));
    if (btnEnglish) btnEnglish.addEventListener('click', () => applyTranslations('en', true));
  });
})();
