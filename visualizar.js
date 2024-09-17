async function cargarPropiedades() {
    try {
        const response = await fetch('http://localhost:3000/ver-propiedades');
        const verPropiedades = await response.json();
        const tbody = document.querySelector('.propiedades tbody');

        verPropiedades.forEach(propiedades => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${propiedades.id}</td>
                <td>${propiedades.titulo}</td>
                <td><img src="${propiedades.imagen}" class="imagen-tabla"></td>
                <td>$${propiedades.precio}</td>
                <td>
                    <form method="POST" class="w-100">
                        <input type="hidden" name="id" value="${propiedades.id}">
                        <input type="submit" class="boton-rojo-block" value="Eliminar">
                    </form>
                    <a href="" class="boton-amarillo-block">Actualizar</a>
                </td>
            `;
            tbody.appendChild(fila);
        });

    } catch (error) {
        console.error('Error al cargar las propiedades:', error);
    }
}
document.addEventListener('DOMContentLoaded', cargarPropiedades);