// Array de imágenes y descripciones
const fotos = [
  { src: "img/foto1.jpg", descripcion: "Un recuerdo que vive en el corazón" },
  { src: "img/foto2.jpg", descripcion: "Momentos que nunca olvidaremos" },
  { src: "img/foto3.jpg", descripcion: "Su cariño nos acompaña" },
  { src: "img/foto4.jpg", descripcion: "Siempre presente en nuestra memoria" }
];

// Variables y elementos del DOM
let indice = 0;
const imagenOfrenda = document.getElementById("imagenOfrenda");
const descripcion = document.getElementById("descripcion");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const puntosContenedor = document.getElementById("puntos");
const audio = document.getElementById("musica");
const btnMusica = document.getElementById("btnMusica");
const iconoMusica = document.getElementById("iconoMusica");
const textoMusica = document.getElementById("textoMusica");

// Crear indicadores (puntos)
function crearIndicadores() {
  fotos.forEach((_, i) => {
    const punto = document.createElement("span");
    punto.classList.add("punto");
    punto.addEventListener("click", () => mostrarFoto(i));
    puntosContenedor.appendChild(punto);
  });
}

// Mostrar foto según el índice
function mostrarFoto(nuevoIndice) {
  indice = (nuevoIndice + fotos.length) % fotos.length;
  imagenOfrenda.src = fotos[indice].src;
  descripcion.textContent = fotos[indice].descripcion;
  actualizarIndicadores();
}

// Actualizar indicadores
function actualizarIndicadores() {
  const todosLosPuntos = document.querySelectorAll(".punto");
  todosLosPuntos.forEach((punto, i) => {
    punto.classList.toggle("activo", i === indice);
  });
}

// Eventos de navegación
anterior.addEventListener("click", () => {
  mostrarFoto(indice - 1);
});
siguiente.addEventListener("click", () => {
  mostrarFoto(indice + 1);
});

// Reproducir‑pausar música
btnMusica.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    iconoMusica.textContent = "⏸";
    textoMusica.textContent = " Pausar música";
  } else {
    audio.pause();
    iconoMusica.textContent = "▶";
    textoMusica.textContent = " Reproducir música";
  }
});

// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  crearIndicadores();
  mostrarFoto(0);
});