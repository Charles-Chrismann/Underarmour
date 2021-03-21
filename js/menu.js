function Menu() {
    this.menus = [];
    this.defaultMenus = [];
    this.hamburger = document.querySelector('.hamburger');
    this.hamburger.addEventListener('click', this.handleBurgerMenu.bind(this));
    fetchData("/json/menu.json").then(data => {
        this.menus = this.mergeData(data.menu_link);
        this.defaultMenus = data.default_menu;
        return  this.menus;
    }).then(data => {
        this.init(data);
    }).finally(() => {
        this.onResize();
        window.addEventListener( 'resize', this.onResize.bind(this));
    }); 
} 

Menu.prototype.init = function (data) {
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

