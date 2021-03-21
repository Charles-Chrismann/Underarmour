function Carrousel(element, options = {}){
    this.element = element;
    this.options = Object.assign({}, {
        slidesToScroll: 1,
        slidesVisible: 1,
        loop: false
    }, options);
    
    
    childrens = [].slice.call(element.children);
    this.isMobile = true;
    this.isIPad = true;
    this.isDesktop = true;
    this.isFullDesktop = true;
    this.root  = this.createDivWithClass('carousel');
    this.currentSlide = 0;
    this.container  = this.createDivWithClass('carousel__container'); 
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
   
    this.items = childrens.map(child => {
        let item  = this.createDivWithClass('carousel__item'); 
        item.appendChild(child)
        this.container.appendChild(item);
        return item;
    });
    this.createNavigation();

    this.onwindownResize();
    window.addEventListener( 'resize', this.onwindownResize.bind(this), false);
}


Carrousel.prototype.createDivWithClass = function(className){
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

Carrousel.prototype.setStyle = function(){
    let ratio = this.items.length / this.slidesVisible();
    this.container.style.width = (ratio * 100) + "%";
    this.container.style.height = (ratio * 100) + "%";
    this.items.forEach(item => item.style.width = ((100 / this.slidesVisible()) / ratio) + "%");
}

Carrousel.prototype.onwindownResize = function(){
    let mobile = window.innerWidth <= 767;
    let ipad = window.innerWidth >= 768 && window.innerWidth < 870;
    let isDesktop = window.innerWidth >= 870 && window.innerWidth < 992;
    let isFullDesktop = window.innerWidth >= 992;
    if(mobile != this.isMobile){
        this.isMobile = mobile;
        this.setStyle();
    }else if(ipad != this.isIPad){
        this.isIPad = ipad;
        this.setStyle();
    }else if(isDesktop != this.isDesktop){
        this.isDesktop = isDesktop;
        this.setStyle();
    }else if(isFullDesktop != this.isFullDesktop){
        this.isFullDesktop = isFullDesktop;
        this.setStyle();
    }
    
}

Carrousel.prototype.createNavigation = function(){
    let nextbutton = document.querySelector('.owl-next');
    let prevbutton =  document.querySelector('.owl-prev');
    prevbutton.addEventListener('click', this.prev.bind(this));
    nextbutton.addEventListener('click', this.next.bind(this));
}

Carrousel.prototype.slidesToScroll = function(){
    return this.isMobile ? 1 : 
           this.isIPad ? 3 : 
           this.isDesktop ? 4 : 
           this.isFullDesktop ? 5 : 
           this.options.slidesToScroll
}

Carrousel.prototype.slidesVisible = function(){
    return  this.isMobile ? 1 : 
            this.isIPad ? 3 : 
            this.isDesktop ? 4 : 
            this.isFullDesktop ? 5 : 
            this.slidesToScroll
}


Carrousel.prototype.next = function(e){
    this.goToItem(this.currentSlide + this.slidesToScroll());
}

Carrousel.prototype.prev = function(e){
    this.goToItem(this.currentSlide - this.slidesToScroll());
}

Carrousel.prototype.goToItem = function(index){
    if(index < 0){
       index = this.items.length - this.slidesVisible();
     }else if(index >= this.items.length){
       index = 0;
    }
    if(this.items.length % this.slidesToScroll() !== 0){
        let mod = this.items.length % this.slidesToScroll()
        if((this.currentSlide + mod + this.slidesToScroll()) === this.items.length){
            index -= (this.slidesToScroll() - this.items.length % this.slidesToScroll())
        }
    }

    let translateX = index *  -100 / this.items.length;
    this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
    this.currentSlide = index;
}

document.addEventListener("DOMContentLoaded", (event) => {
    new Carrousel(document.querySelector('#carousel'));
});


