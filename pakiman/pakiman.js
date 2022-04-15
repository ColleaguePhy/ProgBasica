class Pakiman
{
    constructor (nombre,vida,ataque)
    {
        this.imagen = new Image();
        this.nombre = nombre;  //This hace referencia a las variables dentro de la clase, es un indicador de la instancia de la clase
        this.vida = vida;
        this.ataque = ataque;
        this.imagen.src = imagenes[this.nombre];
    }

    hablar () //Saltar una alerta en la pantalla
    {
        alert(this.nombre);
    }

    mostrar () //Mostrar la imagen en la pantalla
    {   
        document.body.appendChild(this.imagen); //Agregar una imagen
        document.write('<p>')
        document.write('<strong>'+ this.nombre + '</strong> <br/>');
        document.write('Vida: ' + this.vida + '<br/>');
        document.write('Ataque: ' + this.ataque) + '<br/>';
        document.write('</p>')
        document.write('<hr/>')
    }
}