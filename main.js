//recuperation de nos boites question reponses
//container comprend tout nos elements avec la classe 'container' et puis faire une boucle dessus
const container=document.getElementsByClassName('container');

// console.log(container.length);
//pour chaque container,on ajoute un ecouteur au clique, et ajouter la classe active qu'on a stylé dasn le css, toggle qui permet de le retirer et lajout au click
for( let i = 0; i < container.length; i++){
    container[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}