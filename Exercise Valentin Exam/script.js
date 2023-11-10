window.onload;
var total=0;
var descuento=false;
function add(producto,tipo,importe){
    total=total+importe;
       switch (tipo){
                case 1:
                    precio=importe*0.96;
                    iva=importe*0.04;
                    tipoIva=4;
                    descuento=true; //Si es un libro activamos el descuento directamente
                break
                case 2:
                    precio=importe*0.90;
                    iva=importe*0.10;
                    tipoIva=10;
                break
                 case 3:
                precio=importe*0.79;
                iva=importe*0.21;
                tipoIva=21;
                break
                 
            }
         
    row.innerHTML+='<p><span>'+producto+'</span>'+precio.toFixed(2)+'</span><span>'+tipoIva.toFixed(2)+'</span> <span>'+iva.toFixed(2)+'<span>'+importe.toFixed(2)+'</span></p><hr>';
   
 
    }
    function calcular(){
       
        if(total>49.99||descuento==true){
            total=total-5.99;
            row.innerHTML+="<p>"+total.toFixed(2)+"</P><hr>";
        }else{
            total=total+5.99;
            row.innerHTML+="<p>"+total.toFixed(2)+"</P><hr>";
        }
    }
    calcular();