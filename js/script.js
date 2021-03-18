let element = document.querySelector(".openCookie")
let cookie = document.querySelector(".footer_cookie")
let cookieParent = document.querySelector(".footer_cookie_parent")
let cookieClose = document.querySelector(".popclose")
let spinner = document.querySelector(".spiner")





// element.addEventListener ('click', event => { 
//     spinner.classList.toggle("hide")   
//    ;});


   

 element.addEventListener ('click', event => {   
    
    cookie.classList.remove("hide")
    setTimeout(function(){  
        spinner.classList.add("hide") 
        cookieParent.classList.remove("hide")
        // cookie.classList.toggle("hide")
       },2000)
   
  } ); 




 cookieClose.addEventListener ('click', event => {
    console.log(event);
    spinner.style.display='none';
    cookie.style.display='none';
    
 })


// let plusOuMoin = 0

// function afficherSousCat(event){
//     //document.querySelector('.contenu').classList.add('show')
//     let i2 = document.querySelector('.fa-plus')
//     console.log(i2)
//     plusOuMoin++
//     let isActive = document.querySelector('.fas.fa-minus')
//     if (plusOuMoin % 2 ==0){
//         i2.classList.remove('fa-plus')
//         i2.classList.add('fa-minus')
//     } else {
//         i2.classList.remove('fa-minus')
//         i2.classList.add('fa-plus')
//     }
// }

// listeCat = [".categorie_meilleurs_ventes", ".categorie_tendances_hommes", ".categorie_tendances_femmes", ".categorie_tendances"]


// //let titlesAccordeon = document.querySelectorAll(".accordeon div")
// for (let i=0; i < listeCat.length; i++){
//     console.log(i);
//     document.querySelector(listeCat[i]).addEventListener('click',afficherSousCat)
// }

