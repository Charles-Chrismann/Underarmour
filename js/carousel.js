function Carrousel(element, options = {}){
    this.element = element;
    this.options = Object.assign({}, {
        slidesToScroll: 1,
        slidesVisible: 1,
        loop: false
    }, options);


    childrens = [].slice.call(element.children);
    
   // let childrens = [...element.children];
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
    this.setStyle();
    this.createNavigation();

    this.onwindownResize();
    window.addEventListener( 'resize', this.onwindownResize.bind(this));
}


Carrousel.prototype.createDivWithClass = function(className){
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

Carrousel.prototype.setStyle = function(){
    let ratio = this.items.length / this.slidesVisible();
    this.container.style.width = (ratio * 100) + "%";
    this.items.forEach(item => item.style.width = ((100 / this.slidesVisible()) / ratio) + "%");
}

Carrousel.prototype.slidesToScroll = function(){
    return this.isMobile ? 1 : this.options.slidesToScroll;
}

Carrousel.prototype.slidesVisible = function(){
    return this.isMobile ? 1 : this.options.slidesVisible;
}

Carrousel.prototype.onwindownResize = function(){
    let mobile = window.innerWidth < 768;
    let ipad = window.innerWidth >= 768 && window.innerWidth < 870;
    let isDesktop = window.innerWidth >= 870 && window.innerWidth < 992;;
    let isFullDesktop = window.innerWidth >= 992;
    if(mobile != this.isMobile){
        this.isMobile = mobile;
        this.setStyle();
    }else if(ipad != this.isIPad){
        this.isIPad = ipad;
        this.setStyle();
    }else if(ipad != this.isDesktop){
        this.isDesktop = isDesktop;
        this.setStyle();
    }else if(isFullDesktop != this.isFullDesktop){
        this.isFullDesktop = isFullDesktop;
        this.setStyle();
    }
}



Carrousel.prototype.createNavigation = function(){
    let nextbutton = document.querySelector('.owl-next');
   // nextbutton.textContent = ">"
    let prevbutton =  document.querySelector('.owl-prev');
   // prevbutton.textContent = "<"
    //this.root.appendChild(nextbutton);
    //this.root.appendChild(prevbutton);

    prevbutton.addEventListener('click', this.prev.bind(this));
    nextbutton.addEventListener('click', this.next.bind(this));
}

Carrousel.prototype.slidesToScroll = function(){
    console.log(this.isMobile)
    return this.isMobile ? 1 : 
           this.isIPad ? 3 : 
           this.isDesktop ? 4 : 
           this.isFullDesktop ? 5 : 
           this.options.slidesToScroll;
}

Carrousel.prototype.slidesVisible = function(){
    return  this.isMobile ? 1 : 
            this.isIPad ? 3 : 
            this.isDesktop ? 4 : 
            this.isFullDesktop ? 5 : 
            this.options.slidesToScroll;
}


Carrousel.prototype.next = function(e){
    this.goToItem(this.currentSlide + this.options.slidesToScroll);
}

Carrousel.prototype.prev = function(e){
    this.goToItem(this.currentSlide - this.options.slidesToScroll);
}

Carrousel.prototype.goToItem = function(index){
    if(index < 0){
       index = this.items.length - this.options.slidesVisible;
     }else if(index >= this.items.length || this.items[this.currentSlide + this.options.slidesVisible] === undefined){
       index = 0;
    }

    let translateX = index *  -100 / this.items.length;
    this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)';
    this.currentSlide = index;
}

//debugger;
document.addEventListener("DOMContentLoaded", (event) => {
    new Carrousel(document.querySelector('#carousel'), {
                    slidesToScroll: 3,
                    slidesVisible: 3
                });
});
// let options = {};
// let tmp = {};
// function resizeCarousel(){
   
//     if(window.innerWidth < 768){
//         options = {
//             slidesToScroll: 1,
//             slidesVisible: 1
//         }
//     }else if(window.innerWidth >= 768 && window.innerWidth < 870){
//         options = {
//             slidesToScroll: 3,
//             slidesVisible: 3
//         }
//     }else if(window.innerWidth > 870){
//         options = {
//             slidesToScroll: 4,
//             slidesVisible: 4
//         }
//     }
//     if(tmp.slidesVisible != options.slidesVisible){
        
//     }
  
//     tmp =  window.innerWidth;
    
// }

// resizeCarousel();
//window.addEventListener( 'resize', resizeCarousel);
