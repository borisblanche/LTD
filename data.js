// data.js
const categories = [
    {
        id: 1,
        name: "patrimoine",
        titleImage: "assets/portrait.avif",
        // image: "assets/imitations-matieres/bois-jeunechene.avif",
        details: "Details about Category 1",
        link: "#patrimoine",
        projects:
        [
            {
                id: 101,
                name: "2019-Chantier Fontainebleau",
                images: [
                    { index: 0, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2018-chantier-Fontainebleau/Chantier Fontainebleau - Photo 5_resultat.webp" },
                    ],
                description: "Restitution d'un décor d'époque dans le salon d'une maison de maître à Fontainebleau (77920 - Seine et marne).Fabrication et application d'une peinture à la colle de peau de lapin sur les corniches et les volets intérieurs.Travail réalisé avec Le Décor Français.",
                link: "project1_1.html"
            },
            {
                id: 102,
                name: "2019 - Eglise de campagne",
                images: [
                    { index: 0, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 1_resultat.webp" },
                    { index: 1, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 2_resultat.webp" },
                    { index: 2, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 3_resultat.webp" },
                    { index: 3, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 4_resultat.webp" },
                    { index: 4, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 5_resultat.webp" },
                    { index: 5, src: "assets/Restauration/2019-chantier-eglise-campagne/Eglise de Campagne - photo 6_resultat.webp" },
                    ],
                description: "Reprise chromatique des décors peints de l'église Saint-Pantaléon à Campagne (40090 - Landes).Reprise des teintes et des lacunes, pour une lecture plus harmonieuse des éléments décoratifs du chœur.Travail réalisé pour l' Atelier Dufon",
                link: "project1_2.html"
            }
        ]
        
    },
    {
        id: 2,
        name: "créations",
        titleImage: "assets/meubles peints/lettrage-1.webp",
        details: "Details about Category 1",
        link: "#creations",
        projects:
        [
            {
                id: 201,
                name: "Project 1.1",
                images: [
                    { index: 0, src: "assets/imitations-matieres/bois-jeunechene.avif" },
                    { index: 1, src: "assets/imitations-matieres/bois-loupe.avif" },
                    { index: 2, src:  "assets/imitations-matieres/bois-noyer.avif" },
                    ],
                description: "Description of Project 1.1",
                link: "project1_1.html"
            },
            {
                id: 202,
                name: "Project 1.2",
                images: [
                    { index: 0, src: "assets/imitations-matieres/bois-jeunechene.avif" },
                    { index: 1, src: "assets/imitations-matieres/bois-loupe.avif" },
                    { index: 2, src:  "assets/imitations-matieres/bois-noyer.avif" },
                    ],
               
                description: "Description of Project 1.2",
                link: "project1_2.html"
            }
        ]
        
    },
    {
        id: 3,
        name: "mobilier",
        titleImage: "assets/meubles peints/mp-ensemble.avif",
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
            // {
            //     id: 308,
            //     name: "balade",
            //     images: [
            //            {index: 0,src: "assets/meubles peints/balade1.webp"},
            //             {index: 1,src: "assets/meubles peints/balade2.webp"},
            //          {index: 2,src: "assets/meubles peints/balade3.webp"},
            //                               ],
            //     description: "Description of balade",
            //     link: "project1_2.html"
            // },
            // {
            //     id: 309,
            //     name: "balade",
            //     images: [
            //            {index: 0,src: "assets/meubles peints/balade1.webp"},
            //             {index: 1,src: "assets/meubles peints/balade2.webp"},
            //          {index: 2,src: "assets/meubles peints/balade3.webp"},
            //                               ],
            //     description: "Description of balade",
            //     link: "project1_2.html"
            // },
            // {
            //     id: 310,
            //     name: "balade",
            //     images: [
            //            {index: 0,src: "assets/meubles peints/balade1.webp"},
            //             {index: 1,src: "assets/meubles peints/balade2.webp"},
            //          {index: 2,src: "assets/meubles peints/balade3.webp"},
            //                               ],
            //     description: "Description of balade",
            //     link: "project1_2.html"
            // },
            // {
            //     id: 311,
            //     name: "balade",
            //     images: [
            //            {index: 0,src: "assets/meubles peints/balade1.webp"},
            //             {index: 1,src: "assets/meubles peints/balade2.webp"},
            //          {index: 2,src: "assets/meubles peints/balade3.webp"},
            //                               ],
            //     description: "Description of balade",
            //     link: "project1_2.html"
            // },
        ]
        
    }
]


// const categories = [
//     {
//         id: 1,
//         name: "decoration",
//         image: "assets/imitations-matieres/bois-jeunechene.avif",
//         details: "Details about Category 1",
//         link: "#decoration",
//         projects: [
//             {
//                 id: 101,
//                 name: "Project 1.1",
//                 images: ["assets/imitations-matieres/bois-jeunechene.avif", "assets/imitations-matieres/marbre-blancveine.avif"],
//                 description: "Description of Project 1.1",
//                 link: "project1_1.html"
//             },
//             {
//                 id: 102,
//                 name: "Project 1.2",
//                 images: ["assets/imitations-matieres/bois-loupe.avif", "assets/imitations-matieres/bois-noyer.avif"],
//                 description: "Description of Project 1.2",
//                 link: "project1_2.html"
//             }
//         ]
//     },
//     {
//         id: 2,
//         name: "restauration",
//         image: "assets/conservation-restauration/conservation-1.webp",
//         details: "Details about Category 2",
//         link: "#restauration",
//         projects: [
//             {
//                 id: 201,
//                 name: "Project 2.1",
//                 images: ["assets/conservation-restauration/conservation-1.webp", "assets/conservation-restauration/conservation-2.webp"],
//                 description: "Description of Project 2.1",
//                 link: "project2_1.html"
//             },
//             {
//                 id: 202,
//                 name: "Project 2.2",
//                 images: ["assets/conservation-restauration/restau-fresque-1.webp", "assets/conservation-restauration/restau-fresque-2.webp"],
//                 description: "Description of Project 2.2",
//                 link: "project2_2.html"
//             }
//         ]
//     },
//     {
//         id: 3,
//         name: "creations",
//         image: "assets/meubles peints/balade1.webp",
//         details: "Details about Category 3",
//         link: "#creations",
//         projects: [
//             {
//                 id: 301,
//                 name: "balade",
//                 images: [
//                     {index: 0,src: "assets/meubles peints/balade1.webp"},
//                     {index: 1,src: "assets/meubles peints/balade2.webp"},
//                     {index: 2,src: "assets/meubles peints/balade3.webp"},
//                       ],
//                 description: "Description of Project 3.1",
//                 link: "project3_1.html"
//             },
//             {
//                 id: 302,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 303,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 304,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 305,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 306,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 307,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 308,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 309,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 310,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 311,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 312,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 313,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 314,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 315,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//             {
//                 id: 316,
//                 name: "brume",
//                 images: ["assets/meubles peints/brume1.webp", "assets/meubles peints/brume2.webp", "assets/meubles peints/brume3.webp",
//                     "assets/meubles peints/brume4.webp",
//                 ],
//                 description: "Description of Project 3.2",
//                 link: "project3_2.html"
//             },
//         ]
//     }
// ];

