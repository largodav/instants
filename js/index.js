
const num_imagenes = 8;
var i = 0;

function imagenes(i){
  var carrusel_instants = document.querySelectorAll(".imagens_instants");
  console.log(i);
 if (i > num_imagenes){
  i = 0;
  
 }else{
  carrusel_instants[0].src =  "./img/instants/imagenes_carrusel/instants_" + i + ".jpg";
}


}
setInterval(function()
{
  if(i>num_imagenes){
    i=0;
  }
  i++;
  imagenes(i);

},2500);


