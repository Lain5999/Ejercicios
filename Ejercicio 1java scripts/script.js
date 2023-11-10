a=0;
b="0";
c=false;

console.log("a=",typeof a, ",b=",typeof b,", c=",typeof c);
function cambio(){
    a++;
    b++;
    c++;
    console.log("a="+typeof a+", b="+typeof b+" , c="+typeof c);
}
function constantes(){
   try{b++
}catch(error){
    console.error("se produce un error porque",error.message);
}
} 
   
