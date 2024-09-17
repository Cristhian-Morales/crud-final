async function cargarPropiedades() {
    try {
        const response = await fetch('http://localhost:3000/ver-propiedades');
        const verPropiedades = await response.json();
        const tbody = document.querySelector('.propiedades tbody');

        // Limpiar contenido existente
        tbody.innerHTML = '';

        // Iterar sobre las propiedades y agregarlas a la tabla
        verPropiedades.forEach(propiedad => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${propiedad.id}</td>
                <td>${propiedad.titulo}</td>
                <td><img src="${propiedad.imagen}" class="imagen-tabla"></td>
                <td>$${propiedad.precio}</td>
                <td>
                    <button class="boton-rojo-block eliminar-btn" data-id="${propiedad.id}">Eliminar</button>
                    <a href="" class="boton-amarillo-block">Actualizar</a>
                </td>
            `;
            tbody.appendChild(fila);
        });






        //Con esto podemos eliminar segun un boton que contiene un ID especifico
        const botonesEliminar = document.querySelectorAll('.eliminar-btn');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', async function() {
                const propiedadId = this.dataset.id;

                try {
                    const response = await fetch(`http://localhost:3000/eliminar-propiedad/${propiedadId}`, {
                        method: 'DELETE'
                    });

                    const result = await response.json();
                    if (response.ok) {
                        alert('Propiedad eliminada con éxito');
                        cargarPropiedades();
                    } else {
                        alert('Error al eliminar la propiedad: ' + result.error);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Hubo un error al eliminar la propiedad.');
                }
            });
        });
    } catch (error) {
        console.error('Error al cargar las propiedades:', error);
    }
}


document.addEventListener('DOMContentLoaded', cargarPropiedades);