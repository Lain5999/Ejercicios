var num1=prompt("dime el número 1");
var num2=prompt("dime el número 2");
var num3=prompt("dime el número 3");
if(num1>num2 && num1>num3){
    alert(num1+ " es el mayor");
}else if(num2>num1 && num2>num3){
    alert(num2 +" es el mayor");
}else{
    alert(num3+" es el mayor");
}