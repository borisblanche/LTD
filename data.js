// data.js
const categories = [
    {
        id: 1,
        name: "patrimoine",
        titleImage: "assets/pic-patrimoine_resultat.webp",
        // image: "assets/imitations-matieres/bois-jeunechene.avif",
        details: "Details about Category 1",
        link: "#patrimoine",
        projects:
        [
            {
                id: 101,
                name: "Chantier Fontainebleau",
                images: [
                    { index: 0, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 5_resultat.webp" },
                    ],
                description: "Restitution d'un décor d'époque dans le salon d'une maison de maître à Fontainebleau (77920 - Seine et marne). Fabrication et application d'une peinture à la colle de peau de lapin sur les corniches et les volets intérieurs. Travail réalisé avec Le Décor Français.",
                link: "project1_1.html"
            },
            {
                id: 102,
                name: "Eglise de campagne",
                images: [
                    { index: 0, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 6_resultat.webp" },
                    ],
                description: "Reprise chromatique des décors peints de l'église Saint-Pantaléon à Campagne (40090 - Landes).Reprise des teintes et des lacunes, pour une lecture plus harmonieuse des éléments décoratifs du chœur. Travail réalisé pour l' Atelier Dufon.",
                link: "project1_2.html"
            },
            {
                id: 103,
                name: "Notre Dame de Bon port",
                images: [
                    { index: 0, src: "assets/Restauration/2019-chantier-Notre-dame-de-bon-port/NotreDamedeBonPort-Nantes-photo1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2019-chantier-Notre-dame-de-bon-port/NotreDamedeBonPort-Nantes-photo2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2019-chantier-Notre-dame-de-bon-port/NotreDamedeBonPort-Nantes-photo3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2019-chantier-Notre-dame-de-bon-port/NotreDamedeBonPort-Nantes-photo4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2019-chantier-Notre-dame-de-bon-port/NotreDamedeBonPort-Nantes-photo5_resultat.webp" },
                    ],
                description: "Étude et analyse préalable à la restauration du dôme de l'église Notre-Dame-de-Bon-Port à Nantes (44000 - Loire Atlantique). Comparaison et analyse des différents tests des protocoles d’interventions pour nettoyage et consolidation des décors peints du dôme.. Travail réalisé pour Arthema.",
                link: "project1_2.html"
            },
            {
                id: 104,
                name: "Chantier d'Orgeval-1",
                images: [
                    { index: 0, src: "assets/Restauration/2019-chantier-Orgeval-1/Chantier Orgeval 1 - Photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2019-chantier-Orgeval-1/Chantier Orgeval 1 - Photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2019-chantier-Orgeval-1/Chantier Orgeval 1 - Photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2019-chantier-Orgeval-1/Chantier Orgeval 1 - Photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2019-chantier-Orgeval-1/Chantier Orgeval 1 - Photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2019-chantier-Orgeval-1/Chantier Orgeval 1 - Photo 6_resultat.webp" },
                    { index: 6, src: "assets/Restauration/2019-chantier-Orgeval-1/Chantier Orgeval 1 - Photo 7_resultat.webp" },
                    { index: 7, src: "assets/Restauration/2019-chantier-Orgeval-1/Chantier Orgeval 1 - Photo 8_resultat.webp" },
                    { index: 7, src: "assets/Restauration/2019-chantier-Orgeval-1/IMG-20191114-WA0016 (1)_resultat.webp" },
                    ],
                description: "Intervention pour participer au chantier de restauration et rénovation du salon de musique d’un château d’Orgeval. Reprise des lacunes à la gouache et remise en teinte générale du plafond peint. Réalisation d’une patine cordée sur les murs. Chantier réalisé avec Sophie de Sagazan.",
                link: "project1_2.html"
            },
            {
                id: 105,
                name: "Repise de marbre",
                images: [
                    { index: 0, src: "assets/Restauration/2019-reprise-de-marbre/Reprise de marbre - Photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2019-reprise-de-marbre/Reprise de marbre - Photo 1_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2019-reprise-de-marbre/Reprise de marbre - Photo 1_resultat.webp" },
                    ],
                description: "Reprise à l’huile d’une rayure sur le socle d’une sculpture en imitation de marbre.",
                link: "project1_2.html"
            },
            {
                id: 106,
                name: "Eglise de Chepniers",
                images: [
                    { index: 0, src: "assets/Restauration/2020-eglise-de-chepniers/Eglise de Chepniers - Photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2020-eglise-de-chepniers/Eglise de Chepniers - Photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2020-eglise-de-chepniers/Eglise de Chepniers - Photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2020-eglise-de-chepniers/Eglise de Chepniers - Photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2020-eglise-de-chepniers/Eglise de Chepniers - Photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2020-eglise-de-chepniers/Eglise de Chepniers - Photo 6_resultat.webp" },
                    ],
                description: "Nettoyage à sec et consolidation des enduits soufflés et écailles de peintures des décors peints de l’église Saint-Etienne de Chepniers (17210 - Charente Maritime). Travail avec Arthema Restauration.",
                link: "project1_2.html"
            },
            {
                id: 107,
                name: "Alcôve La Vieux Ville",
                images: [
                    { index: 0, src: "assets/Restauration/2020-la-vieux-ville/La Vieux-ville photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2020-la-vieux-ville/La Vieux-ville photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2020-la-vieux-ville/La Vieux-ville photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2020-la-vieux-ville/La Vieux-ville photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2020-la-vieux-ville/La Vieux-ville photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2020-la-vieux-ville/La Vieux-ville photo 6_resultat.webp" },
                    { index: 6, src: "assets/Restauration/2020-la-vieux-ville/La Vieux-ville photo 7_resultat.webp" },
                    { index: 7, src: "assets/Restauration/2020-la-vieux-ville/photo 8_resultat.webp" },
                    { index: 8, src: "assets/Restauration/2020-la-vieux-ville/Screenshot_20231029_200350_com.android.gallery3d_resultat.webp" },
                    ],
                description: "Dégagement et consolidation des enduits soufflés. Reprises des lacunes pour une harmonisation de l’ensemble. Travail à l’aquarelle et à la colle de peau de lapin. Mise en peinture des solives et entrevous du plafond à la peinture à l’ocre.",
                link: "project1_2.html"
            },
            {
                id: 108,
                name: "Virazeil",
                images: [
                    { index: 0, src: "assets/Restauration/2020-virazeil/Escalier Virazeil photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2020-virazeil/Escalier Virazeil photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2020-virazeil/Escalier Virazeil photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2020-virazeil/Escalier Virazeil photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2020-virazeil/Escalier Virazeil photo 5_resultat.webp" },
                    ],
                description: "Rénovation d’une cage d’escalier dans une maison de maître proche Marmande (47200 -Lot et Garonne). Reprise des creux et fissures à la chaux. Fabrication et application d’un badigeon de chaux teinté. Filage d’un appareillage.",
                link: "project1_2.html"
            },
            {
                id: 109,
                name: "Fontaine Burdigala",
                images: [
                    { index: 0, src: "assets/Restauration/2021-fontaine-burdigala/Fontaine Burdigala photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2021-fontaine-burdigala/Fontaine Burdigala photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2021-fontaine-burdigala/Fontaine Burdigala photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2021-fontaine-burdigala/Fontaine Burdigala photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2021-fontaine-burdigala/Fontaine Burdigala photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2021-fontaine-burdigala/Fontaine Burdigala photo 6_resultat.webp" },
                    ],
                description: "Fabrication et application d’une peinture de patine pour créer l’effet d’un léger vieillissementsur les ornements de la Fontaine Burdigala suite à sa rénovation. Bordeaux (33000 - Gironde). Travail avec Le Décor Français",
                link: "project1_2.html"
            },
            {
                id: 110,
                name: "Les Briottières",
                images: [
                    { index: 0, src: "assets/Restauration/2021-les-briottieres/chateau des briottieres photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2021-les-briottieres/Imitation marbre photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2021-les-briottieres/salle à manger chateau briottières photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2021-les-briottieres/escalier briottières photo 4_resultat.webp" },
                    ],
                description: "Chantier de restitution des lacunes de marbres de la cage d’escalier, ainsi que des peintures et soubassements de la salle à manger du Château des Briottières (Maine-et-Loire). Travail avec Le Décor Français.",
                link: "project1_2.html"
            },
            {
                id: 111,
                name: "Mairie de Diois",
                images: [
                    { index: 0, src: "assets/Restauration/2022-mairie-de-diois/Mairie de Diois photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2022-mairie-de-diois/Mairie de Diois photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2022-mairie-de-diois/Mairie de Diois photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2022-mairie-de-diois/Mairie de Diois photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2022-mairie-de-diois/Mairie de Diois photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2022-mairie-de-diois/Mairie de Diois photo 6_resultat.webp" },
                    { index: 6, src: "assets/Restauration/2022-mairie-de-diois/Mairie de Diois photo 7_resultat.webp" },
                    ],
                description: "Restauration Mairie Châtillon en Diois. Nettoyage à sec et à l’eau des fresques de l’escalier, dégagement des derniers décors pour retrouver la campagne précédente, recherche de teintes pour reprise à tono sotto afin degarder la lecture de l’intervention de restauration. Travail avec Atelier Sud France.",
                link: "project1_2.html"
            },
            {
                id: 112,
                name: "Eglise Saint-Médard d'Eyrans",
                images: [
                    { index: 0, src: "assets/Restauration/2023-eglise-saint-medard/église st médard photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2023-eglise-saint-medard/église st médard photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2023-eglise-saint-medard/Phase 1a_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2023-eglise-saint-medard/Phase 1b_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2023-eglise-saint-medard/Phase 2a_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2023-eglise-saint-medard/Phase 2b_resultat.webp" },
                    { index: 6, src: "assets/Restauration/2023-eglise-saint-medard/Phase 3a_resultat.webp" },
                    { index: 7, src: "assets/Restauration/2023-eglise-saint-medard/Phase 3b_resultat.webp" },
                    { index: 8, src: "assets/Restauration/2023-eglise-saint-medard/Phase 4a_resultat.webp" },
                    { index: 9, src: "assets/Restauration/2023-eglise-saint-medard/Phase 4b_resultat.webp" },
                    ],
                description: "Dégagements et reprises des enduits de chaux abîmés du choeur et d’une chapelle del’église de la commune de Saint-Médard-d’Eyrans (33650 - Gironde). Fabrication et application des enduits de chaux. Réintégration des décors et appareillages disparus.Travail avec Atelier la Margotterie.",
                link: "project1_2.html"
            },
            {
                id: 113,
                name: "Orgue Angoulème",
                images: [
                    { index: 0, src: "assets/Restauration/2023-orgue-angouleme/Orgue Angoulème photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2023-orgue-angouleme/Orgue Angoulème photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2023-orgue-angouleme/Orgue Angoulème photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2023-orgue-angouleme/Orgue Angoulème photo 4_resultat.webp" },
                    ],
                description: "Nettoyage et décapage des ornements de l’orgue de l’église Saint-Jacques de l’Houmeauavant , reprise de l’imitation de bois et vernis. Travail avec Le Décor Français.",
                link: "project1_2.html"
            },
            {
                id: 114,
                name: "Chapelle La Prade",
                images: [
                    { index: 0, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 6_resultat.webp" },
                    { index: 6, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 7_resultat.webp" },
                    { index: 7, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 8_resultat.webp" },
                    { index: 8, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 9_resultat.webp" },
                    { index: 9, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 10_resultat.webp" },
                    { index: 10, src: "assets/Restauration/2024-chapelle-la-prade/Chapelle la Prade photo 11_resultat.webp" },
                    ],
                description: "Nettoyage et reprise des lacunes des décors ornementaux des murs d’une chapelle privée à la Prade (33650 - Gironde). Travail à l’aquarelle et à la gouache. Travail réalisé avec Atelier la Margotterie.",
                link: "project1_2.html"
            },
            {
                id: 115,
                name: "Cos d'Estournel",
                images: [
                    { index: 0, src: "assets/Restauration/2024-cos-d-estournel/Cos d'Estournel photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2024-cos-d-estournel/Cos d'Estournel photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2024-cos-d-estournel/Cos d'Estournel photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2024-cos-d-estournel/Cos d'Estournel photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2024-cos-d-estournel/Cos d'Estournel photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2024-cos-d-estournel/Cos d'Estournel photo 6_resultat.webp" },
                    { index: 6, src: "assets/Restauration/2024-cos-d-estournel/Cos d'Estournel photo 7_resultat.webp" },
                    { index: 7, src: "assets/Restauration/2024-cos-d-estournel/Cos d'Estournel photo 8_resultat.webp" },
                    ],
                description: "Restauration des lacunes d’un papier peint dans la salle à manger du château de Cos d’Estournel. Travail réalisé avec Atelier la Margotterie.",
                link: "project1_2.html"
            },
            {
                id: 116,
                name: "Rejointoiement pierres",
                images: [
                    { index: 0, src: "assets/Restauration/2024-rejointement/Rejoitoiement photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2024-rejointement/Rejoitoiement photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2024-rejointement/Rejoitoiement photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2024-rejointement/Rejoitoiement photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2024-rejointement/Rejoitoiement photo 5_resultat.webp" },
                    ],
                description: "Dégagement des anciens joints abîmés. Reprise de nouveaux joints à la chaux. Travail réalisé avec R’Arts peinture.",
                link: "project1_2.html"
            },
            {
                id: 117,
                name: "Restauration Marbre",
                images: [
                    
                    { index: 0, src: "assets/Restauration/2024-restauration-marbre/Restitution marbre photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 1 (2)_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 2_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 3_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 4_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 5_resultat.webp" },
                    { index: 6, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 6_resultat.webp" },
                    { index: 7, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 7_resultat.webp" },
                    { index: 8, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 8_resultat.webp" },
                    { index: 9, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 9_resultat.webp" },
                    { index: 10, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 10_resultat.webp" },
                    { index: 11, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 11_resultat.webp" },
                    { index: 12, src: "assets/Restauration/2024-restauration-marbre/Restauration marbre photo 12_resultat.webp" },
                    ],
                description: "Dégagement des enduits couvrants les imitations de marbres retrouvées lors du retrait d’un papier peint dans ce couloir d’entrée d’une maison au Bouscat (33110 - Gironde). Rebouchage des fissures et restitution des parties manquantes partielles et soubassements pour une harmonie d’ensemble. Travail à l’aquarelle et à l’huile. Travail réalisé avec Atelier la Margotterie.",
                link: "project1_2.html"
            },
            {
                id: 118,
                name: "Marbres Cadaujac",
                images: [
                    { index: 0, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 6_resultat.webp" },
                    { index: 6, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 7_resultat.webp" },
                    { index: 7, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 8_resultat.webp" },
                    { index: 8, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 9_resultat.webp" },
                    { index: 9, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 10_resultat.webp" },
                    { index: 10, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 11_resultat.webp" },
                    { index: 11, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 12_resultat.webp" },
                    { index: 12, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 13_resultat.webp" },
                    { index: 13, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 14_resultat.webp" },
                    { index: 14, src: "assets/Restauration/2025-marbres-cadaujac/Marbres Cadaujac photo 15_resultat.webp" },
                    ],
                description: "Dégagement des anciens enduits abîmés. Fabrication et application de nouveaux enduits de chaux. Imitation de trois marbres inspirés des précédents à la peinture caséine dans ce domaine de Cadaujac (33140 - Gironde). Travail réalisé avec Atelier la Margotterie.",
                link: "project1_2.html"
            },
        ]
        
    },
    {
        id: 2,
        name: "créations",
        titleImage: "assets/pic-creation _resultat.webp",
        details: "Details about Category 1",
        link: "#creations",
        projects:
        [
            {
                id: 201,
                name: "Bistrot 'Le Charabia' ",
                images: [
                    { index: 0, src: "assets/céations/2019-charabia/2018 - Charabia photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2019-charabia/2018-Charabia photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2019-charabia/2018-Charabia photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2019-charabia/2018-Charabia photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2019-charabia/2018-Charabia photo 5_resultat.webp" },
                    ],
                description: "Réalisation d’une imitation de métal oxydé. Sur un IPN, recouvrement de la peinture bâtiment existante par une patine imitant le métal en cours d’oxydation pour un effet trompe l'œil.",
                link: "project1_1.html"
            },
            {
                id: 202,
                name: "Mazarine",
                images: [
                    { index: 0, src: "assets/céations/2019-Mazarinne/Mazarine - Photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2019-Mazarinne/Mazarine - Photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2019-Mazarinne/Mazarine - Photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2019-Mazarinne/Mazarine - Photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2019-Mazarinne/Mazarine - Photo 5_resultat.webp" },
                    { index: 5, src: "assets/céations/2019-Mazarinne/Mazarine - Photo 6_resultat.webp" },
                    { index: 6, src: "assets/céations/2019-Mazarinne/Mazarine - Photo 7_resultat.webp" },
                    { index: 7, src: "assets/céations/2019-Mazarinne/Mazarine - Photo 8_resultat.webp" },
                    ],
                description: "Fabrication et application d’une peinture à la colle de peau de lapin sur les murs et corniches de cet appartement parisien. Rendu cordé et velouté. Travaux réalisés avec Le décor Français.",
                link: "project1_1.html"
            },
            {
                id: 203,
                name: "Stage de staff",
                images: [
                    { index: 0, src: "assets/céations/2019-stage-de-staff/Stage de Staff - Photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2019-stage-de-staff/Stage de Staff - Photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2019-stage-de-staff/Stage de Staff - Photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2019-stage-de-staff/Stage de Staff - Photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2019-stage-de-staff/Stage de Staff - Photo 5_resultat.webp" },
                    { index: 5, src: "assets/céations/2019-stage-de-staff/Stage de Staff - Photo 6_resultat.webp" },
                    ],
                description: "Initiation au staff auprès de l’entreprise Garabos frère à Floirac (33270 - Gironde).",
                link: "project1_1.html"
            },
            {
                id: 204,
                name: "Palais des Congrès - Royan ",
                images: [
                    { index: 0, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 5_resultat.webp" },
                    { index: 5, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 6_resultat.webp" },
                    { index: 6, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 7_resultat.webp" },
                    { index: 7, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 8_resultat.webp" },
                    { index: 8, src: "assets/céations/2019Palais-des-congres-royan/Palais des Congrès Royan - Photo 9_resultat.webp" },
                    ],
                description: "Intervention en 2019 avant les travaux de rénovation du Palais. Relevé de la fresque de l’artiste Nadu Marsaudon ornant l’ancien escalier, par une recherche de teintes et des contours de l’ensemble des éléments. Étude chromatique des panneaux peints afin de retrouver les teintes d’origine du bâtiment conçu par l’architecte Claude Ferret. Travaux réalisés avec Le décor Français.",
                link: "project1_1.html"
            },
            {
                id: 205,
                name: "Café Murat",
                images: [
                    { index: 0, src: "assets/céations/2020-cafe-murat/Café Murat photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2020-cafe-murat/Café Murat photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2020-cafe-murat/Café Murat photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2020-cafe-murat/Café Murat photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2020-cafe-murat/Café Murat photo 5_resultat.webp" },
                    ],
                description: "Fabrication et application d’un enduit teinté au café, pour un effet chaleureux et naturel. Travail avec Le Décor Français",
                link: "project1_1.html"
            },
            {
                id: 206,
                name: "Chantier d' Orgeval (2)",
                images: [
                    { index: 0, src: "assets/céations/2020-chantier-orgeval-2/Orgeval - photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2020-chantier-orgeval-2/Orgeval - photo 2_resultat.webp" },
                    { index: 2,src: "assets/céations/2020-chantier-orgeval-2/Orgeval - photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2020-chantier-orgeval-2/Orgeval - photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2020-chantier-orgeval-2/Orgeval - photo 5_resultat.webp" },
                    { index: 5, src: "assets/céations/2020-chantier-orgeval-2/Orgeval - photo 6_resultat.webp" },
                    ],
                description: "Création d’un plafond à caisson. Réalisation de patines et de pochoirs, marouflage des toiles peintes par Sophie de Sagazan, dorure à la miction sur les arêtes. Travail avec Sophie de Sagazan.",
                link: "project1_1.html"
            },
            {
                id: 207,
                name: "Colonnes Marbre",
                images: [
                    { index: 0, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 5_resultat.webp" },
                    { index: 5, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 6_resultat.webp" },
                    { index: 6, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 7_resultat.webp" },
                    { index: 7, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 8_resultat.webp" },
                    { index: 8, src: "assets/céations/2020-colonnes-marbres/Colonnes marbre jaune photo 9_resultat.webp" },
                    ],
                description: "Réalisation d’imitations de marbre inspiré du jaune de Sienne sur deux colonnes en platres. Cadaujac (33140 - Gironde). Travail réalisé à la peinture à l’huile",
                link: "project1_1.html"
            },
            {
                id: 208,
                name: "Garage 2 Roues",
                images: [
                    { index: 0, src: "assets/céations/2020-garage-deux-roues/Photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2020-garage-deux-roues/Photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2020-garage-deux-roues/Photo 3_resultat.webp" },
                    ],
                description: "Dégagement d’une enseigne en bois de façade d’un garage à louer dans les rues Bordelaises. Fabrication et application d’une peinture à l’ocre en préparation avant la réalisation d’un lettrage à la peinture à l’huile. Bordeaux (33000 - Gironde).",
                link: "project1_1.html"
            },
            {
                id: 209,
                name: "Enduit Romain",
                images: [
                    { index: 0, src: "assets/céations/2021-enduit-romain/Enduit romain photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2021-enduit-romain/Enduit romain photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2021-enduit-romain/Enduit romain photo 3_resultat.webp" },
                    // { index: 3, src: "assets/céations/2021-enduit-romain/escalier briottières gé,éral_resultat.webp" },
                    // { index: 4, src:  "assets/céations/2021-enduit-romain/escalier briottières_resultat.webp" },
                    // { index: 5, src:  "assets/céations/2021-enduit-romain/salle à manger chateau briottières_resultat.webp" },
                    // { index: 6, src:  "assets/céations/2021-enduit-romain/chateau des briottieres_resultat.webp" },
                    ],
                description: "Fabrication et application d’un enduit romain ferré (cellulose et poudre de marbre) dans une cage d’escalier. Le Mans (72000 - Sarthe). Travail avec Le Décor Français",
                link: "project1_1.html"
            },
            {
                id: 210,
                name: "Lettrage Ardoise Wiz",
                images: [
                    { index: 0, src: "assets/céations/2021-lettrage-ardoise/Ardoise Wiz photo 1_resultat.webp" },
                    { index: 0, src: "assets/céations/2021-lettrage-ardoise/Ardoise Wiz photo 2_resultat.webp" },
                    { index: 0, src: "assets/céations/2021-lettrage-ardoise/Ardoise Wiz photo 3_resultat.webp" },
                    { index: 0, src: "assets/céations/2021-lettrage-ardoise/IMG_20230121_113725_resultat.webp" },
                    ],
                description: "Lettrage et écriture au pinceau et à la gouache de la carte du restaurant Le Wiz ( Mimizan 40200 - Landes).",
                link: "project1_1.html"
            },
            {
                id: 211,
                name: "Lettrage Hermelin",
                images: [
                    { index: 0, src: "assets/céations/2021-lettrage-hermelin/Lettrage Hermelin photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2021-lettrage-hermelin/Lettrage Hermelin photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2021-lettrage-hermelin/Lettrage Hermelin photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2021-lettrage-hermelin/Lettrage Hermelin photo 4_resultat.webp" },
                    ],
                description: "Lettrage et écriture au pinceau et à l’huile des horaires de la boulangerie-pâtisserie Hermelin ( Bordeaux 33000 - Gironde ).",
                link: "project1_1.html"
            },
            {
                id: 212,
                name: "Tadelakt",
                images: [
                    { index: 0, src: "assets/céations/2021-tadelakt/Tadelakt photo (1)_resultat.webp" },
                    { index: 1, src: "assets/céations/2021-tadelakt/Tadelakt photo (2)_resultat.webp" },
                    { index: 2, src: "assets/céations/2021-tadelakt/Tadelakt photo (3)_resultat.webp" },
                    ],
                description: "Fabrication et application d’un enduit de chaux dans une salle de douche à la finition tadelakt. Le Mans (72000 - Sarthe). Travail avec Le Décor Français.",
                link: "project1_1.html"
            },
            {
                id: 213,
                name: "Tournage spot Publicitaire",
                images: [
                    { index: 0, src: "assets/céations/2021-tournage-pub/IMG_20211214_105933_resultat.webp" },
                    { index: 1, src: "assets/céations/2021-tournage-pub/IMG_20211214_112912_resultat.webp" },
                    ],
                description: "Préparation d’un fond pour le tournage d’un film publicitaire. Réalisation d’une patine de vieillissement adaptée au tournage. Bordeaux 33000 - Gironde.",
                link: "project1_1.html"
            },
            {
                id: 214,
                name: "Fresque tropicale",
                images: [
                    { index: 0, src: "assets/céations/2022-fresque-tropicale/Fresque tropicale photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2022-fresque-tropicale/Fresque tropicale photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2022-fresque-tropicale/Fresque tropicale photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2022-fresque-tropicale/Fresque tropicale photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2022-fresque-tropicale/Fresque tropicale photo 5_resultat.webp" },
                    { index: 5, src: "assets/céations/2022-fresque-tropicale/Fresque tropicale photo 6_resultat.webp" },
                    { index: 6, src: "assets/céations/2022-fresque-tropicale/Fresque tropicale photo 7_resultat.webp" },
                    { index: 7, src: "assets/céations/2022-fresque-tropicale/Fresque tropicale photo 8_resultat.webp" },
                    ],
                description: "Réalisation d’une fresque murale en extérieur à Villenave-d’Ornon (33140 - Gironde). Travail avec Mélissa Mangnez.",
                link: "project1_1.html"
            },
            {
                id: 215,
                name: "La Madonne",
                images: [
                    { index: 0, src: "assets/céations/2022-la-madone/La Madone photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2022-la-madone/La Madone photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2022-la-madone/La Madone photo 3_resultat.webp" },
                    { index: 3, src: "assets/céations/2022-la-madone/La Madone photo 4_resultat.webp" },
                    { index: 4, src: "assets/céations/2022-la-madone/La Madone photo 5_resultat.webp" },
                    ],
                description: "Fabrication et application d’une peinture à la caséine teintée sur les murs de la cage d’escalier de cette maison du Cap Corse. Travail réalisé avec Clairedb Atelier.",
                link: "project1_1.html"
            },
            {
                id: 216,
                name: "Pizzeria Dieci",
                images: [
                    { index: 0, src: "assets/céations/2022-pizzeria-dieci/Dieci pizza photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2022-pizzeria-dieci/Dieci pizza photo 2_resultat.webp" },
                    ],
                description: "Patines et peintures de la salle de la pizzeria Dieci à Bordeaux.",
                link: "project1_1.html"
            },
            {
                id: 217,
                name: "The Hostel",
                images: [
                    { index: 0, src: "assets/céations/2023-the-hostel/The Hostel photo 1 (1)_resultat.webp" },
                    { index: 1, src: "assets/céations/2023-the-hostel/The Hostel photo 1 (2)_resultat.webp" },
                    ],
                description: "Réalisation d’une ambiance pour une salle d’escape game. Mystère et enquête à découvrir chez The Hostel.",
                link: "project1_1.html"
            },
            {
                id: 218,
                name: "The Hostel (2)",
                images: [
                    { index: 0, src: "assets/céations/2023--the-hostel-2/IMG_20230620_161442_resultat.webp" },
                    ],
                description: "Réalisation d’une ambiance pour une salle d’escape game. Mystère et enquête à découvrir chez The Hostel.",
                link: "project1_1.html"
            },
            {
                id: 219,
                name: "Escape Hunt",
                images: [
                    { index: 0, src: "assets/céations/2023-escape-hunt/Escape hunt photo 1_resultat.webp" },
                    ],
                description: "Réalisation d’une ambiance pour une salle d’escape game. Mystère et enquête à découvrir chez Escape hunt Tourny.",
                link: "project1_1.html"
            },
            {
                id: 220,
                name: "Badigeon Saugnac",
                images: [
                    { index: 0, src: "assets/céations/2024-badigeon-saugnac/Badigeon Saugnac photo 1_resultat.webp" },
                    { index: 1, src: "assets/céations/2024-badigeon-saugnac/Badigeon Saugnac photo 2_resultat.webp" },
                    { index: 2, src: "assets/céations/2024-badigeon-saugnac/Badigeon Saugnac photo 3_resultat.webp" },
                    ],
                description: "Fabrication et application de badigeon de chaux sur les murs de ce gîte à colombage. Travail réalisé avec Atelier la Margotterie.",
                link: "project1_1.html"
            },
            {
                id: 221,
                name: "Enduits de chaux - Charente ",
                images: [
                    { index: 0, src: "assets/céations/2024-enduits-de-chaux-charente/IMG_20240411_101718_resultat.webp" },
                    { index: 1, src: "assets/céations/2024-enduits-de-chaux-charente/IMG_20240411_101735 (1)_resultat.webp" },
                    { index: 2, src: "assets/céations/2024-enduits-de-chaux-charente/IMG_20240411_101748_resultat.webp" },
                    { index: 3, src: "assets/céations/2024-enduits-de-chaux-charente/IMG_20240411_145348 (1)_resultat.webp" },
                    ],
                description: "Fabrication et application d’enduits de chaux sur des murs crépis. Stuc de chaux brossées et teintées. Travail réalisé avec R’Arts Peinture",
                link: "project1_1.html"
            },
           
        ]
        
    },
    {
        id: 3,
        name: "mobilier",
        titleImage: "assets/pic-mobilier_resultat.webp",
        details: "Details about Category 1",
        link: "#mobilier",
        projects:
        [
            {
                id: 301,
                name: "wax 1/7",
                images: [
                    { index: 0, src: "assets/mobilier/wax1/wax1.1.webp" },
                    { index: 1, src:"assets/mobilier/wax1/wax1.2.webp" },
                    { index: 2, src: "assets/mobilier/wax1/wax1.3.webp" },
                    { index: 3, src: "assets/mobilier/wax1/wax1.4.webp" },
                    { index: 4, src: "assets/mobilier/wax1/wax1.5.webp" },
                    ],
              
                description: "Anciennes chaises d'école rénovées. Imitation de tissu Wax peint à la main.",
                link: "project1_1.html"
            },
            {
                id: 302,
                name: "wax 2/7",
                images: [
                         { index: 0, src: "assets/mobilier/wax2/wax2.1.webp" },
                    { index: 1, src:"assets/mobilier/wax2/wax2.2.webp" },
                    { index: 2, src: "assets/mobilier/wax2/wax2.3.webp" },
                    { index: 3, src: "assets/mobilier/wax2/wax2.4.webp" },
                                          ],
                description: "Anciennes chaises d'école rénovées. Imitation de tissu Wax peint à la main.",
                link: "project1_2.html"
            },
            {
                id: 303,
                name: "wax 3/7",
                images: [
                          { index: 0, src: "assets/mobilier/wax3/wax3.1.webp" },
                    { index: 1, src:"assets/mobilier/wax3/wax3.2.webp" },
                    { index: 2, src: "assets/mobilier/wax3/wax3.3.webp" },
                    { index: 3, src: "assets/mobilier/wax3/wax3.4.webp" },
                    { index: 4, src: "assets/mobilier/wax3/wax3.5.webp" },
                    { index: 5, src: "assets/mobilier/wax3/wax3.6.webp" },
                    
                                          ],
                description: "Anciennes chaises d'école rénovées. Imitation de tissu Wax peint à la main.",
                link: "project1_2.html"
            },
            {
                id: 304,
                name: "wax 4/7",
                images: [
                     { index: 0, src: "assets/mobilier/wax4/wax4.1.webp" },
                     { index: 1, src: "assets/mobilier/wax4/wax4.2.webp" },
                     { index: 2, src: "assets/mobilier/wax4/wax4.3.webp" },
                     { index: 3, src: "assets/mobilier/wax4/wax4.4.webp" },
                     { index: 4, src: "assets/mobilier/wax4/wax4.5.webp" },
                                          ],
                description: "Anciennes chaises d'école rénovées. Imitation de tissu Wax peint à la main.",
                link: "project1_2.html"
            },
            {
                id: 305,
                name: "wax 5/7",
                images: [
                      { index: 0, src: "assets/mobilier/wax5/wax5.1.webp" },
                      { index: 1, src: "assets/mobilier/wax5/wax5.2.webp" },
                      { index: 2, src: "assets/mobilier/wax5/wax5.3.webp" },
                      { index: 3, src: "assets/mobilier/wax5/wax5.4.webp" },
                      { index: 4, src: "assets/mobilier/wax5/wax5.5.webp" },
                      { index: 5, src: "assets/mobilier/wax5/wax5.6.webp" },
                                          ],
                description: "Anciennes chaises d'école rénovées. Imitation de tissu Wax peint à la main.",
                link: "project1_2.html"
            },
            {
                id: 306,
                name: "wax 6/7",
                images: [
                      { index: 0, src: "assets/mobilier/wax6/wax6.1.webp" },
                      { index: 1, src: "assets/mobilier/wax6/wax6.2.webp" },
                      { index: 2, src: "assets/mobilier/wax6/wax6.3.webp" },
                      { index: 3, src: "assets/mobilier/wax6/wax6.4.webp" },
                                          ],
                description: "Anciennes chaises d'école rénovées. Imitation de tissu Wax peint à la main.",
                link: "project1_2.html"
            },
            {
                id: 307,
                name: "wax 7/7",
                images: [
                       { index: 0, src: "assets/mobilier/wax7/wax7.1.webp" },
                       { index: 1, src: "assets/mobilier/wax7/wax7.2.webp" },
                       { index: 2, src: "assets/mobilier/wax7/wax7.3.webp" },
                       { index: 3, src: "assets/mobilier/wax7/wax7.4.webp" },
                       { index: 4, src: "assets/mobilier/wax7/wax7.5.webp" },
                                          ],
                description: "Anciennes chaises d'école rénovées. Imitation de tissu Wax peint à la main.",
                link: "project1_2.html"
            },
        ]
        
    }
]




