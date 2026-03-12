const formulario = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(e){

e.preventDefault();

const nombre = document.getElementById("nombre").value.trim();
const edad = parseInt(document.getElementById("edad").value.trim());
const contacto = document.getElementById("contacto").value.trim();

const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const telefonoRegex = /^[0-9]{10}$/;

mensaje.textContent = "";
mensaje.style.color = "red";


/* VALIDAR NOMBRE */

if(!nombreRegex.test(nombre)){
mensaje.textContent = "El nombre solo debe contener letras";
return;
}


/* VALIDAR EDAD */

if(edad <= 12 || isNaN(edad)){
mensaje.textContent = "La edad debe ser mayor a 12 años";
return;
}


/* VALIDAR CONTACTO */

if(!telefonoRegex.test(contacto)){
mensaje.textContent = "El número de contacto debe tener exactamente 10 dígitos";
return;
}


/* TODO CORRECTO */

mensaje.textContent = "Inscripción realizada correctamente";
mensaje.style.color = "green";

formulario.reset();

});
