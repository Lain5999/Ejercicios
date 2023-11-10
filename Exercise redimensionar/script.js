
/*abrir un ventana con un formulario en la cual puede poner una url para que te lleve directamente*/ 
var minimo=550;
window.onload=function(){

  window.addEventListener("resize",mostrar)
 
}
function mostrar(){
  let tamy=innerWidth;
  let tamx=innerHeight;
  
  elemento.innerHTML="anchura:"+tamy+"y altura: "+tamx;
  if(tamy<minimo||tamx<minimo) window.resizeTo(1000,1000);
}
