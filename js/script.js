let plusOuMoin = 0

function afficherSousCat(event){
    //document.querySelector('.contenu').classList.add('show')
    let i2 = document.querySelector('.fa-plus')
    console.log(i2)
    plusOuMoin++
    let isActive = document.querySelector('.fas.fa-minus')
    if (plusOuMoin % 2 ==0){
        i2.classList.remove('fa-plus')
        i2.classList.add('fa-minus')
    } else {
        i2.classList.remove('fa-minus')
        i2.classList.add('fa-plus')
    }
}

listeCat = [".categorie_meilleurs_ventes", ".categorie_tendances_hommes", ".categorie_tendances_femmes", ".categorie_tendances"]

//let titlesAccordeon = document.querySelectorAll(".accordeon div")
for (let i=0; i < listeCat.length; i++){
    console.log(i);
    document.querySelector(listeCat[i]).addEventListener('click',afficherSousCat)
}


console.log("fin du js")