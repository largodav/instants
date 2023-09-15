const card = document.querySelectorAll(".card");

// console.log(card)
for (let i=0 ; i < card.length; i++){
  card[i].addEventListener( 'click',function() {
	// console.log("card pulsada");
  card[i].classList.toggle('is-flipped');
  });
}
