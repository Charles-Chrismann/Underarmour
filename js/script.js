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
  