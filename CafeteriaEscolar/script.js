// Datos de la base de datos
const estudiantes = [
    { id: 1, nombre: "Ana López", grupo: "1°A" },
    { id: 2, nombre: "Carlos Ruiz", grupo: "1°B" },
    { id: 3, nombre: "Mariana Torres", grupo: "2°A" }
];

const productos = [
    { id: 1, nombre: "Sándwich", precio: 25 },
    { id: 2, nombre: "Jugo", precio: 15 },
    { id: 3, nombre: "Ensalada", precio: 30 },
    { id: 4, nombre: "Fruta", precio: 10 }
];

const compras = [
    { id: 1, id_estudiante: 1, fecha: "01/10/2026", total: 40 },
    { id: 2, id_estudiante: 2, fecha: "02/10/2026", total: 25 },
    { id: 3, id_estudiante: 1, fecha: "02/10/2026", total: 55 },
    { id: 4, id_estudiante: 3, fecha: "03/10/2026", total: 15 }
];

const detalleCompra = [
    { id_compra: 1, id_producto: 1, cantidad: 1 },
    { id_compra: 1, id_producto: 2, cantidad: 1 },
    { id_compra: 2, id_producto: 1, cantidad: 1 },
    { id_compra: 3, id_producto: 3, cantidad: 1 },
    { id_compra: 3, id_producto: 2, cantidad: 1 },
    { id_compra: 4, id_producto: 2, cantidad: 1 }
];

// Función para mostrar historial completo
function mostrarConsulta() {
    const resultado = document.getElementById("resultado");
    
    let html = "<h3>📋 Historial de Compras</h3><br>";
    html += "<strong>Consulta:</strong> Unir estudiantes, compras, productos y cantidades<br><br>";
    html += "<table><tr><th>Estudiante</th><th>Grupo</th><th>Fecha</th><th>Producto</th><th>Cantidad</th><th>Subtotal</th></tr>";

    detalleCompra.forEach(detalle => {
        const compra = compras.find(c => c.id === detalle.id_compra);
        const estudiante = estudiantes.find(e => e.id === compra.id_estudiante);
        const producto = productos.find(p => p.id === detalle.id_producto);
        const subtotal = producto.precio * detalle.cantidad;

        html += `<tr>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.grupo}</td>
            <td>${compra.fecha}</td>
            <td>${producto.nombre}</td>
            <td>${detalle.cantidad}</td>
            <td>$${subtotal}</td>
        </tr>`;
    });

    html += "</table>";
    html += "<br>✅ <em>Las claves foráneas conectan: estudiante → compra → detalle → producto</em>";
    
    resultado.innerHTML = html;
    resultado.style.display = "block";
}