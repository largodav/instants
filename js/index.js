const card = document.querySelectorAll(".card");
const card_frontal = document.querySelectorAll(".card__face--front");
const card_back = document.querySelectorAll(".card__face--back");

// console.log(card)
for (let i=0 ; i < card.length; i++){
  card[i].addEventListener( 'click',function() {
	// console.log("card pulsada");
  card[i].classList.toggle('is-flipped');
  card_frontal[i].classList.toggle('ocultar');
  card_back[i].classList.remove('ocultar');
  card_back[i].classList.toggle('mostrar');
  });
}
