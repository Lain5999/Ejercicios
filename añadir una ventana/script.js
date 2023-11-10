
/*abrir un ventana con un formulario en la cual puede poner una url para que te lleve directamente*/ 

window.onload=function(){
  /* con esto haces que te abra un ventana, para ello tienes que ponerle la url, el nombre, y darle width y height*/
  window.open("file:///D:/Desarrollo%20web%20en%20entorno%20cliente/Primer%20Trimestre/java%20script/Exercise%20redimensionar/index.html","nombre","width=700","height=700");
}
/**/ 
function mostrar(){
  let tamy=innerWidth;
  let tamx=innerHeight;
  
  elemento.innerHTML="anchura:"+tamy+"y altura: "+tamx;
  if(tamy<minimo||tamx<minimo) window.resizeTo(1000,1000);
}