# crud_final
# crud-final

app.put('/moodificar', (req, res) => {
    let { titulo, precio, imagen, descripcion, habitaciones, wc, estacionamiento, vendedorId } = req.body;
    let modificar_sql = 'UPDATE propiedades SET  ';
    let values = [];

    // Veritficar cada uno de los datos individualmente
    if (titulo) {
        modificar_sql += 'titulo = ?';
        values.push(titulo);
    }

    if (precio) {
        if (values.length > 0) modificar_sql += ', ';
        modificar_sql += 'precio = ?';
        values.push(precio);
    }

    if (imagen) {
        if (values.length > 0) modificar_sql += ', ';
        modificar_sql += 'imagen = ?';
        values.push(imagen);
    }

    if (descripcion) {
        if (values.length > 0) modificar_sql += ', ';
        modificar_sql += 'descripcion = ?';
        values.push(descripcion);
    }

    if (habitaciones) {
        if (values.length > 0) modificar_sql += ', ';
        modificar_sql += 'habitaciones = ?';
        values.push(habitaciones);
    }

    if (wc) {
        if (values.length > 0) modificar_sql += ', ';
        modificar_sql += 'wc = ?';
        values.push(wc);
    }

    if (estacionamiento) {
        if (values.length > 0) modificar_sql += ', ';
        modificar_sql += 'estacionamiento = ?';
        values.push(estacionamiento);
    }

    if (vendedorId) {
        if (values.length > 0) modificar_sql += ', ';
        modificar_sql += 'vendedorId =?';
        values.push(vendedorId);
    }

    modificar_sql +='WHERE titulo = "Cabaña" ';

    // Ejecutar la consulta
    db.query(modificar_sql, values, (error, dbResult) => {
        if (error){
            return res.status(500).send('Error al actualizar los datos');    
        }
        res.send('Datos actualizados con éxito');

    });
});
