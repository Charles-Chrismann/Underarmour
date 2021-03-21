// function carrousel(elem){
//     var list = document.querySelectorAll(elem);
//     var i=0;
//     let icon;
//     while (i < list.length) {
//       list[i].addEventListener("click", function () {
//         var panel = this.nextElementSibling;
//         icon = this.querySelector("i")
//         if (/showAccordeon/.test(panel.className)) {
//             replaceClass(panel, 'showAccordeon', 'hideAccordeon')
//             replaceClass(icon, 'minus', 'plus')
//         } else {
//             isActive = document.querySelectorAll('.accordeon .showAccordeon')
//             for(let j = 0; j < isActive.length; j++){
//                 active[j].classList.remove("showAccordeon");
//                 active[j].nextElementSibling.style.maxHeight = null;
//               }
//             if (isActive){
//                 let h2 = isActive.previousElementSibling;
//                 let iconActive = h2.querySelector('i');

//                 replaceClass(iconActive, 'minus', 'plus')
//                 replaceClass(isActive, 'showAccordeon', 'hideAccordeon');
//                 isActive.style.height = 0
//             }
            
//             //setTimeout(function(){
//                 replaceClass(icon, 'plus', 'minus')
//                 replaceClass(this.nextElementSibling, 'hideAccordeon', 'showAccordeon')
//             //},1000)
//         }
//       });
//       i++;
//     }
// }

function carrousel(elem){
    var accordeons = document.querySelectorAll(elem);
    let icon;
    accordeons.forEach(accordeon => {
            accordeon.addEventListener("click", function (e) {
            var panel = this.nextElementSibling;
            icon = this.querySelector("i")
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                _replaceClass(icon, 'minus', 'plus');
            }else{
                let isActive = document.querySelector(".accordeon .active");
                if(isActive){
                    _replaceClass(isActive.querySelector('i'), 'minus', 'plus');
                    isActive.classList.remove("active");
                    isActive.nextElementSibling.style.maxHeight = null;
                }
                _replaceClass(icon, 'plus', 'minus');
                this.classList.toggle("active");
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
}

carrousel('.accordeon h2')

