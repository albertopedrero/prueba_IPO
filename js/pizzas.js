cartaPizzas = [
    {
        "nombre" : "hawaiana",
        "precio" : 9.50,
        "ingredientes" : ["tomate", "mozarella", "piña", "doble de york"],
        "masa" : ["fina", "normal"],
        "novedad" : false,
        "oferta" : true,
        "imagen" : "/img/hawaiana.png"
    },
    {
        "nombre" : "barbacoa",
        "precio" : 11.50,
        "ingredientes" : ["tomate", "mozarella", "bacon", "pollo", "salsa barbacoa", "doble carne vacuno"],
        "masa" : ["normal"],
        "novedad" : true,
        "oferta" : false,
        "imagen" : "/img/barbacoa.png"
    },
    {
        "nombre" : "Bacon crispy",
        "precio" : 10.50,
        "ingredientes" : ["tomate", "mozarella", "bacon", "bacon crispy", "salsa barbacoa"],
        "masa" : ["fina","normal"],
        "novedad" : true,
        "oferta" : true,
        "imagen" : "/img/baconcrispy.png"
    },
    {
        "nombre" : "Carbonara",
        "precio" : 10.50,
        "ingredientes" : ["tomate", "mozarella", "doble bacon", "champiñón", "salsa carbonara"],
        "masa" : ["fina","normal", "integral"],
        "novedad" : true,
        "oferta" : true,
        "imagen" : "/img/carbonara.png"
    }
];

carritoPizzas = [];

function mostrarPizzas(){
    cartaPizzas.forEach((pizza) => {
        var divPizza = document.createElement('div');
        var nombre = document.createElement('h3');
            nombre.innerHTML = pizza.nombre;
        
        var ingredientes = document.createElement('p');
            ingredientes.classList.add('ingredientes');
            ingredientes.innerHTML = pizza.ingredientes;

        var precio = document.createElement('p');
            precio.classList.add('precio');
            precio.innerHTML = pizza.precio;

        var boton = document.createElement('button');
            boton.classList.add('boton');
            boton.setAttribute('data-nombre', pizza.nombre);
            boton.innerHTML = 'Añadir a carrito';

        divPizza.append(nombre, ingredientes, precio, boton);

        document.querySelector('#listadoPizzas').appendChild(divPizza);

    });

    var botones = document.getElementsByTagName('button');

    for (var i=0; i < botones.length; i++){
        botones[i].addEventListener('click', function(){
            carritoPizzas.push(this.getAttribute('data-nombre'));
            localStorage.setItem('carrito', JSON.stringify(carritoPizzas));
        });
    } 
}

function mostrarPizzasCarrito(){
    var pizzasCompradas = JSON.parse(localStorage.getItem('carrito')) || [];
    pizzasCompradas.forEach(function(pizza) {
        var p = document.createElement('p');
        p.innerHTML = pizza;
        // document.getElementById('listadoCarrito').appendChild(p);
        document.querySelector('#listadoCarrito').appendChild(p);
    })
}