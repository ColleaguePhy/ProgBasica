var imagenes = [];
imagenes['Cauchin'] = 'vaca.png';
imagenes['Pokacho'] = 'pollo.png';
imagenes['Tocinauro'] = 'cerdo.png';



var cauchin = new Pakiman('Cauchin',100,30); //Crea una intancia de pakiman
var pokacho = new Pakiman('Pokacho',80,50);
var tocinauro = new Pakiman('Tocinauro',120,40);

cauchin.mostrar();
pokacho.mostrar();
tocinauro.mostrar();