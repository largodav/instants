
//Establecemos el numero de imagenes para los bucles
const num_imagenes = 8;
//contador actualziado
var i = 0;
var carrusel_instants = document.querySelectorAll(".imagens_instants");
var carrusel_play = document.querySelectorAll(".imagens_play");
var carrusel_dioramas = document.querySelectorAll(".imagens_dioramas");
var instants = "";
var play ="";
var dioramas= "";

/** FUNCIONES PARA EL LOOP DE IMAGENES, ESTO HAY QUE REFACTORIZAR */


//Para refactorizar...
async function imagenes(i,loop,contenido){
  // var carrusel_instants = document.querySelectorAll(".imagens_instants");
  //console.log(i);
    if (i > num_imagenes){
      i = 0;
      
    }else{
      loop[0].src =  "./img/"+ contenido + "/imagenes_carrusel/" + contenido +"_" + i + ".jpg";
    }
}
setInterval(function()
{
  if(i>num_imagenes){
    i=0;
  }
  i++;
  imagenes(i,carrusel_instants,"instants");
  imagenes(i,carrusel_dioramas,"dioramas");
  imagenes(i,carrusel_play,"play");

},Math.random() *(2500 - 1000 ) + 1000);



/** FIN DEL LOOP DE IMAGENES */

