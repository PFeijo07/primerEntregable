let nombre= prompt ("Ingrese su nombre y apellido");
let edad= prompt ("Ingrese su edad");
let dni= prompt ("Ingrese su D.N.I");
let telefono= prompt ("Ingrese su teléfono");
let correo= prompt ("Ingrese su correo electrónico");

//Lista de precios//

let anime= 553;
let disney= 727;
let perro= 350;
let planta= 234;
let gato= 680;
let oso= 900;
let cactus= 237;
let ballena= 150;
let pollito= 175;
let starwars= 1245;
let resultado=0;

//Parametros para cotizar//

let tipo_amigurumi=(prompt("Elija el tipo de amigurumi que desea: \r1- Animé\r2- Disney\r3- Perro\r4- Planta\r5- Gato\r6- Oso\r7- Cactus\r8- Ballena\r9- Pollito\r10- Star Wars"));

let cantidad_amigurumi=(prompt("Elija la cantidad de amigurumis que desea comprar")); 

//Cotizador//

function cotizar(){
switch(tipo_amigurumi){

    case "1":
        resultado=  anime * cantidad_amigurumi;
        break;
    case "2":
        resultado=  disney * cantidad_amigurumi;
        break;
    case "3":
        resultado=  perro * cantidad_amigurumi;
        break;
    case "4":
        resultado=  planta * cantidad_amigurumi;
        break;
    case "5":
        resultado=  gato * cantidad_amigurumi;
        break;
    case "6":
        resultado=  oso * cantidad_amigurumi;
        break;
    case "7":
        resultado=  cactus * cantidad_amigurumi;
        break;
    case "8":
        resultado=  ballena * cantidad_amigurumi;
        break;
    case "9":
        resultado=  pollito * cantidad_amigurumi;
        break;
    case "10":
        resultado=  starwars * cantidad_amigurumi;
        break;           
}
}

cotizar();

alert("Hola!! El precio final de su presupuesto es: $" + resultado + "\r" + "\r" +  "Muchas gracias por su pedido" + "\r" + "Datos personales" + "\r" + "Nombre: " + nombre + "\r" + "Edad: " + edad + "\r" + "D.N.I: " + dni + "\r" + "Teléfono: : " + telefono + "\r" + "Correo electrónico: " + correo );