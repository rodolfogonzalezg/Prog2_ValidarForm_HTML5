//Conociendo el id
formulario = document.getElementById("miFormulario");
formulario2 = document.forms["miFormulario"];

//conociendo el numero del formulario de la pagina
formulario3 = document.getElementsByTagName("form")[0];
formulario4 = document.forms[0];

//seleccionar elementos de un formulario
//.elemens[] devuelve un array con todos los inputs del formulario
//getElementById[<id del elemento>] devuelve un elemento con un id determinado
//getElementsByTagName deveuelve un array de elementos con un tipo de etiqueta especifica (input, select, button, ... , etc)
//getElementsByName("nombre del elemento") devuelve un array de elemento con un name especifico (ejemplo, radiobutton)

window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    limpiarError(elemento);
    if (elemento.value == "") {
        alert("Debe introducir un nombre");
        error(elemento);
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    limpiarError(elemento);
    if (isNaN(elemento.value)) {
        alert("El telefono debe ser númerico");
        error(elemento);
        return false;
    }
    return true;
}

function validaFecha() {
    dia = document.getElementById("dia").value;
    mes = document.getElementById("mes").value;
    anio = document.getElementById("anio").value;
    var fecha = new Date(anio, mes, dia);
    if (isNaN(fecha)) {
        alert("Los datos introducidos para la fecha son incorrectos");
        return false;
    }
    return true;
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento) {
    elemento.className = "";
}

function validaMayor() {
    var elemento = document.getElementById("mayor");
    if (!elemento.checked) {
        alert("Debe ser mayor de edad");
        return false;
    }
    return true;
}


function validar(evento) {
    if (validaNombre() && validaTelefono() && validaFecha() && validaMayor() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true;
    } else {
        evento.preventDefault();
        return false;
    }
}