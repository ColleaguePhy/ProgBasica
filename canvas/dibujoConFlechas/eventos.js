var teclas = {
 UP:38,
 DOWN: 40 ,
 LEFT: 37 ,
 RIGHT: 39
}; 

document.addEventListener('keyup',dibujarTeclado ); //Identificar cuando se activa una tecla (en todo el documento)
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');
var x = 150;
var y = 150;
var colorcito = 'red'
var movimiento = 10

function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath();   // Empezar un trazo
    lienzo.strokeStyle = color; // Permite elegir el color del trazo
    lienzo.lineWidth = 1
    lienzo.moveTo(xinicial,yinicial); // Mover a
    lienzo.lineTo(xfinal,yfinal);  // Dibujar una línea hasta (x,y)
    lienzo.stroke(); // Dibuja la línea con el estilo designado
    lienzo.closePath(); //Finaliza el trazo (levanta el Lápiz)
    
}
function dibujarTeclado(evento)
{
    switch (evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
            y = y -movimiento
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
            y = y + movimiento
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
            x = x - movimiento
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
            x = x + movimiento
        break;
        default:
    }
}