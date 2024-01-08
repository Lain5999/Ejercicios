window.onload = function() {
    document.querySelector("p").onclick = function() {
        document.querySelector("p").classList.add("class3");}

document.querySelector("div").onclick=function(){
    classes= document.querySelector("p").classList;
    document.querySelector("div").innerHTML="clases: "+classes;
}
}