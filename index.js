//Inicia alert bienvenido
let nombre = prompt("¿Cómo te llamas?").toLowerCase();
let mensajeBienvenida = `¡Hola ${nombre}! Bienvenido al Estudio Contable Lucero Altamirano`;
alert(mensajeBienvenida);
//Termina alert bienvenido

//Inicia section if - else if
let categoriaIf = prompt("Ingrese su categoría (monotributista, responsable inscripto, sujeto exento)").toLowerCase();

if (categoriaIf === "monotributista") {
    alert("Usted es Monotributista");
}
else if (categoriaIf === "responsable inscripto") {
    alert("Usted es Responsable inscripto");
}
else if(categoriaIf === "sujeto exento") {
    alert("Usted es Sujeto exento");
}
else {
    alert("No se reconoce su categoria");
}
//Termina section if - else if

//Inicia section for y while
for (let turno = 1; turno <= 5; turno++) {
    let pedirTurno = prompt("Si usted desea pedir un turno escriba 'si', en caso contrario escriba 'no'").toLowerCase();
    while (pedirTurno !="no"){
        let nombre = prompt("Usted desea reservar un turno. Ingrese su nombre").toLowerCase();
        let mensaje = `${nombre}, usted tiene el turno #${turno}`
        alert(mensaje);
        break;
    }
    break;
}
//Termina section for y while

//Inicia section switch
let categoria = prompt("¿Cuál es su condicion fiscal?").toLowerCase();

switch(categoria) {
    case "monotributista":
    alert("Usted es monotributista");
    break;

    case "responsable inscripto":
    alert("Ustes es responsable iscripto");
    break;

    case "responsable exento":
    alert("Usted es sujeto exento");
    break;

    default:
    alert("No se reconoce su categoria");
    break;
}
//Termina section switch

//Incia section function
function pedirNombreYCategoria() {
    let nombre = prompt("Ingrese su nombre").toLowerCase();
    let categoria = prompt("Ingrese su categoria").toLowerCase();
    let mensaje = `¡Bienvendio ${nombre} al Estudio Contable Lucero Altamirano! Su condicion fiscal es: ${categoria}`;
    alert(mensaje);
}

pedirNombreYCategoria();
//Termina section function