function Menu() {
    let self = this;
    this.menus = [
        {
            id: 1,
            name: "Nouveatés",
            childrens: [
                {
                    id: 1,
                    name: "Hommes Nouveautés",
                    cat_id: 1,
                    childrens: []
                },
                {
                    id: 2,
                    name: "Femmes Nouveautés",
                    cat_id: 1,
                    childrens: []
                },
                {
                    id: 3,
                    name: "Enfants Nouveatés",
                    cat_id: 1,
                    childrens: []
                }
            ]
        },
        {
            id: 2,
            name: "Chaussures",
            childrens: [
                {
                    id: 4,
                    name: "Chaussures pour hommes",
                    cat_id: 2,
                    childrens: [ {
                        id: 11,
                        name: "Tout afficher",
                        cat_id: 4,
                        childrens: false
                    },
                    {
                        id: 12,
                        name: "Chaussures de course",
                        cat_id: 4,
                        childrens: false
                    },
                    {
                        id: 13,
                        name: "Chaussures d'entraînement",
                        cat_id: 4,
                        childrens: false
                    },
                    {
                        id: 14,
                        name: "Boots de randonnée et tactical",
                        cat_id: 4,
                        childrens: false
                    },
                    {
                        id: 15,
                        name: " Chaussures sportstyle",
                        cat_id: 4,
                        childrens: false
                    },
                    {
                        id: 16,
                        name: "Chaussures de golf",
                        cat_id: 4,
                        childrens: false
                    },
                    {
                        id: 17,
                        name: "Claquettes et sandales",
                        cat_id: 4,
                        childrens: false
                    },
                    {
                        id: 18,
                        name: "Chaussures de basket",
                        cat_id: 4,
                        childrens: false
                    },
                    {
                        id: 19,
                        name: "Chaussures de foot",
                        cat_id: 4,
                        childrens: false
                    }]
                },
                {
                    id: 5,
                    name: "Chaussures pour femmes",
                    cat_id: 2,
                    childrens: [
                        {
                            id: 1,
                            name: "Chaussures de foot",
                            cat_id: 5,
                            childrens: false
                        },
                        {
                            id: 20,
                            name: "Tout afficher",
                            cat_id: 5,
                            childrens: false
                        },
                        {
                            id: 21,
                            name: "Chaussures de course",
                            cat_id: 5,
                            childrens: false
                        },
                        {
                            id: 22,
                            name: "Chaussures d’entraînement",
                            cat_id: 5,
                            childrens: false
                        },
                        {
                            id: 23,
                            name: "Chaussures sportstyle",
                            cat_id: 5,
                            childrens: false
                        },
                        {
                            id: 24,
                            name: "Claquettes et sandales",
                            cat_id: 5,
                            childrens: false
                        },
                        {
                            id: 25,
                            name: "Chaussures de golf",
                            cat_id: 5,
                            childrens: false
                        }
                    ]
                },
                {
                    id: 6,
                    name: "Chaussures pour Enfants",
                    cat_id: 2,
                    childrens: []
                },
                {
                    id: 7,
                    name: "Achetez chaussures",
                    cat_id: 2,
                    childrens: []
                },
                {
                    id: 8,
                    name: "HOVR™ RUNNING",
                    cat_id: 2,
                    childrens: []
                },
                {
                    id: 9,
                    name: "Chaussures de course",
                    cat_id: 2,
                    childrens: []
                },
                {
                    id: 10,
                    name: "Chaussures d’entraînement",
                    cat_id: 2,
                    childrens: []
                },
                {
                    id: 11,
                    name: "CHAUSSURES DE GOLF",
                    cat_id: 2,
                    childrens: []
                },
                {
                    id: 12,
                    name: "Boots Tactical",
                    cat_id: 2,
                    childrens: []
                },
            ],
        },
        {
            id: 3,
            name: "Hommes",
            childrens: [
                {
                    id: 4,
                    name: "Hauts",
                    cat_id: 3,
                    childrens: []
                },
                {
                    id: 5,
                    name: "Bas",
                    cat_id: 3,
                    childrens: []
                },
                {
                    id: 6,
                    name: "Accesssoires",
                    cat_id: 3,
                    childrens: []
                },
                {
                    id: 7,
                    name: "Sports",
                    cat_id: 3,
                    childrens: []
                },
                {
                    id: 8,
                    name: "Collection hommes",
                    cat_id: 3,
                    childrens: false
                },
                {
                    id: 9,
                    name: "Projet Rock",
                    cat_id: 3,
                    childrens: false
                },
                {
                    id: 10,
                    name: "HOVR™ Running",
                    cat_id: 3,
                    childrens: false
                },
                {
                    id: 11,
                    name: "Collection RUSH",
                    cat_id: 3,
                    childrens: false
                },
                {
                    id: 12,
                    name: "Exclusivités UA",
                    cat_id: 3,
                    childrens: false
                }
            ]
        },
        {
            id: 4,
            name: "Femmes",
            childrens: [
                {
                    id: 4,
                    name: "Hauts",
                    cat_id: 3,
                    childrens: []
                },
                {
                    id: 5,
                    name: "Bas",
                    cat_id: 3,
                    childrens: []
                },
                {
                    id: 6,
                    name: "Accesssoires",
                    cat_id: 3,
                    childrens: []
                },
                {
                    id: 7,
                    name: "Sports",
                    cat_id: 3,
                    childrens: []
                },
                {
                    id: 8,
                    name: "Collection femmes",
                    cat_id: 3,
                    childrens: false
                },
                {
                    id: 9,
                    name: "Projet Rock",
                    cat_id: 3,
                    childrens: false
                },
                {
                    id: 10,
                    name: "HOVR™ Running",
                    cat_id: 3,
                    childrens: false
                },
                {
                    id: 11,
                    name: "Collection RUSH",
                    cat_id: 3,
                    childrens: false
                },
                {
                    id: 12,
                    name: "Exclusivités UA",
                    cat_id: 3,
                    childrens: false
                }
            ]
        },
        {
            id: 5,
            name: "Enfants",
            childrens: true
        },
        {
            id: 6,
            name: "Bonnes affaires",
            childrens: [
                {
                    id: 1,
                    name: "Hommes Bonnes affaires",
                    cat_id: 6,
                    childrens: false
                },
                {
                    id: 2,
                    name: "Femmes Bonnes affaires",
                    cat_id: 6,
                    childrens: false
                },
                {
                    id: 3,
                    name: "Enfants Bonnes affaires",
                    cat_id: 6,
                    childrens: false
                }
            ]
        }
    ];
    this.menus[2].childrens.unshift(this.menus[1]);
    this.menus[3].childrens.unshift(this.menus[1]);



    let hamburger = document.querySelector('.hamburger');
    let header = document.querySelector('header');
    this.navigationMobile = this.createElementWithClass("navigation-mobile", 'div');
    let primaryNav = this.createElementWithClass("primary-nav", 'nav');
    let container = this.createElementWithClass("mobile-nav-container", 'div');
    let principalList = this.createUl('Mon compte', 'is-active', false, this.menus);
    container.appendChild(principalList);
    primaryNav.appendChild(container);
    this.navigationMobile.appendChild(primaryNav);
    header.appendChild(this.navigationMobile);
    hamburger.addEventListener('click', (e) => {
        let hamburgerIsActive = document.querySelector('.hamburger.is-active');

        if (!hamburgerIsActive) {
            hamburger.classList.add('is-active');
            self.navigationMobile.classList.add('mobile-nav-open');
            self.build(self.menus);
        } else {
            hamburger.classList.remove('is-active');
            self.navigationMobile.classList.remove('mobile-nav-open');
        }
    });

}

