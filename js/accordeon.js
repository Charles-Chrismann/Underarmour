function carrousel(elem){
    var list = document.querySelectorAll(elem);
    var i=0;
    let icon;
    while (i < list.length) {
      list[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        icon = this.querySelector("i")
        if (/showAccordeon/.test(panel.className)) {
            replaceClass(panel, 'showAccordeon', 'hideAccordeon')
            replaceClass(icon, 'minus', 'plus')
        } else {
            isActive = document.querySelector('.accordeon .showAccordeon')
            if (isActive){
                let h2 = isActive.previousElementSibling;
                let iconActive = h2.querySelector('i')
                replaceClass(iconActive, 'minus', 'plus')
                replaceClass(isActive, 'showAccordeon', 'hideAccordeon')
            }
            
            //setTimeout(function(){
                replaceClass(icon, 'plus', 'minus')
                replaceClass(this.nextElementSibling, 'hideAccordeon', 'showAccordeon')
            //},1000)
        }
      });
      i++;
    }
}


function replaceClass(elem, prevClass, newClass){
    let str = prevClass;
    let strReGex = new RegExp(str,"gi");
    elem.className = elem.className.replace(strReGex, newClass);
}


carrousel('.accordeon h2')

