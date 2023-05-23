// L'un des objectifs est de faire en sorte que, lorsqu'on mouseover la div "div-child" le text encadré devient noir et lorsqu'on le mouseout il revient à l'état initial

/*   BROUILLON

elem.forEach(elem => {elem.style.borderColor ="black";});
elem.forEach(elem => {elem.style.color ="black";});
    
    
elem.forEach(elem => {elem.style.backgroundColor ="black";});
*/

div_child = document.querySelectorAll(".div-child");
elem = document.querySelectorAll(".div-child-text");


div_child.forEach(div_child => {
	div_child.addEventListener("mouseover", ()=>{
  	elem.style.borderColor ="black";
    elem.style.color ="black";
  });
});

div_child.forEach(div_child => {
	div_child.addEventListener("mouseout", ()=>{
  	elem.style.borderColor ="white";
    elem.style.color ="white";
  });
});

/*//////////////////////////////////////////////////////////////////////////////////////////

Au clique d'un élément du menu, son contenu s'affiche

//////////////////////////////////////////////////////////////////////////////////////////*/

/*les div qui servent d'écran*/
let un, deux, trois, quatre;
un = document.getElementById('un');
deux = document.getElementById('deux');
trois = document.getElementById('trois');
quatre = document.getElementById('quatre');

/*les tags 'a' qui servent de bouton*/
let bouton_1, bouton_2, bouton_3, bouton_4;
bouton_1 = document.getElementById('bouton-1');
bouton_2 = document.getElementById('bouton-2');
bouton_3 = document.getElementById('bouton-3');
bouton_4 = document.getElementById('bouton-4');

/* le 'un' sera le premier en a être affiché */
un.style.display="inline-block";


bouton_1.addEventListener('click', ()=>{
    un.style.display="inline-block";
    deux.style.display="none";
    trois.style.display="none";
    quatre.style.display="none";
});

bouton_2.addEventListener('click', ()=>{
    un.style.display="none";
    deux.style.display="inline-block";
    trois.style.display="none";
    quatre.style.display="none";
});

bouton_3.addEventListener('click', ()=>{
    un.style.display="none";
    deux.style.display="none";
    trois.style.display="inline-block";
    quatre.style.display="none";
});

bouton_4.addEventListener('click', ()=>{
    un.style.display="none";
    deux.style.display="none";
    trois.style.display="none";
    quatre.style.display="inline-block";
});


/* deux.style.display ="block"; */
