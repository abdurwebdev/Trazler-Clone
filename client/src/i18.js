import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        // Existing translations
        hero: "Inspiration for travel by real people",
        "hero-child": "Book better. Travel smart.",
        "latest-articles": "Latest articles",
        "see-all": "See all",
        "article-title-one": "Top 10 must-see beaches in the Seychelles",
        "article-description-one":
          "When we say Seychelles, you'll immediately think of the sun, beaches, and crystal-clear waters. But there's more to this tropical paradise than meets the eye. From the lush interior to the unique wildlife, Seychelles is a destination that offers something for everyone.",
        by: "By",
        "date-one": "July 9, 2024",
        "article-title-two": "What to do in Thailand?",
        "article-description-two":
          "Thailand is a very popular tourist destination, and yet there is a lot to discover. Whether you are an adventurer, a nature lover or a culture enthusiast, there is something for everyone.",
        "date-two": "October 10, 2024",
        "article-title-three": "Top 10 must-see beaches in the Seychelles",
        "article-description-three":
          "When we say Seychelles, you'll immediately think of the sun, beaches, and crystal-clear waters. But there's more to this tropical paradise than meets the eye. From the lush interior to the unique wildlife, Seychelles is a destination that offers something for everyone.",
        "date-three": "July 9, 2024",
        "article-title-four": "Top 10 must-see beaches in the Seychelles",
        "article-description-four":
          "When we say Seychelles, you'll immediately think of the sun, beaches, and crystal-clear waters. But there's more to this tropical paradise than meets the eye. From the lush interior to the unique wildlife, Seychelles is a destination that offers something for everyone.",
        "date-four": "October 8, 2024",
        category: "Categories",
        africa: "Africa",
        "north-america": "North America",
        "south-america": "South America",
        europe: "Europe",
        asia: "Asia",
        oceania: "Oceania",
        research: "Search",
        "search-placeholder": "Search an article",
        "side-main": "Get notified of the best deals from Trazler",
        email: "Enter your email",
        subscribe: "SUBSCRIBE",
        check:
          "By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.",
        notify: "Get notified of the best deals from Trazler",
        "blog-card-1-title": "Itinerary for 2 weeks in Southern Thailand",
        "blog-card-1-description": "Planning a trip to Southern Thailand?",
        "blog-card-1-author": "Thomas Chabrieres",
        "blog-card-1-date": "November 26, 2024",
        "blog-card-2-title": "Road Trip in South Africa: The 10 must-see stops",
        "blog-card-2-description":
          "South Africa and Mozambique are ideal destinations for a road trip in Africa",
        "blog-card-2-author": "Eva Jouhault",
        "blog-card-2-date": "November 19, 2024",
        "blog-card-3-title":
          "The complete guide for a 15-day itinerary in Peru",
        "blog-card-3-description":
          "Have you heard this iconic theme song from The Mysterious Cities of Gold, the",
        "blog-card-3-author": "Leonie Malleville",
        "blog-card-3-date": "November 12, 2024",
        "blog-card-4-title": "4 days in Ireland: Must-see attractions",
        "blog-card-4-description":
          "Ireland, a land of legends, breathtaking landscapes, and vibrant cultures,",
        "blog-card-4-author": "Coline Levins",
        "blog-card-4-date": "November 5, 2024",
        "load-more": "LOAD MORE",
        "view-posts": "view posts",
        "popular-categories": "Popular Categories",
        "blog-card-5-title":
          "Ultimate Asia Itinerary: From Temples to Tropical Escapes",
        "blog-card-5-description":
          "Explore ancient temples, vibrant cities, and island paradises across Asia.",
        "blog-card-5-author": "Nina Takashi",
        "blog-card-5-date": "October 18, 2024",
        "blog-card-6-title":
          "Explore Oceania: Australia, New Zealand & Island Escapes",
        "blog-card-6-description":
          "From the Great Barrier Reef to Fiji’s beaches, this itinerary has it all.",
        "blog-card-6-author": "Liam McConnell",
        "blog-card-6-date": "October 25, 2024",

        // New translations for Blog 1 (Thailand)
        "blog-1-intro":
          "Planning a <b>trip to Southern Thailand</b>? You’ve come to the right place! Here’s a complete guide to make sure you don’t miss out on the <b>must-see spots, paradise destinations, and delicious local dishes.</b>",
        "blog-1-introtwo":
          "This customized itinerary will help you <b>discover the best of Southern Thailand.</b> Plus, we’ll share some practical tips to help you organize your trip seamlessly.",
        "blog-1-headingone": "Week 1: Exploring islands and paradise beaches",
        "blog-1-headingtwo": "Must-visit destinations",
        "blog-1-subheadingone": "Phuket",
        "blog-1-paraone":
          "Phuket is Thailand’s largest island known for its stunning beaches, lively nightlife, and historic temples like Wat Chalong and the Big Buddha.",
        "blog-1-subheadingtwo": "Koh Phi Phi",
        "blog-1-paratwo":
          "Koh Phi Phi is renowned for its limestone cliffs, turquoise waters, and Maya Bay — made famous by the film 'The Beach.'",
        "blog-1-subheadingthree": "Phang Nga Bay",
        "blog-1-parathree":
          "Phang Nga Bay, also known as James Bond Island, offers dramatic limestone formations and calm emerald waters.",
        "blog-1-mustTryDishes":
          "Try <b>Tom Yum Goong</b>, <b>Pad Thai</b>, and <b>Khanom Jeen</b> — along with beachside grilled fish and tamarind seafood.",
        "blog-1-headingthree":
          "Week 2: Nature, culture, and the deep South’s flavors",
        "blog-1-subheadingfour": "Krabi",
        "blog-1-parafour":
          "Krabi is known for its epic Railay cliffs and Tiger Cave Temple — a spiritual challenge with 1,200 steps.",
        "blog-1-subheadingfive": "Koh Lanta",
        "blog-1-parafive":
          "This peaceful island is perfect for quiet beach days, snorkeling, and enjoying crab curry.",
        "blog-1-subheadingsix": "Khao Sok National Park",
        "blog-1-parasix":
          "Explore jungle treks and the magical Cheow Lan Lake in one of Thailand’s oldest rainforests.",
        "blog-1-foodKrabi":
          "Try <b>Gaeng Som Pla</b>, <b>grilled seafood</b>, <b>roti</b>, and tropical fruits like <b>durian</b> and <b>rambutan</b>.",
        "blog-1-practicalTips":
          "Visit from <b>November–April</b> for dry season. Avoid <b>May–October</b> due to monsoons.",
        "blog-1-transportation":
          "Use ferries, longtail boats, minivans, or domestic flights. Scooters are popular locally.",
        "blog-1-booking":
          "Book your entire trip with <b>Trazler</b> — flights, hotels, transfers, and 24/7 support.",
        "blog-1-faq-1-question":
          "What is the best time to visit Southern Thailand?",
        "blog-1-faq-1-answer":
          "November to April — sunny and perfect for water activities.",
        "blog-1-faq-2-question": "How to get around the islands?",
        "blog-1-faq-2-answer":
          "Use ferries and longtail boats. On land: scooters and buses.",
        "blog-1-faq-3-question": "Top attractions in Koh Phi Phi?",
        "blog-1-faq-3-answer":
          "Maya Bay, snorkeling, boat tours, and beach parties.",

        // New translations for Blog 2 (Africa)
        "blog-2-intro":
          "Ready to explore <b>Africa's raw beauty and vibrant culture</b>? From safaris to ancient architecture, this guide covers it all.",
        "blog-2-introtwo":
          "Experience wildlife, historical landmarks, and traditional cuisines across North, East, and Southern Africa.",
        "blog-2-headingone": "Week 1: Safari Adventures",
        "blog-2-headingtwo": "Must-visit destinations",
        "blog-2-subheadingone": "Serengeti, Tanzania",
        "blog-2-paraone":
          "Witness the Great Migration, a world-famous natural event filled with wildebeests, zebras, and big cats.",
        "blog-2-subheadingtwo": "Maasai Mara, Kenya",
        "blog-2-paratwo":
          "A prime spot for lion sightings and cultural visits to Maasai villages.",
        "blog-2-subheadingthree": "Kruger Park, South Africa",
        "blog-2-parathree":
          "South Africa’s premier wildlife reserve, offering luxury lodges and guided tours.",
        "blog-2-mustTryDishes":
          "Sample <b>Nyama Choma</b>, <b>Bunny Chow</b>, and <b>Injera</b> with spicy stews.",
        "blog-2-headingthree": "Week 2: Culture and Coasts",
        "blog-2-subheadingfour": "Zanzibar",
        "blog-2-parafour":
          "Explore Stone Town, spice markets, and white-sand beaches.",
        "blog-2-subheadingfive": "Cape Town",
        "blog-2-parafive":
          "Climb Table Mountain, tour Robben Island, and relax on Camps Bay.",
        "blog-2-subheadingsix": "Marrakech",
        "blog-2-parasix":
          "Visit the souks, palaces, and gardens of this vibrant Moroccan city.",
        "blog-2-foodKrabi":
          "Enjoy <b>Moroccan tagines</b>, <b>Zanzibar seafood curries</b>, and <b>South African braai</b>.",
        "blog-2-practicalTips":
          "Best travel months: <b>June–October</b>. Respect local customs and wildlife rules.",
        "blog-2-transportation":
          "Use 4x4s for safaris. Domestic flights connect major cities.",
        "blog-2-booking":
          "Use Trazler to plan multi-country Africa trips with ease and support.",
        "blog-2-faq-1-question": "What’s the best safari destination?",
        "blog-2-faq-1-answer":
          "Serengeti and Maasai Mara for wildlife; Kruger for accessibility.",
        "blog-2-faq-2-question": "Can I combine safari with beach?",
        "blog-2-faq-2-answer":
          "Yes! Safari + Zanzibar or Cape Town is a popular combo.",
        "blog-2-faq-3-question": "Is Africa safe to travel?",
        "blog-2-faq-3-answer":
          "Stick to tourist routes, use guides, and avoid risky areas.",

        // New translations for Blog 3 (South America)
        "blog-3-intro":
          "Planning your dream adventure through <b>South America</b>? Let us guide you through the top destinations and local gems.",
        "blog-3-introtwo":
          "From Andes peaks to Amazon jungle and bustling cities — it’s all here!",
        "blog-3-headingone": "Week 1: Mountains and Culture",
        "blog-3-headingtwo": "Must-visit destinations",
        "blog-3-subheadingone": "Machu Picchu, Peru",
        "blog-3-paraone":
          "Hike the Inca Trail or take the train to this iconic ancient city in the clouds.",
        "blog-3-subheadingtwo": "La Paz, Bolivia",
        "blog-3-paratwo":
          "Explore the world's highest capital and ride the famous Teleférico.",
        "blog-3-subheadingthree": "Quito, Ecuador",
        "blog-3-parathree":
          "Visit the Equator line, colonial architecture, and Andean markets.",
        "blog-3-mustTryDishes":
          "Taste <b>ceviche</b>, <b>empanadas</b>, and <b>arepas</b> throughout the region.",
        "blog-3-headingthree": "Week 2: Beaches and Rainforests",
        "blog-3-subheadingfour": "Rio de Janeiro",
        "blog-3-parafour":
          "Relax on Copacabana Beach or climb to Christ the Redeemer.",
        "blog-3-subheadingfive": "Amazon Basin",
        "blog-3-parafive":
          "Join eco-lodges and river tours in Brazil or Peru for true jungle adventure.",
        "blog-3-subheadingsix": "Buenos Aires",
        "blog-3-parasix":
          "Experience tango, European vibes, and steak culture in Argentina’s capital.",
        "blog-3-foodKrabi":
          "Enjoy <b>chimichurri steak</b>, <b>Brazilian feijoada</b>, and <b>Amazonian fish</b>.",
        "blog-3-practicalTips":
          "Best seasons: <b>April–October</b>. Bring layered clothing for climate variation.",
        "blog-3-transportation":
          "Use regional flights, buses, or boat rides across the Amazon and Andes.",
        "blog-3-booking":
          "Trazler makes it easy to book multi-stop South American itineraries.",
        "blog-3-faq-1-question": "Do I need a visa?",
        "blog-3-faq-1-answer":
          "Check your country’s entry requirements for each nation.",
        "blog-3-faq-2-question": "Is the Amazon safe?",
        "blog-3-faq-2-answer":
          "Yes, with a guide. Choose reputable eco-lodges and tours.",
        "blog-3-faq-3-question": "Best time for Machu Picchu?",
        "blog-3-faq-3-answer": "May to October, dry and clear.",

        // New translations for Blog 4 (Europe)
        "blog-4-intro":
          "Want to fall in love with <b>Europe</b>? Whether you're after castles, coffee, or coastline, we’ve got your back.",
        "blog-4-introtwo":
          "This guide helps you see 3–4 iconic European countries in 2 weeks.",
        "blog-4-headingone": "Week 1: Classics of Western Europe",
        "blog-4-headingtwo": "Must-visit destinations",
        "blog-4-subheadingone": "Paris, France",
        "blog-4-paraone":
          "Eiffel Tower, Louvre, Seine River cruise — enough said!",
        "blog-4-subheadingtwo": "Amsterdam, Netherlands",
        "blog-4-paratwo":
          "Cycle the canals, visit Van Gogh Museum, and enjoy stroopwafels.",
        "blog-4-subheadingthree": "Brussels, Belgium",
        "blog-4-parathree":
          "Sample chocolate, waffles, and admire Grand Place architecture.",
        "blog-4-mustTryDishes":
          "Enjoy <b>French pastries</b>, <b>Dutch cheese</b>, and <b>Belgian fries with mayo</b>.",
        "blog-4-headingthree": "Week 2: South and East",
        "blog-4-subheadingfour": "Rome, Italy",
        "blog-4-parafour":
          "Colosseum, Vatican, pizza — Italy’s capital offers it all.",
        "blog-4-subheadingfive": "Dubrovnik, Croatia",
        "blog-4-parafive": "Stroll medieval walls and swim in the Adriatic.",
        "blog-4-subheadingsix": "Prague, Czech Republic",
        "blog-4-parasix":
          "Affordable, walkable, and charming — with stunning Gothic architecture.",
        "blog-4-foodKrabi":
          "Try <b>gelato</b> in Rome, <b>pasticada</b> in Dubrovnik, and <b>goulash</b> in Prague.",
        "blog-4-practicalTips":
          "Travel in <b>spring or fall</b> for fewer crowds. Use trains or budget airlines.",
        "blog-4-transportation":
          "Eurail passes or short flights connect most European hubs.",
        "blog-4-booking":
          "Trazler lets you customize city-hopping routes with stays and activities.",
        "blog-4-faq-1-question": "Best countries for first-timers?",
        "blog-4-faq-1-answer":
          "France, Italy, and Netherlands are great intro choices.",
        "blog-4-faq-2-question": "Do I need a visa for Europe?",
        "blog-4-faq-2-answer":
          "Check the Schengen zone rules for your passport.",
        "blog-4-faq-3-question": "What’s the best time to travel Europe?",
        "blog-4-faq-3-answer":
          "May-June or September — great weather, less crowd.",

        // New translations for Blog 5 (Asia)
        "blog-5-intro":
          "Asia offers <b>spiritual journeys, ancient temples</b>, and <b>megacities pulsing with life</b>. Let’s explore it all.",
        "blog-5-introtwo":
          "Discover iconic destinations across <b>Japan, India, and Southeast Asia</b> with our curated 2-week itinerary.",
        "blog-5-headingone": "Week 1: Culture and Temples",
        "blog-5-headingtwo": "Must-visit destinations",
        "blog-5-subheadingone": "Kyoto, Japan",
        "blog-5-paraone":
          "Walk through bamboo forests, visit golden temples, and experience traditional tea ceremonies.",
        "blog-5-subheadingtwo": "Bangkok, Thailand",
        "blog-5-paratwo":
          "Buzzing with markets and street food, plus must-sees like Wat Arun and Grand Palace.",
        "blog-5-subheadingthree": "Delhi & Agra, India",
        "blog-5-parathree":
          "Marvel at the Taj Mahal and explore historic forts and colorful bazaars.",
        "blog-5-mustTryDishes":
          "Enjoy <b>sushi</b>, <b>pad kra pao</b>, <b>butter chicken</b>, and <b>dim sum</b>.",
        "blog-5-headingthree": "Week 2: Nature and Islands",
        "blog-5-subheadingfour": "Bali, Indonesia",
        "blog-5-parafour":
          "Chase waterfalls, relax on beaches, and experience spiritual healing in Ubud.",
        "blog-5-subheadingfive": "Hoi An, Vietnam",
        "blog-5-parafive":
          "A UNESCO heritage town with lantern-lit nights and peaceful river cruises.",
        "blog-5-subheadingsix": "Singapore",
        "blog-5-parasix":
          "A futuristic city-state with gardens, skyscrapers, and hawker centers.",
        "blog-5-foodKrabi":
          "Try <b>laksa</b> in Singapore, <b>bánh mì</b> in Vietnam, and <b>nasi goreng</b> in Bali.",
        "blog-5-practicalTips":
          "Best months: <b>October to March</b>. Watch out for monsoon seasons in Southeast Asia.",
        "blog-5-transportation":
          "Use regional low-cost airlines. In cities, use tuk-tuks, metros, or scooters.",
        "blog-5-booking":
          "Trazler simplifies your pan-Asia travel booking — flights, hotels, and transport all in one place.",
        "blog-5-faq-1-question": "Is Asia safe for solo travelers?",
        "blog-5-faq-1-answer":
          "Yes, especially in Japan, Thailand, and Vietnam. Stay in tourist areas.",
        "blog-5-faq-2-question": "What’s the best city in Asia for food?",
        "blog-5-faq-2-answer": "Bangkok and Singapore are foodie paradises.",
        "blog-5-faq-3-question": "Do I need vaccines for travel?",
        "blog-5-faq-3-answer":
          "Check CDC travel health notices for countries like India and Indonesia.",

        // New translations for Blog 6 (Oceania)
        "blog-6-intro":
          "Dreaming of <b>turquoise oceans, coral reefs, and vast landscapes</b>? Oceania is calling!",
        "blog-6-introtwo":
          "This guide takes you through <b>Australia, New Zealand, and the Pacific Islands</b> in just two weeks.",
        "blog-6-headingone": "Week 1: Wonders of Australia",
        "blog-6-headingtwo": "Must-visit destinations",
        "blog-6-subheadingone": "Sydney",
        "blog-6-paraone":
          "Climb the Harbour Bridge, visit Bondi Beach, and enjoy city culture at the Opera House.",
        "blog-6-subheadingtwo": "Great Barrier Reef",
        "blog-6-paratwo":
          "Snorkel or dive in the world's largest coral reef system — a bucket list experience.",
        "blog-6-subheadingthree": "Melbourne",
        "blog-6-parathree":
          "Explore the artsy lanes, coffee shops, and the Great Ocean Road.",
        "blog-6-mustTryDishes":
          "Sample <b>Aussie BBQ</b>, <b>lamingtons</b>, and <b>fresh seafood</b>.",
        "blog-6-headingthree": "Week 2: Kiwi Beauty and Island Escapes",
        "blog-6-subheadingfour": "Queenstown, New Zealand",
        "blog-6-parafour":
          "Adventure capital of the world — try bungee jumping or go hiking in the Remarkables.",
        "blog-6-subheadingfive": "Rotorua",
        "blog-6-parafive":
          "Famous for geysers, hot springs, and rich Maori culture experiences.",
        "blog-6-subheadingsix": "Fiji",
        "blog-6-parasix":
          "Unwind on palm-fringed beaches or explore coral reefs and waterfalls.",
        "blog-6-foodKrabi":
          "Enjoy <b>Hangi (NZ)</b>, <b>kokoda (Fiji ceviche)</b>, and <b>meat pies</b> in Australia.",
        "blog-6-practicalTips":
          "Visit from <b>November to March</b> for summer weather. Check island travel restrictions.",
        "blog-6-transportation":
          "Use budget airlines and ferries. In New Zealand, rent a camper van!",
        "blog-6-booking":
          "Plan your down-under adventure seamlessly with Trazler’s bundled travel deals.",
        "blog-6-faq-1-question": "Can I see Great Barrier Reef in 2–3 days?",
        "blog-6-faq-1-answer":
          "Yes! Cairns is the main hub for day trips and reef tours.",
        "blog-6-faq-2-question": "Do I need a visa for Oceania?",
        "blog-6-faq-2-answer":
          "Australia and New Zealand require eVisas for many nationalities.",
        "blog-6-faq-3-question": "Best time to visit Fiji?",
        "blog-6-faq-3-answer": "May to October — sunny and dry.",

        // Additional UI translations
        "search-button": "SEARCH",
        "about-author": "About the Author",
        "newsletter-signup": "Sign Up for Our Newsletters",
        "newsletter-description": "Get notified of the best deals from Trazler",
        "email-placeholder": "Enter your email",
        "subscribe-button": "SUBSCRIBE",
        "terms-checkbox":
          "By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.",
        "mission-statement":
          "Wow, you really like to read everything! You should appreciate to know that we're on a mission to enable travelers to book by themselves, in a single browsing session, their entire trip in a simple, smooth and worry-free way. Visit trazler.com to give it a shot if the posts above have inspired you.",
        copyright: "All Rights Reserved © 2024 Trazler",
        "meet-the-team": "Meet The Team",
        "privacy-policy": "Privacy Policy",
      },
    },
    fr: {
      translation: {
        // Existing translations
        hero: "Inspiration de voyage par de vrais",
        "hero-child": "Réservez mieux. Voyagez futé.",
        "latest-articles": "Derniers articles",
        "see-all": "Voir tout",
        "article-title-one":
          "Les 10 meilleures plages à voir absolument aux Seychelles",
        "article-description-one":
          "Quand on dit Seychelles, vous pensez immédiatement au soleil, aux plages et aux eaux cristallines. Mais ce paradis tropical a plus à offrir qu'il n'y paraît. De l'intérieur luxuriant à la faune unique, les Seychelles sont une destination qui offre quelque chose pour chacun.",
        by: "Par",
        "date-one": "9 juillet 2024",
        "article-title-two": "Que faire en Thaïlande ?",
        "article-description-two":
          "La Thaïlande est une destination touristique très populaire, et pourtant, il y a beaucoup de choses à découvrir. Que vous soyez un aventurier, un amoureux de la nature ou un passionné de culture, il y a quelque chose pour tous les goûts.",
        "date-two": "10 octobre 2024",
        "article-title-three":
          "Les 10 meilleures plages à voir absolument aux Seychelles",
        "article-description-three":
          "Quand on dit Seychelles, vous pensez immédiatement au soleil, aux plages et aux eaux cristallines. Mais ce paradis tropical a plus à offrir qu'il n'y paraît. De l'intérieur luxuriant à la faune unique, les Seychelles sont une destination qui offre quelque chose pour chacun.",
        "date-three": "9 juillet 2024",
        "article-title-four":
          "Les 10 meilleures plages à voir absolument aux Seychelles",
        "article-description-four":
          "Quand on dit Seychelles, vous pensez immédiatement au soleil, aux plages et aux eaux cristallines. Mais ce paradis tropical a plus à offrir qu'il n'y paraît. De l'intérieur luxuriant à la faune unique, les Seychelles sont une destination qui offre quelque chose pour chacun.",
        "date-four": "8 octobre 2024",
        category: "Catégories",
        africa: "Afrique",
        "north-america": "Amérique du Nord",
        "south-america": "Amérique du Sud",
        europe: "Europe",
        asia: "Asie",
        oceania: "Océanie",
        research: "Rechercher",
        "search-placeholder": "Rechercher un article",
        "side-main": "Recevez les meilleures offres de Trazler",
        email: "Entrez votre email",
        subscribe: "S'ABONNER",
        check:
          "En cochant cette case, vous confirmez avoir lu et accepté nos conditions d'utilisation concernant le stockage des données soumises via ce formulaire.",
        notify: "Recevez les meilleures offres de Trazler",
        "blog-card-1-title":
          "Itinéraire pour 2 semaines dans le sud de la Thaïlande",
        "blog-card-1-description":
          "Planifiez un voyage dans le sud de la Thaïlande ?",
        "blog-card-1-author": "Thomas Chabrieres",
        "blog-card-1-date": "26 novembre 2024",
        "blog-card-2-title":
          "Road Trip en Afrique du Sud : Les 10 étapes incontournables",
        "blog-card-2-description":
          "L'Afrique du Sud et le Mozambique sont des destinations idéales pour un road trip en Afrique",
        "blog-card-2-author": "Eva Jouhault",
        "blog-card-2-date": "19 novembre 2024",
        "blog-card-3-title":
          "Le guide complet pour un itinéraire de 15 jours au Pérou",
        "blog-card-3-description":
          "Avez-vous entendu cette chanson thème iconique des Mystérieuses Cités d'Or, le",
        "blog-card-3-author": "Leonie Malleville",
        "blog-card-3-date": "12 novembre 2024",
        "blog-card-4-title":
          "4 jours en Irlande : Les attractions incontournables",
        "blog-card-4-description":
          "L'Irlande, une terre de légendes, de paysages à couper le souffle et de cultures vibrantes,",
        "blog-card-4-author": "Coline Levins",
        "blog-card-4-date": "5 novembre 2024",
        "load-more": "CHARGER PLUS",
        "view-posts": "voir les articles",
        "popular-categories": "Catégories Populaires",
        "blog-card-5-title":
          "Itinéraire ultime en Asie : Des temples aux escapades tropicales",
        "blog-card-5-description":
          "Explorez des temples anciens, des villes dynamiques et des paradis insulaires à travers l’Asie.",
        "blog-card-5-author": "Nina Takashi",
        "blog-card-5-date": "18 octobre 2024",
        "blog-card-6-title":
          "Explorez l’Océanie : Australie, Nouvelle-Zélande et îles",
        "blog-card-6-description":
          "De la Grande Barrière de Corail aux plages de Fidji, cet itinéraire a tout pour plaire.",
        "blog-card-6-author": "Liam McConnell",
        "blog-card-6-date": "25 octobre 2024",

        // New translations for Blog 1 (Thailand)
        "blog-1-intro":
          "Planifiez un <b>voyage dans le sud de la Thaïlande</b> ? Vous êtes au bon endroit ! Voici un guide complet pour vous assurer de ne pas manquer les <b>incontournables, les destinations paradisiaques et les plats locaux délicieux.</b>",
        "blog-1-introtwo":
          "Cet itinéraire personnalisé vous aidera à <b>découvrir le meilleur du sud de la Thaïlande.</b> De plus, nous partagerons quelques conseils pratiques pour organiser votre voyage sans effort.",
        "blog-1-headingone":
          "Semaine 1 : Explorer les îles et les plages paradisiaques",
        "blog-1-headingtwo": "Destinations incontournables",
        "blog-1-subheadingone": "Phuket",
        "blog-1-paraone":
          "Phuket est la plus grande île de Thaïlande, connue pour ses plages magnifiques, sa vie nocturne animée et ses temples historiques comme Wat Chalong et le Grand Bouddha.",
        "blog-1-subheadingtwo": "Koh Phi Phi",
        "blog-1-paratwo":
          "Koh Phi Phi est célèbre pour ses falaises calcaires, ses eaux turquoise et la baie de Maya, rendue célèbre par le film 'The Beach'.",
        "blog-1-subheadingthree": "Baie de Phang Nga",
        "blog-1-parathree":
          "La baie de Phang Nga, également connue sous le nom de l'île James Bond, offre des formations calcaires spectaculaires et des eaux émeraude calmes.",
        "blog-1-mustTryDishes":
          "Goûtez au <b>Tom Yum Goong</b>, au <b>Pad Thai</b> et au <b>Khanom Jeen</b> — ainsi qu'aux poissons grillés en bord de plage et aux fruits de mer à la tamarin.",
        "blog-1-headingthree":
          "Semaine 2 : Nature, culture et saveurs du grand sud",
        "blog-1-subheadingfour": "Krabi",
        "blog-1-parafour":
          "Krabi est connue pour ses falaises impressionnantes de Railay et le temple de la Grotte du Tigre, un défi spirituel avec 1 200 marches.",
        "blog-1-subheadingfive": "Koh Lanta",
        "blog-1-parafive":
          "Cette île paisible est parfaite pour des journées tranquilles à la plage, la plongée avec tuba et savourer un curry de crabe.",
        "blog-1-subheadingsix": "Parc national de Khao Sok",
        "blog-1-parasix":
          "Explorez des randonnées dans la jungle et le magique lac Cheow Lan dans l'une des plus anciennes forêts tropicales de Thaïlande.",
        "blog-1-foodKrabi":
          "Goûtez au <b>Gaeng Som Pla</b>, aux <b>fruits de mer grillés</b>, au <b>roti</b> et aux fruits tropicaux comme le <b>durian</b> et le <b>ramboutan</b>.",
        "blog-1-practicalTips":
          "Visitez de <b>novembre à avril</b> pour la saison sèche. Évitez <b>mai à octobre</b> à cause des moussons.",
        "blog-1-transportation":
          "Utilisez des ferries, des bateaux à longue queue, des minivans ou des vols intérieurs. Les scooters sont populaires localement.",
        "blog-1-booking":
          "Réservez tout votre voyage avec <b>Trazler</b> — vols, hôtels, transferts et assistance 24/7.",
        "blog-1-faq-1-question":
          "Quelle est la meilleure période pour visiter le sud de la Thaïlande ?",
        "blog-1-faq-1-answer":
          "De novembre à avril — ensoleillé et parfait pour les activités aquatiques.",
        "blog-1-faq-2-question": "Comment se déplacer entre les îles ?",
        "blog-1-faq-2-answer":
          "Utilisez des ferries et des bateaux à longue queue. Sur terre : scooters et bus.",
        "blog-1-faq-3-question":
          "Quelles sont les principales attractions à Koh Phi Phi ?",
        "blog-1-faq-3-answer":
          "La baie de Maya, la plongée avec tuba, les excursions en bateau et les fêtes sur la plage.",

        // New translations for Blog 2 (Africa)
        "blog-2-intro":
          "Prêt à explorer <b>la beauté brute et la culture vibrante de l'Afrique</b> ? Des safaris à l'architecture ancienne, ce guide couvre tout.",
        "blog-2-introtwo":
          "Découvrez la faune, les monuments historiques et les cuisines traditionnelles à travers l'Afrique du Nord, de l'Est et du Sud.",
        "blog-2-headingone": "Semaine 1 : Aventures de safari",
        "blog-2-headingtwo": "Destinations incontournables",
        "blog-2-subheadingone": "Serengeti, Tanzanie",
        "blog-2-paraone":
          "Assistez à la Grande Migration, un événement naturel mondialement connu rempli de gnous, zèbres et grands félins.",
        "blog-2-subheadingtwo": "Maasai Mara, Kenya",
        "blog-2-paratwo":
          "Un lieu privilégié pour observer des lions et visiter des villages Maasai.",
        "blog-2-subheadingthree": "Parc Kruger, Afrique du Sud",
        "blog-2-parathree":
          "La principale réserve de faune d'Afrique du Sud, offrant des lodges de luxe et des visites guidées.",
        "blog-2-mustTryDishes":
          "Goûtez au <b>Nyama Choma</b>, au <b>Bunny Chow</b> et à l'<b>Injera</b> avec des ragoûts épicés.",
        "blog-2-headingthree": "Semaine 2 : Culture et côtes",
        "blog-2-subheadingfour": "Zanzibar",
        "blog-2-parafour":
          "Explorez Stone Town, les marchés aux épices et les plages de sable blanc.",
        "blog-2-subheadingfive": "Le Cap",
        "blog-2-parafive":
          "Grimpez la montagne de la Table, visitez Robben Island et détendez-vous à Camps Bay.",
        "blog-2-subheadingsix": "Marrakech",
        "blog-2-parasix":
          "Visitez les souks, les palais et les jardins de cette ville marocaine dynamique.",
        "blog-2-foodKrabi":
          "Savourez les <b>tagines marocains</b>, les <b>currys de fruits de mer de Zanzibar</b> et le <b>braai sud-africain</b>.",
        "blog-2-practicalTips":
          "Meilleure période pour voyager : <b>juin à octobre</b>. Respectez les coutumes locales et les règles de la faune.",
        "blog-2-transportation":
          "Utilisez des 4x4 pour les safaris. Les vols intérieurs relient les grandes villes.",
        "blog-2-booking":
          "Utilisez Trazler pour planifier facilement des voyages multi-pays en Afrique avec assistance.",
        "blog-2-faq-1-question":
          "Quelle est la meilleure destination de safari ?",
        "blog-2-faq-1-answer":
          "Serengeti et Maasai Mara pour la faune ; Kruger pour l'accessibilité.",
        "blog-2-faq-2-question": "Puis-je combiner safari et plage ?",
        "blog-2-faq-2-answer":
          "Oui ! Safari + Zanzibar ou Le Cap est une combinaison populaire.",
        "blog-2-faq-3-question": "L'Afrique est-elle sûre pour voyager ?",
        "blog-2-faq-3-answer":
          "Tenez-vous aux itinéraires touristiques, utilisez des guides et évitez les zones à risque.",

        // New translations for Blog 3 (South America)
        "blog-3-intro":
          "Planifiez votre aventure de rêve à travers <b>l'Amérique du Sud</b> ? Laissez-nous vous guider à travers les meilleures destinations et joyaux locaux.",
        "blog-3-introtwo":
          "Des sommets des Andes à la jungle amazonienne et aux villes animées — tout y est !",
        "blog-3-headingone": "Semaine 1 : Montagnes et culture",
        "blog-3-headingtwo": "Destinations incontournables",
        "blog-3-subheadingone": "Machu Picchu, Pérou",
        "blog-3-paraone":
          "Randonnez sur le chemin de l'Inca ou prenez le train jusqu'à cette ville antique emblématique dans les nuages.",
        "blog-3-subheadingtwo": "La Paz, Bolivie",
        "blog-3-paratwo":
          "Explorez la capitale la plus haute du monde et montez dans le célèbre Teleférico.",
        "blog-3-subheadingthree": "Quito, Équateur",
        "blog-3-parathree":
          "Visitez la ligne de l'équateur, l'architecture coloniale et les marchés andins.",
        "blog-3-mustTryDishes":
          "Goûtez au <b>ceviche</b>, aux <b>empanadas</b> et aux <b>arepas</b> dans toute la région.",
        "blog-3-headingthree": "Semaine 2 : Plages et forêts tropicales",
        "blog-3-subheadingfour": "Rio de Janeiro",
        "blog-3-parafour":
          "Détendez-vous sur la plage de Copacabana ou grimpez jusqu'au Christ Rédempteur.",
        "blog-3-subheadingfive": "Bassin amazonien",
        "blog-3-parafive":
          "Rejoignez des éco-lodges et des excursions en rivière au Brésil ou au Pérou pour une véritable aventure dans la jungle.",
        "blog-3-subheadingsix": "Buenos Aires",
        "blog-3-parasix":
          "Découvrez le tango, l'ambiance européenne et la culture du steak dans la capitale argentine.",
        "blog-3-foodKrabi":
          "Savourez le <b>steak chimichurri</b>, la <b>feijoada brésilienne</b> et le <b>poisson amazonien</b>.",
        "blog-3-practicalTips":
          "Meilleures saisons : <b>avril à octobre</b>. Apportez des vêtements en couches pour les variations climatiques.",
        "blog-3-transportation":
          "Utilisez des vols régionaux, des bus ou des trajets en bateau à travers l'Amazonie et les Andes.",
        "blog-3-booking":
          "Trazler facilite la réservation d'itinéraires multi-étapes en Amérique du Sud.",
        "blog-3-faq-1-question": "Ai-je besoin d'un visa ?",
        "blog-3-faq-1-answer":
          "Vérifiez les exigences d'entrée de votre pays pour chaque nation.",
        "blog-3-faq-2-question": "L'Amazonie est-elle sûre ?",
        "blog-3-faq-2-answer":
          "Oui, avec un guide. Choisissez des éco-lodges et des circuits réputés.",
        "blog-3-faq-3-question": "Meilleure période pour Machu Picchu ?",
        "blog-3-faq-3-answer": "De mai à octobre, sec et clair.",

        // New translations for Blog 4 (Europe)
        "blog-4-intro":
          "Envie de tomber amoureux de <b>l'Europe</b> ? Que vous soyez à la recherche de châteaux, de café ou de littoral, nous sommes là pour vous.",
        "blog-4-introtwo":
          "Ce guide vous aide à découvrir 3 à 4 pays européens emblématiques en 2 semaines.",
        "blog-4-headingone":
          "Semaine 1 : Les classiques de l'Europe occidentale",
        "blog-4-headingtwo": "Destinations incontournables",
        "blog-4-subheadingone": "Paris, France",
        "blog-4-paraone":
          "Tour Eiffel, Louvre, croisière sur la Seine — ça suffit !",
        "blog-4-subheadingtwo": "Amsterdam, Pays-Bas",
        "blog-4-paratwo":
          "Parcourez les canaux à vélo, visitez le musée Van Gogh et savourez des stroopwafels.",
        "blog-4-subheadingthree": "Bruxelles, Belgique",
        "blog-4-parathree":
          "Goûtez au chocolat, aux gaufres et admirez l'architecture de la Grand-Place.",
        "blog-4-mustTryDishes":
          "Savourez les <b>pâtisseries françaises</b>, le <b>fromage néerlandais</b> et les <b>frites belges avec de la mayonnaise</b>.",
        "blog-4-headingthree": "Semaine 2 : Sud et Est",
        "blog-4-subheadingfour": "Rome, Italie",
        "blog-4-parafour":
          "Colisée, Vatican, pizza — la capitale italienne offre tout.",
        "blog-4-subheadingfive": "Dubrovnik, Croatie",
        "blog-4-parafive":
          "Promenez-vous sur les remparts médiévaux et nagez dans l'Adriatique.",
        "blog-4-subheadingsix": "Prague, République tchèque",
        "blog-4-parasix":
          "Abordable, praticable à pied et charmant — avec une architecture gothique époustouflante.",
        "blog-4-foodKrabi":
          "Essayez la <b>glace</b> à Rome, la <b>pasticada</b> à Dubrovnik et le <b>goulasch</b> à Prague.",
        "blog-4-practicalTips":
          "Voyagez au <b>printemps ou à l'automne</b> pour moins de foule. Utilisez les trains ou les compagnies aériennes à bas prix.",
        "blog-4-transportation":
          "Les pass Eurail ou les vols courts relient la plupart des hubs européens.",
        "blog-4-booking":
          "Trazler vous permet de personnaliser des itinéraires de ville en ville avec hébergements et activités.",
        "blog-4-faq-1-question": "Meilleurs pays pour les débutants ?",
        "blog-4-faq-1-answer":
          "La France, l'Italie et les Pays-Bas sont d'excellents choix d'introduction.",
        "blog-4-faq-2-question": "Ai-je besoin d'un visa pour l'Europe ?",
        "blog-4-faq-2-answer":
          "Vérifiez les règles de la zone Schengen pour votre passeport.",
        "blog-4-faq-3-question":
          "Quelle est la meilleure période pour voyager en Europe ?",
        "blog-4-faq-3-answer":
          "Mai-juin ou septembre — beau temps, moins de foule.",

        // New translations for Blog 5 (Asia)
        "blog-5-intro":
          "L'Asie offre des <b>voyages spirituels, des temples anciens</b> et des <b>mégapoles vibrantes de vie</b>. Partons à la découverte de tout cela.",
        "blog-5-introtwo":
          "Découvrez des destinations emblématiques à travers <b>le Japon, l'Inde et l'Asie du Sud-Est</b> avec notre itinéraire de 2 semaines soigneusement conçu.",
        "blog-5-headingone": "Semaine 1 : Culture et temples",
        "blog-5-headingtwo": "Destinations incontournables",
        "blog-5-subheadingone": "Kyoto, Japon",
        "blog-5-paraone":
          "Parcourez les forêts de bambous, visitez les temples dorés et vivez des cérémonies de thé traditionnelles.",
        "blog-5-subheadingtwo": "Bangkok, Thaïlande",
        "blog-5-paratwo":
          "Bourdonnant de marchés et de street food, avec des incontournables comme Wat Arun et le Grand Palais.",
        "blog-5-subheadingthree": "Delhi et Agra, Inde",
        "blog-5-parathree":
          "Émerveillez-vous devant le Taj Mahal et explorez les forts historiques et les bazars colorés.",
        "blog-5-mustTryDishes":
          "Savourez les <b>sushis</b>, le <b>pad kra pao</b>, le <b>poulet au beurre</b> et les <b>dim sum</b>.",
        "blog-5-headingthree": "Semaine 2 : Nature et îles",
        "blog-5-subheadingfour": "Bali, Indonésie",
        "blog-5-parafour":
          "Chassez les cascades, détendez-vous sur les plages et vivez une guérison spirituelle à Ubud.",
        "blog-5-subheadingfive": "Hoi An, Vietnam",
        "blog-5-parafive":
          "Une ville classée au patrimoine de l'UNESCO avec des nuits illuminées par des lanternes et des croisières fluviales paisibles.",
        "blog-5-subheadingsix": "Singapour",
        "blog-5-parasix":
          "Une ville-État futuriste avec des jardins, des gratte-ciel et des centres de restauration.",
        "blog-5-foodKrabi":
          "Essayez le <b>laksa</b> à Singapour, le <b>bánh mì</b> au Vietnam et le <b>nasi goreng</b> à Bali.",
        "blog-5-practicalTips":
          "Meilleurs mois : <b>octobre à mars</b>. Attention aux saisons de mousson en Asie du Sud-Est.",
        "blog-5-transportation":
          "Utilisez des compagnies aériennes régionales à bas prix. En ville, utilisez des tuk-tuks, des métros ou des scooters.",
        "blog-5-booking":
          "Trazler simplifie la réservation de votre voyage pan-asiatique — vols, hôtels et transports en un seul endroit.",
        "blog-5-faq-1-question":
          "L'Asie est-elle sûre pour les voyageurs en solo ?",
        "blog-5-faq-1-answer":
          "Oui, en particulier au Japon, en Thaïlande et au Vietnam. Restez dans les zones touristiques.",
        "blog-5-faq-2-question":
          "Quelle est la meilleure ville en Asie pour la nourriture ?",
        "blog-5-faq-2-answer":
          "Bangkok et Singapour sont des paradis pour les gourmands.",
        "blog-5-faq-3-question": "Ai-je besoin de vaccins pour voyager ?",
        "blog-5-faq-3-answer":
          "Consultez les avis de santé de voyage du CDC pour des pays comme l'Inde et l'Indonésie.",

        // New translations for Blog 6 (Oceania)
        "blog-6-intro":
          "Rêvez-vous d'<b>océans turquoise, de récifs coralliens et de vastes paysages</b> ? L'Océanie vous appelle !",
        "blog-6-introtwo":
          "Ce guide vous emmène à travers <b>l'Australie, la Nouvelle-Zélande et les îles du Pacifique</b> en seulement deux semaines.",
        "blog-6-headingone": "Semaine 1 : Merveilles de l'Australie",
        "blog-6-headingtwo": "Destinations incontournables",
        "blog-6-subheadingone": "Sydney",
        "blog-6-paraone":
          "Grimpez le Harbour Bridge, visitez la plage de Bondi et profitez de la culture urbaine à l'Opéra.",
        "blog-6-subheadingtwo": "Grande Barrière de Corail",
        "blog-6-paratwo":
          "Plongez ou faites du snorkeling dans le plus grand système de récifs coralliens au monde — une expérience à ne pas manquer.",
        "blog-6-subheadingthree": "Melbourne",
        "blog-6-parathree":
          "Explorez les ruelles artistiques, les cafés et la Great Ocean Road.",
        "blog-6-mustTryDishes":
          "Goûtez au <b>BBQ australien</b>, aux <b>lamingtons</b> et aux <b>fruits de mer frais</b>.",
        "blog-6-headingthree":
          "Semaine 2 : Beauté néo-zélandaise et escapades insulaires",
        "blog-6-subheadingfour": "Queenstown, Nouvelle-Zélande",
        "blog-6-parafour":
          "Capitale mondiale de l'aventure — essayez le saut à l'élastique ou partez en randonnée dans les Remarkables.",
        "blog-6-subheadingfive": "Rotorua",
        "blog-6-parafive":
          "Célèbre pour ses geysers, ses sources chaudes et ses expériences culturelles maories riches.",
        "blog-6-subheadingsix": "Fidji",
        "blog-6-parasix":
          "Détendez-vous sur des plages bordées de palmiers ou explorez les récifs coralliens et les cascades.",
        "blog-6-foodKrabi":
          "Savourez le <b>Hangi (NZ)</b>, le <b>kokoda (ceviche fidjien)</b> et les <b>tourtes à la viande</b> en Australie.",
        "blog-6-practicalTips":
          "Visitez de <b>novembre à mars</b> pour le temps estival. Vérifiez les restrictions de voyage insulaire.",
        "blog-6-transportation":
          "Utilisez des compagnies aériennes à bas prix et des ferries. En Nouvelle-Zélande, louez un camping-car !",
        "blog-6-booking":
          "Planifiez votre aventure dans l'hémisphère sud sans effort avec les offres groupées de voyage de Trazler.",
        "blog-6-faq-1-question":
          "Puis-je voir la Grande Barrière de Corail en 2 à 3 jours ?",
        "blog-6-faq-1-answer":
          "Oui ! Cairns est le principal hub pour les excursions d'une journée et les visites des récifs.",
        "blog-6-faq-2-question": "Ai-je besoin d'un visa pour l'Océanie ?",
        "blog-6-faq-2-answer":
          "L'Australie et la Nouvelle-Zélande exigent des eVisas pour de nombreuses nationalités.",
        "blog-6-faq-3-question": "Meilleure période pour visiter Fidji ?",
        "blog-6-faq-3-answer": "De mai à octobre — ensoleillé et sec.",

        // Additional UI translations
        "search-button": "RECHERCHER",
        "about-author": "À propos de l'auteur",
        "newsletter-signup": "Inscrivez-vous à nos newsletters",
        "newsletter-description": "Recevez les meilleures offres de Trazler",
        "email-placeholder": "Entrez votre email",
        "subscribe-button": "S'ABONNER",
        "terms-checkbox":
          "En cochant cette case, vous confirmez avoir lu et accepté nos conditions d'utilisation concernant le stockage des données soumises via ce formulaire.",
        "mission-statement":
          "Wow, vous aimez vraiment tout lire ! Vous apprécierez de savoir que nous avons pour mission de permettre aux voyageurs de réserver eux-mêmes, en une seule session de navigation, leur voyage entier de manière simple, fluide et sans souci. Visitez trazler.com pour essayer si les articles ci-dessus vous ont inspiré.",
        copyright: "Tous droits réservés © 2024 Trazler",
        "meet-the-team": "Rencontrez l'équipe",
        "privacy-policy": "Politique de confidentialité",
      },
    },
  },
});

export default i18n;
