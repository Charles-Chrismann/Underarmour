
function Menu(){
    this.menus = [
        {
            id: 1,
            name: "Nouveatés",
            childrens: true
        },
        {
            id: 2,
            name: "Chaussures",
            childrens: true
        },
        {
            id: 3,
            name: "Hommes",
            childrens: true
        },
        {
            id: 4,
            name: "Femmes",
            childrens: true
        },
        {
            id: 5,
            name: "Enfants",
            childrens: true
        },
        {
            id: 6,
            name: "Bonnes affaires",
            childrens: true
        }
    ];

    this.categories = [
        {
            id: 1,
            name: "Nouveatés",
            cat_id: 1,
            childrens: false
        },
        {
            id: 2,
            name: "Chaussures",
            cat_id: 1,
            childrens: false
        },
        {
            id: 3,
            name: "Hommes",
            cat_id: 1,
            childrens: false
        },
        {
            id: 4,
            name: "Femmes",
            cat_id: 1,
            childrens: false
        },
        {
            id: 5,
            name: "hommes Bonnes affaires",
            cat_id: 6,
            childrens: false
        },
        {
            id: 6,
            name: "Femme Bonnes affaires",
            cat_id: 6,
            childrens: false
        },
        {
            id: 7,
            name: "Femme Bonnes affaires",
            cat_id: 6,
            childrens: false
        },
    ];

    let hamburger = document.querySelector('.hamburger');
    let header = document.querySelector('header');
    let navigationMobile =  this.createElementWithClass("navigation-mobile", 'div');
    let primaryNav =  this.createElementWithClass("primary-nav", 'nav');
    let container =  this.createElementWithClass("mobile-nav-container", 'div');
    let principalList =  this.createUl('Mon compte', 'is-active', this.menus);
    container.appendChild(principalList);
    primaryNav.appendChild(container);
    navigationMobile.appendChild(primaryNav);
    header.appendChild(navigationMobile);
    let self = this;
    hamburger.addEventListener('click', (e) => {
        let hamburgerIsActive = document.querySelector('.hamburger.is-active');
       
        if(!hamburgerIsActive){
            hamburger.classList.add('is-active');
            navigationMobile.classList.add('mobile-nav-open');
            self.test(navigationMobile);
           
        }else{
            hamburger.classList.remove('is-active');
            navigationMobile.classList.remove('mobile-nav-open');
        }
    });

  //  insertAfter(header, navigationMobile);
}

function insertAfter(element, newElement) {
    element.parentNode.insertBefore(newElement, element.nextSibling);
}

Menu.prototype.test = function(navigationMobile){
    let self = this;
    let listIsActive = navigationMobile.querySelector('.is-active');
    let current = 1;
    let childrens = listIsActive.children;
        [...childrens].forEach(item => {
            item.addEventListener('click', function(e){
                let cat_id = e.target.closest('li').getAttribute('id');
                let listFilter = self.categories.filter(list => list.cat_id == cat_id);
                let lists = self.createUl(e.target.textContent, 'list-item', listFilter);
                current = cat_id;
               
               if(cat_id){
                insertAfter(listIsActive, lists);
                item.closest('ul').className = 'is-prev';
                item.closest('ul').nextElementSibling.className = "is-active";
                self.test(navigationMobile);
               }else{
                   
               }
             
               item.closest('ul').nextElementSibling.querySelector('li:first-child a').textContent =
               "< " + e.target.closest('ul').querySelector(".mobile-nav-user a").textContent
               //navigationMobile.querySelector('li:first-child').textContent = "tes"
                
                // item.closest('ul').nextElementSibling
                //     .querySelector('li:first-child a')
                //     .textContent = "< " + item.closest('ul').nextElementSibling
                //console.log(item.closest('ul').nextElementSibling.previousElementSibling.querySelector('.mobile-nav-user'));
                //self.test(navigationMobile);
            });
    });
}

Menu.prototype.createElementWithClass = function(className, type){
    let div  = document.createElement(type);
    div.setAttribute('class', className);
    return div;
}


Menu.prototype.navigationHead = function(title){
    let div  = this.createElementWithClass('mobile-nav-user', 'div');
    let li  = document.createElement('li');
    let a  = document.createElement('a');
    div.textContent = title;
    li.appendChild(div);
    return li;
}

Menu.prototype.createUl = function(title, className, arr){
    //let liNav  = this.navigationHead('Mon Compte');
    let ul  = document.createElement('ul');
    let li  = document.createElement('li');
    let a  = document.createElement('a');
    li.className = "mobile-nav-user";
    a.textContent = title;
    li.appendChild(a)
    ul.appendChild(li)
    //ul.appendChild(li);
    ul.setAttribute('class', className);
    arr.forEach(item => {
        li  = document.createElement('li');
        let a  = document.createElement('a');
        a.textContent = item.name;
        console.log(item.childrens)
        if(item.childrens){
            li.setAttribute('id', item.id)
        }
        li.appendChild(a);
        ul.appendChild(li);
    })
    return ul;
}

new Menu();

