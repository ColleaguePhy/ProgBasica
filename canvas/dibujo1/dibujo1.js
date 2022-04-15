var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('boton_dibujar');
boton.addEventListener('click',dibujoPorClick); //Identificar cuando hay un evento

var d = document.getElementById("dibujos");
var lienzo = d.getContext("2d");
var colorsito = "skyblue";
var ancho = d.width;



for(l = 0; l < lineas; l++)
{
  yf = yi = (ancho/(lineas-1)) * l
  xi = xf = (ancho/(lineas-1)) * l;
  xf2 = xi2 = ancho - (l * (ancho/(lineas-1)));
  dibujarLinea(colorsito, 0, yi, xf, ancho);
  dibujarLinea(colorsito, xi, 0, ancho, yf);
  dibujarLinea(colorsito, ancho, yi, xf2, ancho);
  dibujarLinea(colorsito, xi2, 0, 0, yf);
  console.log("linea" + l);
}

//---------------------------------------------------------------------------------------------------
function dibujoPorClick ()
{
    lineas = texto.value;
    for(l = 0; l < lineas; l++)
    {
      yf = yi = (300/(lineas-1)) * l
      xi = xf = (300/(lineas-1)) * l;
      xf2 = xi2 = 300 - (l * (300/(lineas-1)));
      dibujarLinea(colorsito, 0, yi, xf, 300);
      dibujarLinea(colorsito, xi, 0, 300, yf);
      dibujarLinea(colorsito, 300, yi, xf2, 300);
      dibujarLinea(colorsito, xi2, 0, 0, yf);
      console.log("linea" + l);
    }
    
}


function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();   // Empezar un trazo
    lienzo.strokeStyle = color; // Permite elegir el color del trazo
    lienzo.moveTo(xinicial,yinicial); // Mover a
    lienzo.lineTo(xfinal,yfinal);  // Dibujar una línea hasta (x,y)
    lienzo.stroke(); // Dibuja la línea con el estilo designado
    lienzo.closePath(); //Finaliza el trazo (levanta el Lápiz)
    
}
