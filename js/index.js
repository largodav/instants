// const card = document.querySelectorAll(".card");
// const card_frontal = document.querySelectorAll(".card__face--front");
// const card_back = document.querySelectorAll(".card__face--back");

// // console.log(card)
// for (let i=0 ; i < card.length; i++){
//   card[i].addEventListener( 'click',function() {
// 	// console.log("card pulsada");
//   card[i].classList.toggle('is-flipped');
//   card_frontal[i].classList.toggle('ocultar');
//   card_back[i].classList.remove('ocultar');
//   card_back[i].classList.toggle('mostrar');
//   });
// }

//Almacenamos el contenedor de las imagenes (el img)
// var carrusel_instants = document.querySelectorAll(".imagens_instants");

// console.log(carrusel_instants[0]);

var i = 0;

function imagenes(i){
  var carrusel_instants = document.querySelectorAll(".imagens_instants");
  console.log(i);
 carrusel_instants[0].src =  "./img/instants/imagenes_carrusel/instants_" + i + ".jpg";
}
setInterval(function()
{
  i++;
  imagenes(i);
  // console.log(carrusel_instants[i]); 
  // carrusel_instants[i].src = "./img/instants/imagenes_carrusel/instants_" + i + ".jpg";
  // i = i + 1;
},2500);


