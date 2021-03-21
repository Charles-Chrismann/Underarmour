function Menu() {
    let self = this;
    this.defaultMenus = [
        {
            id: 1,
            name: "FR : Changer de pays",
            link: "https://www.underarmour.fr/fr-fr/change-location.html",
            childrens: true
        },
        {
            id: 2,
            name: "Françcais",
            link: "https://www.underarmour.fr/fr-fr/",
            childrens: false
        },
        {
            id: 3,
            name: "English",
            link: "https://www.underarmour.fr/en-fr/",
            childrens: false
        },
        {
            id: 4,
            name: "Trouver un point de vente",
            link: "https://www.underarmour.fr/fr-fr/store-locator",
            childrens: false
        },
        {
            id: 5,
            name: "Suivre une commande",
            link: "https://www.underarmour.fr/fr-fr/store-locator",
            childrens: false
        },
        {
            id: 5,
            name: "Nous contacter",
            link: "https://www.underarmour.fr/fr-fr/contact-us/contact-us.html",
            childrens: false
        }
    ];
    this.menus = [
        {
            id: 1,
            name: "Nouveatés",
            link: "https://www.underarmour.fr/fr-fr/nouveautes/",
            childrens: [
                {
                    id: 1,
                    name: "Hommes Nouveautés",
                    cat_id: 1,
                    link: "https://www.underarmour.fr/fr-fr/nouveautes/hommes-nouveautes/",
                    childrens: false
                },
                {
                    id: 2,
                    name: "Femmes Nouveautés",
                    cat_id: 1,
                    link: "https://www.underarmour.fr/fr-fr/nouveautes/femmes-nouveautes/",
                    childrens: false
                },
                {
                    id: 3,
                    name: "Enfants Nouveatés",
                    cat_id: 1,
                    link: "https://www.underarmour.fr/fr-fr/nouveautes/enfants-nouveautes/",
                    childrens: false
                }
            ]
        },
        {
            id: 2,
            name: "Chaussures",
            link: "https://www.underarmour.fr/fr-fr/chaussures/",
            childrens: [
                {
                    id: 4,
                    name: "Chaussures pour hommes",
                    cat_id: 2,
                    link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/",
                    childrens: [ {
                        id: 11,
                        name: "Tout afficher",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/",
                        childrens: false
                    },
                    {
                        id: 12,
                        name: "Chaussures de course",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/chaussures-running/",
                        childrens: false
                    },
                    {
                        id: 13,
                        name: "Chaussures d'entraînement",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/chaussures-de-fitness/",
                        childrens: false
                    },
                    {
                        id: 14,
                        name: "Boots de randonnée et tactical",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/boots-de-randonnee-et-tactical/",
                        childrens: false
                    },
                    {
                        id: 15,
                        name: " Chaussures sportstyle",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/chaussures-sportstyle/",
                        childrens: false
                    },
                    {
                        id: 16,
                        name: "Chaussures de golf",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/chaussures-de-golf/",
                        childrens: false
                    },
                    {
                        id: 17,
                        name: "Claquettes et sandales",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/claquettes-et-sandales/",
                        childrens: false
                    },
                    {
                        id: 18,
                        name: "Chaussures de basket",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/chaussures-de-basket/",
                        childrens: false
                    },
                    {
                        id: 19,
                        name: "Chaussures de foot",
                        cat_id: 4,
                        link: "https://www.underarmour.fr/fr-fr/hommes/chaussures/chaussures-de-foot-a-crampons/",
                        childrens: false
                    }]
                },
                {
                    id: 5,
                    name: "Chaussures pour femmes",
                    cat_id: 2,
                    link: "https://www.underarmour.fr/fr-fr/femmes/chaussures/",
                    childrens: [
                        {
                            id: 1,
                            name: "Tout afficher",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/femmes/chaussures/",
                            childrens: false
                        },
                        {
                            id: 20,
                            name: "chaussures de course",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/femmes/chaussures/chaussures-running/",
                            childrens: false
                        },
                        {
                            id: 21,
                            name: "Chaussures d’entraînement",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/femmes/chaussures/chaussures-de-fitness/",
                            childrens: false
                        },
                        {
                            id: 22,
                            name: "Chaussures sportstyle",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/femmes/chaussures/chaussures-sportstyle/",
                            childrens: false
                        },
                        {
                            id: 23,
                            name: "Chaussures de golf",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/femmes/chaussures/chaussures-de-golf/",
                            childrens: false
                        },
                        {
                            id: 24,
                            name: "Claquettes et sandales",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/femmes/chaussures/claquettes-et-sandales/",
                            childrens: false
                        }
                    ]
                },
                {
                    id: 6,
                    name: "Chaussures pour Enfants",
                    cat_id: 2,
                    link: "https://www.underarmour.fr/fr-fr/enfants/chaussures/",
                    childrens: [
                        {
                            id: 25,
                            name: "Tout afficher",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/enfants/chaussures/",
                            childrens: false
                        },
                        {
                            id: 26,
                            name: "Chaussures de course",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/enfants/chaussures/chaussures-de-course/",
                            childrens: false
                        },
                        {
                            id: 27,
                            name: "Chaussures de basket",
                            cat_id:6,
                            link: "https://www.underarmour.fr/fr-fr/enfants/chaussures/chaussures-de-basket/",
                            childrens: false
                        },
                        {
                            id: 28,
                            name: "Chaussures sportstyle",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/enfants/chaussures/chaussures-sportstyle/",
                            childrens: false
                        }
                    ]
                },
                {
                    id: 7,
                    name: "Achetez chaussures",
                    link: "https://www.underarmour.fr/fr-fr/chaussures/",
                    cat_id: 2,
                    childrens: false
                },
                {
                    id: 8,
                    name: "HOVR™ RUNNING",
                    cat_id: 2,
                    link: "https://www.underarmour.fr/fr-fr/hovr-experience.html",
                    childrens: false
                },
                {
                    id: 9,
                    name: "Chaussures de course",
                    cat_id: 2,
                    link: "https://www.underarmour.fr/fr-fr/chaussures/chaussures-de-course/",
                    childrens: false
                },
                {
                    id: 10,
                    name: "Chaussures d’entraînement",
                    cat_id: 2,
                    link: "https://www.underarmour.fr/fr-fr/chaussures/chaussures-dentrainement/",
                    childrens: false
                },
                {
                    id: 11,
                    name: "CHAUSSURES DE GOLF",
                    cat_id: 2,
                    link: "https://www.underarmour.fr/fr-fr/chaussures/chaussures-de-golf/",
                    childrens: false
                },
                {
                    id: 12,
                    name: "Boots Tactical",
                    cat_id: 2,
                    link: "https://www.underarmour.fr/fr-fr/chaussures/chaussures-de-golf/",
                    childrens: false
                },
            ],
        },
        {
            id: 3,
            name: "Hommes",
            link: "https://www.underarmour.fr/fr-fr/hommes/",
            childrens: [
                {
                    id: 4,
                    name: "Hauts",
                    cat_id: 3,
                    childrens: [
                        {
                            id: 29,
                            name: "Tout afficher",
                            cat_id: 4,
                            link: "https://www.underarmour.fr/fr-fr/hommes/hauts/",
                            childrens: false
                        },
                        {
                            id: 30,
                            name: "Vestes",
                            cat_id: 4,
                            link: "https://www.underarmour.fr/fr-fr/hommes/hauts/vestes/",
                            childrens: false
                        },
                        {
                            id: 31,
                            name: "Vestes sans manches",
                            cat_id: 4,
                            link: "https://www.underarmour.fr/fr-fr/hommes/hauts/vestes-sans-manches/",
                            childrens: false
                        },
                        {
                            id: 32,
                            name: "Hauts à capuche",
                            cat_id: 4,
                            link: "https://www.underarmour.fr/fr-fr/hommes/hauts/sweats-a-capuche/",
                            childrens: false
                        },
                        {
                            id: 33,
                            name: "Manches longues",
                            cat_id: 4,
                            link: "https://www.underarmour.fr/fr-fr/hommes/hauts/manches-longues/",
                            childrens: false
                        },
                        {
                            id: 34,
                            name: "Manches courtes",
                            cat_id: 4,
                            link: "https://www.underarmour.fr/fr-fr/hommes/hauts/tee-shirts/",
                            childrens: false
                        },
                        {
                            id: 35,
                            name: "Polos",
                            cat_id: 4,
                            link: "https://www.underarmour.fr/fr-fr/hommes/hauts/polos/",
                            childrens: false
                        },
                        {
                            id: 36,
                            name: "Sans manches et débardeurs",
                            cat_id: 4,
                            link: "https://www.underarmour.fr/fr-fr/hommes/hauts/debardeurs/",
                            childrens: false
                        }

                    ]
                },
                {
                    id: 5,
                    name: "Bas",
                    cat_id: 3,
                    childrens: [
                        {
                            id: 37,
                            name: "Tout afficher",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/hommes/bas/",
                            childrens: false
                        },
                        {
                            id: 38,
                            name: "Pantalons",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/hommes/bas/pantalons/",
                            childrens: false
                        },
                        {
                            id: 39,
                            name: "Collants et leggings",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/hommes/bas/leggings-et-collants/",
                            childrens: false
                        },
                        {
                            id: 40,
                            name: "Shorts",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/hommes/bas/shorts/",
                            childrens: false
                        },
                        {
                            id: 41,
                            name: "Sous-vêtements",
                            cat_id: 5,
                            link: "https://www.underarmour.fr/fr-fr/hommes/bas/boxers-sous-vetements/",
                            childrens: false
                        },
                    ]
                },
                {
                    id: 6,
                    name: "Accesssoires",
                    cat_id: 3,
                    childrens: [
                        {
                            id: 42,
                            name: "Tout afficher",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/accessoires/",
                            childrens: false
                        },
                        {
                            id: 43,
                            name: "Casquettes/Bonnets",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/accessoires/casquettes%2Fbonnets/",
                            childrens: false
                        },
                        {
                            id: 44,
                            name: "Gants",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/accessoires/gants/",
                            childrens: false
                        },
                        {
                            id: 45,
                            name: "Chaussettes",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/accessoires/chaussettes/",
                            childrens: false
                        },
                        {
                            id: 46,
                            name: "Sacs",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/accessoires/sacs/",
                            childrens: false
                        },
                        {
                            id: 47,
                            name: "Ceintures",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/accessoires/ceintures/",
                            childrens: false
                        },
                        
                    ]
                },
                {
                    id: 7,
                    name: "Sports",
                    cat_id: 3,
                    childrens: [
                        {
                            id: 48,
                            name: "Tout afficher",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/sports/",
                            childrens: false
                        },
                        {
                            id: 49,
                            name: "Entraînement",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/sports/entrainement/",
                            childrens: false
                        },
                        {
                            id: 50,
                            name: "Course",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/sports/course/",
                            childrens: false
                        },
                        {
                            id: 51,
                            name: "Golf",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/sports/golf/",
                            childrens: false
                        },
                        {
                            id: 52,
                            name: "Sportstyle",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/sports/sportstyle/",
                            childrens: false
                        },
                        {
                            id: 53,
                            name: "Basketball",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/sports/basketball/",
                            childrens: false
                        },
                        {
                            id: 54,
                            name: "Foot",
                            cat_id: 6,
                            link: "https://www.underarmour.fr/fr-fr/hommes/sports/foot/",
                            childrens: false
                        }
                    ]
                },
                {
                    id: 8,
                    name: "Collection hommes",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/hommes/",
                    childrens: false
                },
                {
                    id: 9,
                    name: "Projet Rock",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/project-rock/",
                    childrens: false
                },
                {
                    id: 10,
                    name: "HOVR™ Running",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/hovr-experience.html",
                    childrens: false
                },
                {
                    id: 11,
                    name: "Collection RUSH",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/rush-infrared-technology-athletic-apparel/",
                    childrens: false
                },
                {
                    id: 12,
                    name: "Exclusivités UA",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/exclusivites-du-moment/",
                    childrens: false
                }
            ]
        },
        {
            id: 4,
            name: "Femmes",
            link: "https://www.underarmour.fr/fr-fr/femmes/",
            childrens: [
                {
                    id: 55,
                    name: "Hauts",
                    cat_id: 4,
                    link: "https://www.underarmour.fr/fr-fr/femmes/hauts/",
                    childrens: []
                },
                {
                    id: 56,
                    name: "Bas",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/femmes/bas/",
                    childrens: []
                },
                {
                    id: 57,
                    name: "Accesssoires",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/femmes/accessoires/",
                    childrens: []
                },
                {
                    id: 58,
                    name: "Sports",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/femmes/sports/",
                    childrens: []
                },
                {
                    id: 59,
                    name: "Collection femmes",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/femmes/",
                    childrens: false
                },
                {
                    id: 60,
                    name: "Projet Rock",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/project-rock/",
                    childrens: false
                },
                {
                    id: 61,
                    name: "HOVR™ Running",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/hovr-experience.html",
                    childrens: false
                },
                {
                    id: 62,
                    name: "Collection RUSH",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/rush-infrared-technology-athletic-apparel/",
                    childrens: false
                },
                {
                    id: 63,
                    name: "Exclusivités UA",
                    cat_id: 3,
                    link: "https://www.underarmour.fr/fr-fr/exclusivites-du-moment/",
                    childrens: false
                }
            ]
        },
        {
            id: 5,
            name: "Enfants",
            link: "https://www.underarmour.fr/fr-fr/enfants/",
            childrens: [
                {
                    id: 63,
                    name: "Hauts",
                    cat_id: 5,
                    link: "https://www.underarmour.fr/fr-fr/enfants/hauts/",
                    childrens: [
                        {
                            id: 1,
                            name: "Tout afficher",
                            cat_id: 63,
                            link: "https://www.underarmour.fr/fr-fr/enfants/hauts/",
                            childrens: false
                        },
                        {
                            id: 2,
                            name: "Hauts à capuche",
                            cat_id: 63,
                            link: "https://www.underarmour.fr/fr-fr/enfants/hauts/hauts-a-capuche/",
                            childrens: false
                        },
                        {
                            id: 3,
                            name: "Manches longues",
                            cat_id: 63,
                            link: "https://www.underarmour.fr/fr-fr/enfants/hauts/manches-longues/",
                            childrens: false
                        },
                        {
                            id: 4,
                            name: "Manches courtes",
                            cat_id: 63,
                            link: "https://www.underarmour.fr/fr-fr/enfants/hauts/manches-courtes/",
                            childrens: false
                        }
                    ]
                },
                {
                    id: 64,
                    name: "Bas",
                    cat_id: 5,
                    link: "https://www.underarmour.fr/fr-fr/enfants/bas/",
                    childrens: [
                        {
                            id: 1,
                            name: "Tout afficher",
                            cat_id: 64,
                            link: "https://www.underarmour.fr/fr-fr/enfants/bas/",
                            childrens: false
                        },
                        {
                            id: 2,
                            name: "Pantalons",
                            cat_id: 64,
                            link: "https://www.underarmour.fr/fr-fr/enfants/bas/pantalons/",
                            childrens: false
                        },
                        {
                            id: 3,
                            name: "Collants et leggings",
                            cat_id: 64,
                            link: "https://www.underarmour.fr/fr-fr/enfants/bas/collants-et-leggings/",
                            childrens: false
                        },
                        {
                            id: 4,
                            name: "Shorts",
                            cat_id: 64,
                            link: "https://www.underarmour.fr/fr-fr/enfants/bas/shorts/",
                            childrens: false
                        }
                    ]
                },
                {
                    id: 65,
                    name: "Accesssoires",
                    cat_id: 5,
                    link: "https://www.underarmour.fr/fr-fr/enfants/accessoires/",
                    childrens: [
                        {
                            id: 1,
                            name: "Tout afficher",
                            cat_id: 65,
                            link: "https://www.underarmour.fr/fr-fr/enfants/accessoires/",
                            childrens: false
                        },
                        {
                            id: 2,
                            name: "Casquettes/Bonnets",
                            cat_id: 65,
                            link: "https://www.underarmour.fr/fr-fr/enfants/accessoires/casquettes%2Fbonnets/",
                            childrens: false
                        },
                        {
                            id: 3,
                            name: "Chaussettes",
                            cat_id: 65,
                            link: "https://www.underarmour.fr/fr-fr/enfants/accessoires/chaussettes/",
                            childrens: false
                        },
                        {
                            id: 4,
                            name: "Sacs",
                            cat_id: 65,
                            link: "https://www.underarmour.fr/fr-fr/enfants/accessoires/sacs/",
                            childrens: false
                        },
                        
                    ]
                },
                {
                    id: 66,
                    name: "Sports",
                    cat_id: 5,
                    link: "https://www.underarmour.fr/fr-fr/enfants/sports/",
                    childrens: [
                        {
                            id: 1,
                            name: "Tout afficher",
                            cat_id: 66,
                            link: "https://www.underarmour.fr/fr-fr/enfants/sports/",
                            childrens: false
                        },
                        {
                            id: 2,
                            name: "Entraînement",
                            cat_id: 66,
                            link: "https://www.underarmour.fr/fr-fr/enfants/sports/entrainement/",
                            childrens: false
                        },
                        {
                            id: 3,
                            name: "Golf",
                            cat_id: 66,
                            link: "https://www.underarmour.fr/fr-fr/enfants/sports/golf/",
                            childrens: false
                        },
                        {
                            id: 4,
                            name: "Basketball",
                            cat_id: 66,
                            link: "https://www.underarmour.fr/fr-fr/enfants/sports/basketball/",
                            childrens: false
                        }
                    ]
                },
                {
                    id: 67,
                    name: "Collection enfants",
                    cat_id: 5,
                    link: "https://www.underarmour.fr/fr-fr/enfants/",
                    childrens: false
                },
                {
                    id: 68,
                    name: "Project Rock",
                    cat_id: 5,
                    link: "https://www.underarmour.fr/fr-fr/project-rock/",
                    childrens: false
                },
                {
                    id: 69,
                    name: "Casques et Écouteurs",
                    cat_id: 5,
                    link: "https://www.underarmour.fr/fr-fr/accessoires/casques-audio/",
                    childrens: false
                },
                {
                    id: 70,
                    name: "Meilleures Ventes",
                    cat_id: 5,
                    link: "https://www.underarmour.fr/fr-fr/meilleures-ventes/meilleures-ventes-enfants/",
                    childrens: false
                },
            ]
        },
        {
            id: 6,
            name: "Bonnes affaires",
            link: "https://www.underarmour.fr/fr-fr/bonnes-affaires/",
            childrens: [
                {
                    id: 1,
                    name: "Hommes Bonnes affaires",
                    cat_id: 6,
                    link: "https://www.underarmour.fr/fr-fr/bonnes-affaires/hommes-bonnes-affaires/",
                    childrens: false
                },
                {
                    id: 2,
                    name: "Femmes Bonnes affaires",
                    cat_id: 6,
                    link: "https://www.underarmour.fr/fr-fr/bonnes-affaires/femmes-bonnes-affaires/",
                    childrens: false
                },
                {
                    id: 3,
                    name: "Enfants Bonnes affaires",
                    cat_id: 6,
                    link: "https://www.underarmour.fr/fr-fr/bonnes-affaires/enfants-bonnes-affaires/",
                    childrens: false
                }
            ]
        }
    ];
    this.menus[2].childrens.unshift(this.menus[1]);
    this.menus[3].childrens.unshift(this.menus[1]);
    let shoesChild = this.menus[1].childrens[2];
    this.menus[4].childrens.unshift({...shoesChild, name: "Chaussures"});
    this.hamburger = document.querySelector('.hamburger');
    this.hamburger.addEventListener('click', this.handleBurgerMenu.bind(this));
    this.init();
    this.onResize();
    window.addEventListener( 'resize', this.onResize.bind(this));
    // function Menu() {
    //     this.menus = [];
    //     this.defaultMenus = [];
    //     this.hamburger = document.querySelector('.hamburger');
    //     this.hamburger.addEventListener('click', this.handleBurgerMenu.bind(this));
        // fetchData("json/menu.json").then(data => {
        //     this.menus = this.mergeData(data.menu_link);
        //     this.defaultMenus = data.default_menu;
        //     return  this.menus;
        // }).then(data => {
        //     this.init(data);
        // }).finally(() => {
        //     this.onResize();
        //     window.addEventListener( 'resize', this.onResize.bind(this));
        // }); 
    } 
    
    Menu.prototype.init = function () {
        let header = document.querySelector('header');
        this.navigationMobile = this.createElementWithClass("navigation-mobile", 'div');
        let primaryNav = this.createElementWithClass("primary-nav", 'nav');
        let primaryNav1 = this.createElementWithClass("primary-nav", 'nav');
        this.container = this.createElementWithClass("mobile-nav-container", 'div');
        this.container1 = this.createElementWithClass("mobile-nav-container", 'div');
        let principalList = this.createMenu('Mon compte', 'is-active', false, this.menus);
        let principalList1 = this.createMenu(false, 'is-default', false, this.defaultMenus);
        this.container.appendChild(principalList);
        this.container1.appendChild(principalList1);
        primaryNav.appendChild(this.container);
        primaryNav1.appendChild(this.container1);
        this.navigationMobile.appendChild(primaryNav);
        this.navigationMobile.appendChild(primaryNav1);
        header.appendChild(this.navigationMobile);
    }    
    
    Menu.prototype.mergeData = function (data) {
        data[2].childrens.unshift(data[1]);
        data[3].childrens.unshift(data[1]);
        let shoesChild = data[1].childrens[2];
        data[4].childrens.unshift({...shoesChild, name: "Chaussures"});
        return data;
    }
     
    Menu.prototype.handleBurgerMenu = function (e) {
        if(window.innerWidth < 768){
            let hamburgerIsActive = document.querySelector('.hamburger.is-active');
            console.log( e.target.className)
            if (!hamburgerIsActive) {
                e.currentTarget.classList.add('is-active');
                this.navigationMobile.classList.add('mobile-nav-open');
                this.build(this.menus);
            }else{
                e.currentTarget.classList.remove('is-active');
                this.navigationMobile.classList.remove('mobile-nav-open');
            } 
        }
    }
    
    Menu.prototype.onResize = function () {
        if(window.matchMedia( '(min-width: 768px)' ).matches){
            this.hamburger.classList.remove('is-active');
            _replaceClass(this.hamburger.parentElement, 'burger--show', 'hide');
            this.navigationMobile.classList.remove('mobile-nav-open');
            let container = document.querySelector('.mobile-nav-container');
            let tmp = container.firstChild;
            tmp.className = "is-active"
            container.innerHTML = tmp.outerHTML;
        }else{
            _replaceClass(this.hamburger.parentElement, 'hide', 'burger--show')
        }
    }
    
    Menu.prototype.build = function (menus) {
        let self = this;
        let listIsActive = this.navigationMobile.querySelector('.is-active');
        let childrens = listIsActive.children;
        [...childrens].forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault()
                let cat_id = e.target.closest('li').getAttribute('id');
                if (cat_id) {
                    e.preventDefault()
                    let menu = menus.find(menu => menu.id == cat_id);
                    let menu_title = self.menuUserNav(item, self);
                    let lists = self.createMenu( menu_title, 'list-item', e.target, menu.childrens);
                    insertAfter(listIsActive, lists);
                    self.nextMenu(lists, item, self, menu);
                    self.prevMenu(lists);    
                } 
            });
        });
    }
    
    Menu.prototype.createElementWithClass = function (className, type) {
        let elem = document.createElement(type);
        if(className){
            let name = '';
            if(typeof className === 'object'){
                for (let index = 0; index < className.length; index++){
                    name += className[index] + ' ';
                }  
            }else{ name = className; }
            elem.setAttribute('class', name.trim());
        }
        return elem;
    }
    
    Menu.prototype.navigationHead = function (title) {
        let div = this.createElementWithClass('mobile-nav-user', 'div');
        let li = document.createElement('li');
        div.textContent = title;
        li.appendChild(div);
        return li;
    }
    
    Menu.prototype.createMenu = function (title, className, targetLink, arr) {
        let ul = document.createElement('ul');
        ul.setAttribute('class', className);
        
        if(title){
            let a = document.createElement('a');
            a.className = 'nav_head_link';
            a.innerHTML = title;
            ul.appendChild(
                this.createLi("mobile-nav-user", [a])
            );
        }
    
        if (targetLink) {
            ul.setAttribute('id', targetLink.closest('li').getAttribute('id'))
            let li = this.createLi(false, false);
                li.innerHTML = `<div class="menu-category">${targetLink.textContent}</div>`;
            ul.appendChild(li);
        }
        return this.createUlList(arr, ul);
    }
    
    Menu.prototype.createUlList = function(arr, ul) {
        arr.forEach(item => {
            li = this.createLi();
            let a = document.createElement('a');
            a.textContent = item.name;
            if (item.childrens) {
                let i = this.createElementWithClass(['fas', 'fa-chevron-right']);
                li.setAttribute('id', item.id);
                a.appendChild(i);
            }
            a.setAttribute('href', item.link);
            li.appendChild(a);
            ul.appendChild(li);
        });
        return ul;
    }
    
    Menu.prototype.createLi = function (className = false, chidrens = false) {
        let li = this.createElementWithClass(className, 'li');
        if(Array.isArray(chidrens)){
            chidrens.forEach(item => {
                li.appendChild(item);
            })
        }
        return li;
    }
    
    Menu.prototype.menuUserNav = function(item, self) {
        let ifNextIdUl = item.closest('ul').getAttribute('id');
    
        let menu_title = '<i class="fas fa-chevron-left"></i> Menu Principal';
        if (ifNextIdUl) {
            let menu = self.menus.find(menu => menu.id == ifNextIdUl);
            menu_title = '<i class="fas fa-chevron-left"></i> ' + menu.name;
        }
        return menu_title;
    }
    
    Menu.prototype.nextMenu = function(lists, item, self, menu) {
        document.querySelector('.navigation-mobile .primary-nav:first-child').style.height = lists.offsetHeight + "px";
        setTimeout(() => {
            item.closest('ul').className = 'is-prev';
            item.closest('ul').nextElementSibling.className = "is-active";
            self.build(menu.childrens);
        }, 100);
    }
    
    Menu.prototype.prevMenu = function(lists) {
        lists.querySelector('.mobile-nav-user').addEventListener('click', function (e) {
            e.target.closest('ul').previousElementSibling.classList.remove('is-prev');
            e.target.closest('ul').previousElementSibling.classList.add('is-active');
            document.querySelector('.navigation-mobile .primary-nav:first-child').style.height = e.target.closest('ul').previousElementSibling.offsetHeight + "px";
            e.target.closest('ul').remove('is-active');
        });
    }
    
    function insertAfter(element, newElement) {
        element.parentNode.insertBefore(newElement, element.nextSibling);
    }
    
    function _replaceClass(elem, prevClass, newClass){
        let str = prevClass;
        let strReGex = new RegExp(str,"gi");
        elem.className = elem.className.replace(strReGex, newClass);
    }
    
    function fetchData(url){
        return fetch('/json/menu.json').then(function(response) {
            var contentType = response.headers.get("content-type");
            if(contentType && contentType.indexOf("application/json") !== -1) {
              return response.json()
            } else {
              console.log("Oops, nous n'avons pas du JSON!");
            }
        });
    }
    
    new Menu();
    
    