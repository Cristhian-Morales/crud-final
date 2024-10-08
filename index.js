const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       
    password: '',       
    database: 'bienesraices_crud'
});


db.connect((err) => {
    if (err) {
        console.error('Error al conectarse a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});







app.post('/crear', (req, res) => {
    const { titulo, precio, imagen, descripcion, habitaciones, wc, estacionamiento, vendedorId } = req.body;

    const query = 'INSERT INTO propiedades (titulo, precio, imagen, descripcion, habitaciones, wc, estacionamiento, vendedorId) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [titulo, precio, imagen, descripcion, habitaciones, wc, estacionamiento, vendedorId], (error, result) => {
        if (error) {
            console.error('Error al insertar los datos:', error);
            res.status(500).json({ error: 'Error al guardar los datos en la base de datos.' });
        } else {
            res.status(200).json({ message: 'Propiedad guardada con éxito' });
        }
    });
});



// Ruta para obtener todas las propiedades
app.get('/ver-propiedades', (req, res) => {
    const query = 'SELECT * FROM propiedades';
    
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error al obtener las propiedades:', error);
            res.status(500).json({ error: 'Error al obtener las propiedades.' });
        } else {
            res.status(200).json(results);
        }
    });
});





//DELETE para eliminar notas especificando un id
app.delete('/propiedades/:id/delete',async(pedido,respuesta)=>{
    try{
        const conexion = await mysql.conexionDB();
        const id = pedido.params.id;

        await conexion.execute('DELETE FROM propiedades WHERE id = ?',[id]);
        respuesta.send('registro eliminado');

    }catch(error){
        respuesta.status(500).send(error);
    }
});





app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
