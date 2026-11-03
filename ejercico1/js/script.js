// Seleccionar elementos
const titulo = document.getElementById("titulo");
const boton = document.getElementById("btnSaludar");

// Agregar evento al botón
boton.addEventListener("click", function() {
    titulo.textContent = "¡Hola desde JavaScript!";
});