document.getElementById("propertyForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const data = {
        titulo: document.getElementById("titulo").value,
        precio: document.getElementById("precio").value,
        imagen: document.getElementById("imagen").value,
        descripcion: document.getElementById("descripcion").value,
        habitaciones: document.getElementById("habitaciones").value,
        wc: document.getElementById("wc").value,
        estacionamiento: document.getElementById("estacionamiento").value,
        vendedorId: document.getElementById("vendedorId").value
    };

    try {
        const response = await fetch('http://localhost:3000/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
            alert("Propiedad guardada con éxito.");
        } else {
            alert("Error al guardar la propiedad: " + result.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Hubo un error al enviar los datos.");
    }
});