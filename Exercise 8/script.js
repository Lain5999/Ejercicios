function preguntas(){

let llueve=confirm("llueve");
let paraguas=confirm("llevo gorro?");
let gorro=confirm("paraguas?");
let salgo=confirm("sales");
let meMojo= lluvia && salgo &&!(paraguas||gorro);
alert(meMojo);
if(meMojo=true){
  alert("no me mojo");
}else{
  alert("me mojo");
}
/*alert(memMojo?"me mojo":"no me mejo");*/
}
/*window.onload=function()*/