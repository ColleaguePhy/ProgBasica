var express = require('express'); //require --> busca las librerias intalagas en el proyecto y las tiene a mano
var aplicacion = express(); //invoco la función

aplicacion.get('/', inicio ); //Colocamos la dirección que queremos se abra
aplicacion.get('/cursos',cursos);

function inicio(peticion,resultado)
{
    resultado.send('Este es el Home');
}

function cursos (peticion,resultado)
{
    resultado.send('Estos son los cursos');
}

aplicacion.listen(8989); //Poner a correr 