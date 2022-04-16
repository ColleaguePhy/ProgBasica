class Billetes {
    constructor (valor,cantidad)
    {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

var caja = []; //Dinero en la caja 
var entregado = []; //Dinero entregado
caja.push(new Billetes(50,3));
caja.push(new Billetes(20,2));
caja.push(new Billetes(10,2));

var dinero = document.getElementById('dinero');
var div = 0;
var papeles = 0;

//Identificar cuando se le da retirar
var boton = document.getElementById('retirar');
boton.addEventListener('click',entregarDinero);

var resultado= document.getElementById('resultado');

function entregarDinero()
{
    entregado = [];
    for (var bi of caja)
    {
        if (dinero.value > 0)
        {
            div = Math.floor(dinero.value/bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else 
            {
                papeles = div;
            }
            entregado.push(new Billetes(bi.valor,papeles));
            dinero.value = dinero.value - (papeles * bi.valor);
        }
    }

    if (dinero.value > 0)
    {
        resultado.innerHTML = " ";
        resultado.innerHTML = 'No tengo tanto dinero';
    }
    else
    {
        resultado.innerHTML = " ";
        for (var e of entregado)
        {
            resultado.innerHTML += e.cantidad + ' billetes de $ ' + e.valor + '<br/>';
        }
    }
}