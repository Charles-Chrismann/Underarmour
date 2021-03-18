function Carrousel(element, options = {}){
    this.element = element;
    this.options = Object.assign({}, {
        slidesToScroll: 1,
        slidesVisible: 1,
        loop: false
    }, options);


    childrens = [].slice.call(element.children);
    
   // let childrens = [...element.children];
    let ratio = childrens.length / this.options.slidesVisible;
    this.root  = this.createDivWithClass('carousel');
    this.currentSlide = 0;
    this.container  = this.createDivWithClass('carousel__container'); 
    this.container.style.width = (ratio * 100) + "%"
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
   
    this.items = childrens.map(child => {
        let item  = this.createDivWithClass('carousel__item'); 
        item.appendChild(child)
        this.container.appendChild(item);
        return item;
    });
    console.log(this.items)
    this.setStyle();
    this.createNavigation();
}


Carrousel.prototype.createDivWithClass = function(className){
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

Carrousel.prototype.setStyle = function(){
    let ratio = this.items.length / this.options.slidesVisible;
    this.container.style.width = (ratio * 100) + "%";
    this.items.forEach(item => item.style.width = ((100 / this.options.slidesVisible) / ratio) + "%");
}


Carrousel.prototype.createNavigation = function(){
    let nextbutton = document.querySelector('.owl-prev');
   // nextbutton.textContent = ">"
    let prevbutton =  document.querySelector('.owl-next');
   // prevbutton.textContent = "<"
    //this.root.appendChild(nextbutton);
    //this.root.appendChild(prevbutton);

    console.log(nextbutton)
    prevbutton.addEventListener('click', this.prev.bind(this));
    nextbutton.addEventListener('click', this.next.bind(this));
}

Carrousel.prototype.next = function(e){
    console.log(this.options.slidesToScroll);
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
        slidesToScroll: 1,
        slidesVisible: 1,
    });
});