Menu.prototype.build = function (menus) {
    let self = this;
    let listIsActive = this.navigationMobile.querySelector('.is-active');
    let childrens = listIsActive.children;
    [...childrens].forEach(item => {
        item.addEventListener('click', function (e) {
            let cat_id = e.target.closest('li').getAttribute('id');
              if (cat_id) {
                let menu = menus.find(menu => menu.id == cat_id);
                  let ifNextIdUl = item.closest('ul').getAttribute('id');
                  
                  let menu_title = '< Menu Principal';
                  if(ifNextIdUl){
                      let menu = self.menus.find(menu => menu.id == ifNextIdUl);
                      menu_title = '< ' + menu.name;
                  }
                  let lists = self.createUl( menu_title, 'list-item', e.target, menu.childrens);
                  insertAfter(listIsActive, lists);
                  setTimeout(() => {
                      item.closest('ul').className = 'is-prev';
                      item.closest('ul').nextElementSibling.className = "is-active";
                      self.build(menu.childrens);
                  }, 100);
  
                  lists.querySelector('.mobile-nav-user').addEventListener('click', function (e) {
                      e.target.closest('ul').previousElementSibling.classList.remove('is-prev')
                      e.target.closest('ul').previousElementSibling.classList.add('is-active')
                      e.target.closest('ul').remove('is-active')
                  });
                  
              }
              
        });
    });
}

Menu.prototype.createElementWithClass = function (className, type) {
    let div = document.createElement(type);
    div.setAttribute('class', className);
    return div;
}


Menu.prototype.navigationHead = function (title) {
    let div = this.createElementWithClass('mobile-nav-user', 'div');
    let li = document.createElement('li');
    let a = document.createElement('a');
    div.textContent = title;
    li.appendChild(div);
    return li;
}

Menu.prototype.createUl = function (title, className, firstTitle, arr) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.className = "mobile-nav-user";
    a.textContent = title;
    li.appendChild(a)
    ul.appendChild(li);
    if (firstTitle) {
        ul.setAttribute('id', firstTitle.closest('li').getAttribute('id'))
        let liTitle = document.createElement('li');
        let clone = firstTitle.cloneNode(true)
        liTitle.appendChild(clone);
        ul.appendChild(liTitle);
    }

    ul.setAttribute('class', className);
    arr.forEach(item => {
        li = document.createElement('li');
        let a = document.createElement('a');
        a.textContent = item.name;
        if (item.childrens) {
            li.setAttribute('id', item.id)
        }
        li.appendChild(a);
        ul.appendChild(li);
    })
    return ul;
}

function insertAfter(element, newElement) {
    element.parentNode.insertBefore(newElement, element.nextSibling);
}

new Menu();


