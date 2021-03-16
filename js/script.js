<<<<<<< HEAD
let element = document.querySelector(".openCookie")
let cookie = document.querySelector(".footer_cookie")
let cookieClose = document.querySelector(".popclose")

console.log(element)
element.addEventListener ('click', event => {
    console.log(event);
 cookie.classList.toggle("hide")   
    
  })

 
  cookieClose.addEventListener ('click', event => {
    console.log(event);
    cookie.style.display='none';
    
  })
  
=======
let plusOuMoin = 0

function afficherSousCat(event){
    //document.querySelector('.contenu').classList.add('show')
    plusOuMoin++
    let isActive = document.querySelector('.fas.fa-minus')
    if (plusOuMoin % 2 == 0){
        event.target.classList.remove('fa-plus')
        event.target.classList.add('fa-minus')
    } else {
        event.target.classList.remove('fa-minus')
        event.target.classList.add('fa-plus')
    }
}


let titlesAccordeon = document.querySelectorAll(".accordeon h2")
for (let i=0; i < titlesAccordeon.length; i++){
    console.log(i);
    titlesAccordeon[i].addEventListener('click',afficherSousCat)
}


console.log("fin du js")
>>>>>>> e85bcfbe0c14f0cc59f13651ba2111a6b98b308c
