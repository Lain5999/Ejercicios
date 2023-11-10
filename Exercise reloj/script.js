var tminutos=1;
var tsegundos=12;
var thoras=0;

var aminutos=1;
var asegundos=20;
var ahoras=0;

window.onload=function(){
    contador();
}
function contador(){
    if(tsegundos<59){
        tsegundos++;
    }else{
        tsegundos=0;
        tminutos++
    }
    if(tminutos == 59){
        tminutos=0;
        thoras++;
    }

    miIntervalo=setTimeout (contador,1000);
    horas.innerHTML=thoras;
    minutos.innerHTML=tminutos;
    segundos.innerHTML=tsegundos;

    if(thoras==ahoras&&tminutos==aminutos&&tsegundos==asegundos){
        reloj.innerHTML="BOOOOOOOM";
        clearTimeout(miIntervalo);
    }
    }



