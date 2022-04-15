var d = document.getElementById("dibujos");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();   // Empezar un trazo
    lienzo.strokeStyle = color; // Permite elegir el color del trazo
    lienzo.moveTo(xinicial,yinicial); // Mover a
    lienzo.lineTo(xfinal,yfinal);  // Dibujar una línea hasta (x,y)
    lienzo.stroke(); // Dibuja la línea con el estilo designado
    lienzo.closePath(); //Finaliza el trazo (levanta el Lápiz)
    
}

dibujarLinea('red',100,100,100,200)
dibujarLinea('blue',50,150,150,150)