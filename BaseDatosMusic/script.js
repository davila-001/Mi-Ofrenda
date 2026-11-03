// Datos de la base de datos
const artistas = [
    { id: 1, nombre: "Colplay", nacionalidad: "Reino Unido", genero: "Rock Alternativo" },
    { id: 2, nombre: "Shakira", nacionalidad: "Colombia", genero: "Pop Latino" },
    { id: 3, nombre: "Juanes", nacionalidad: "Colombia", genero: "Rock Latino" }
];

const albumes = [
    { id: 1, titulo: "Parachutes", año: 2000, id_artista: 1 },
    { id: 2, titulo: "El Dorado", año: 2017, id_artista: 2 },
    { id: 3, titulo: "Vida Cotidiana", año: 2024, id_artista: 3 }
];

const canciones = [
    { id: 1, titulo: "Yellow", duracion: "4:29", id_album: 1 },
    { id: 2, titulo: "Clocks", duracion: "5:07", id_album: 1 },
    { id: 3, titulo: "Me Enamoré", duracion: "3:24", id_album: 2 }
];

// Función para simular consulta
function mostrarConsulta() {
    const resultado = document.getElementById("resultado");
    
    // Unir tablas: artistas → álbumes → canciones
    let html = "<h3>📋 Resultado de la consulta:</h3><br>";
    html += "<strong>Consulta SQL:</strong><br>";
    html += "SELECT ar.nombre, al.titulo, c.titulo AS cancion, c.duracion<br>";
    html += "FROM artistas ar<br>";
    html += "JOIN albumes al ON ar.id_artista = al.id_artista<br>";
    html += "JOIN canciones c ON al.id_album = c.id_album<br><br>";
    
    html += "<table><tr><th>Artista</th><th>Álbum</th><th>Canción</th><th>Duración</th></tr>";
    
    canciones.forEach(c => {
        const album = albumes.find(a => a.id === c.id_album);
        const artista = artistas.find(ar => ar.id === album.id_artista);
        html += `<tr>
            <td>${artista.nombre}</td>
            <td>${album.titulo}</td>
            <td>${c.titulo}</td>
            <td>${c.duracion}</td>
        </tr>`;
    });
    
    html += "</table>";
    html += "<br>✅ <em>Las claves foráneas conectan las tablas y permiten consultar toda la información junta</em>";
    
    resultado.innerHTML = html;
    resultado.style.display = "block";
}