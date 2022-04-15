var vp = document.getElementById('villaplatzi');
var papel = vp.getContext('2d');

var teclas = {
    UP:38,
    DOWN: 40 ,
    LEFT: 37 ,
    RIGHT: 39
   };

var colorcito = 'red'
var movimiento = 10

var fondo = {
    url: 'tile.png',
    cargaOk: false
};

var vaca = {
    url:'vaca.png',
    cargaOk: false,
    x: [],
    y: []
};

var cerdo = {
    url:'cerdo.png',
    cargaOk:false,
    x:aleatorio(50,450),
    y:aleatorio(50,450)
};

var pollo = {
    url:'pollo.png',
    cargaOk: false,
    x: [],
    y: []
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener('load',cargarFondo); //Cargar la imagen

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener('load',cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener('load',cargarCerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener('load',cargarPollos);

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOk = true;
    dibujar();
}

function dibujar() //Dibja cuando ya se ha cargado
{
    if(fondo.cargaOk == true)
    {
        papel.drawImage(fondo.objeto,0,0); //Dibija el fondo
    }
    if(vaca.cargaOk == true) //Varifica si la vaca esta cargada
    {
        for(var v = 0; v<3; v++){ //Dibuja n vacas en posiciones aleatorias
            var x = aleatorio(0,5);
            var y = aleatorio(0,5);
            vaca.x[v] = x;
            vaca.y[v] = y;
            papel.drawImage(vaca.objeto,x*80,y*80);
        }
    }
    if(cerdo.cargaOk == true)
    {
        papel.drawImage(cerdo.objeto,cerdo.x,cerdo.y);
    }
    if(pollo.cargaOk == true)
    {
        for(var v = 0; v<4; v++){ //Dibuja n vacas en posiciones aleatorias
            var x = aleatorio(0,5);
            var y = aleatorio(0,5);
            pollo.x[v] = x;
            pollo.y[v] = y;
            papel.drawImage(pollo.objeto,x*80,y*80);
        }
    }
}

function dibujarDeNuevo()
{
    if(fondo.cargaOk == true)
    {
        papel.drawImage(fondo.objeto,0,0); //Dibija el fondo
    }
    if(vaca.cargaOk == true) //Varifica si la vaca esta cargada
    {
        for(var v = 0; v<3; v++){ //Dibuja n vacas en posiciones aleatorias
            papel.drawImage(vaca.objeto,vaca.x[v]*80,vaca.y[v]*80);
        }
    }
    if(cerdo.cargaOk == true)
    {
        papel.drawImage(cerdo.objeto,cerdo.x,cerdo.y);
    }
    if(pollo.cargaOk == true)
    {
        for(var v = 0; v<4; v++){ //Dibuja n vacas en posiciones aleatorias
            papel.drawImage(pollo.objeto,pollo.x[v]*80,pollo.y[v]*80);
        }
    }
}

function aleatorio(min,max)
{
    resultado = Math.floor(Math.random() *(max - min + 1)) + min; //Obtener un número aleatorioo
    return resultado
}

document.addEventListener('keyup',dibujarTeclado ); //Identificar cuando se activa una tecla (en todo el documento)


function dibujarTeclado(evento)
{
    switch (evento.keyCode)
    {
        case teclas.UP:
            cerdo.y = cerdo.y - movimiento;
            dibujarDeNuevo();
        break;
        case teclas.DOWN:
            cerdo.y = cerdo.y + movimiento;
            dibujarDeNuevo();
        break;
        case teclas.LEFT:
            cerdo.x = cerdo.x - movimiento;
            dibujarDeNuevo();
        break;
        case teclas.RIGHT:
            cerdo.x = cerdo.x + movimiento;
            dibujarDeNuevo();
        break;
        default:
    }
}

