let body = document.body
console.log(body);

//1 
let myDiv = document.querySelector('div');
let myP = document.querySelector('p');
let myTitle = document.querySelector('h1');
let myTitleSecond = document.querySelector('h2');


body.addEventListener('click', (e) => {
    let cible = e.target
    if(cible == myDiv){
        cible.style = 'border: solid red 5px'
    } else if(cible == myP){
        cible.style = 'color: red; font-weight: bold;'
    } else if(cible == myTitle){
        cible.style = 'text-decoration: underline; background-color: yellow;'
    } else if(cible == myTitleSecond){
        let longueur = cible.innerText.length;
        cible.innerText = cible.innerText.slice(0, (longueur - 1));
    }
})


//2
let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
let secondP = document.querySelectorAll('p')[1];
let mySection = document.querySelector('section');
mySection.style = 'height: 50px; width 100%;'

mySection.addEventListener('mouseenter', () => {
    mySection.innerText = text
})

mySection.addEventListener('mouseout', () => {
    mySection.innerText = ''
})


