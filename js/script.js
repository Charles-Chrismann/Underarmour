let elements = document.querySelectorAll(".openCookie")
let cookie = document.querySelector(".footer_cookie")
let cookieParent = document.querySelector(".footer_cookie_parent")
let cookieClose = document.querySelector(".popclose")
let spinner = document.querySelector(".spiner")

let ctt;
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.addEventListener ('click', event => {   
    event.preventDefault()
        cookie.classList.remove("hide")
        ctt =  setTimeout(function(){  
            spinner.classList.add("hide") 
            cookieParent.classList.remove("hide")
            // cookie.classList.toggle("hide")
           },2000)
       
      } ); 
}
clearTimeout(ctt);

 cookieClose.addEventListener ('click', event => {
    console.log(event);
    spinner.style.display='none';
    cookie.style.display='none';
    
 })




// en-tête //

let fas = document.querySelector(".fas");
let langue_list = document.querySelector(".langue_list");
let langue = document.querySelector(".langue");

fas.addEventListener("mouseover", event => {
    langue_list.classList.toggle("hide"); 

})

langue_list.addEventListener("mouseout", event => {
    langue_list.classList.toggle("hide"); 
})