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
            console.log('if')
        } else {
            console.log('else')
            console.log(this.previousElementSibling)
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

//function affichageSousCat(a){
//    console.log('tt')
//    topVentesContenu.classList.remove('showAccordeon')
//    tendancesHommesContenu.classList.remove('showAccordeon')
//    tendancesFemmesContenu.classList.remove('showAccordeon')
//    tendancesContenu.classList.remove('showAccordeon')
//    switch (a) {
//        case 1:
//            if (topVentesContenu.style.display == 'block'){
//                topVentesContenu.classList.remove('showAccordeon')
//            } else {
//                topVentesContenu.classList.add('showAccordeon')
//            }
//            break;
//        case 2:
//            //////////
//            tendancesHommesContenu.classList.add('showAccordeon')
//            break;
//        case 3:
//            //////////
//            tendancesFemmesContenu.classList.add('showAccordeon')
//            break;
//        case 4:
//            //////////
//            tendancesContenu.classList.add('showAccordeon')
//            break;
//
//    }
//}


//const topVentes = document.querySelector('.categorie_meilleurs_ventes')
//const topVentesContenu = document.querySelector('.meilleurs_ventes_contenu')
//
//const tendancesHommes = document.querySelector('.categorie_tendances_hommes')
//const tendancesHommesContenu = document.querySelector('.tendances_hommes_contenu')
//
//const tendancesFemmes = document.querySelector('.categorie_tendances_femmes')
//const tendancesFemmesContenu = document.querySelector('.tendances_femmes_contenu')
//
//const tendances = document.querySelector('.categorie_tendances')
//const tendancesContenu = document.querySelector('.tendances_contenu')
//
//
//
//topVentes.addEventListener('click', event => {
//    //affichageSousCat(1)
//})
//
//tendancesHommes.addEventListener('click', event => {
//    //affichageSousCat(2)
//})
//
//tendancesFemmes.addEventListener('click', event => {
//    //affichageSousCat(3)
//})
//
//tendances.addEventListener('click', event => {
//    //affichageSousCat(4)
//})
//
//console.log("Fin de accordeon")