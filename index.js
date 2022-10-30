//Inicia alert bienvenido
let nombre = prompt("¿Cómo te llamas?");
let mensajeBienvenida = `¡Hola ${nombre}! Bienvenido al Estudio Contable Lucero Altamirano`;
alert(mensajeBienvenida);
//Termina alert bienvenido

//Inicia section if - else if
let categoriaIf = prompt("Ingrese su categoría");

if (categoriaIf === "Monotributista") {
    alert("Usted es monotributista");
}
else if (categoriaIf === "Responsable inscripto") {
    alert("Usted es Responsable inscripto");
}
else if(categoriaIf === "Responsable exento") {
    alert("Usted es Resonsable exento");
}
else {
    alert("No se reconoce su categoria");
}
//Termina section if - else if

//Inicia section for y while
for (let turno = 1; turno <= 5; turno++) {
    let pedirTurno = prompt("Si usted desea pedir un turno escriba 'si', en caso contrario escriba 'no'");
    while (pedirTurno !="no"){
        let nombre = prompt("Usted desea reservar un turno. Ingrese su nombre");
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
    alert("Usted es responsable exento");
    break;

    default:
    alert("No se reconoce su categoria");
    break;
}
//Termina section switch

//Incia section function
function pedirNombreYCategoria() {
    let nombre = prompt("Ingrese su nombre");
    let categoria = prompt("Ingrese su categoria");
    let mensaje = `¡Bienvendio ${nombre} al Estudio Contable Lucero Altamirano! Su condicion fiscal es: ${categoria}`;
    alert(mensaje);
}

pedirNombreYCategoria();
//Termina section function

