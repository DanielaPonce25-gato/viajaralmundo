const fs = require('fs');
const path = require('path');

/* requiero el jeson de producto */
const productosFilePath = path.join(__dirname, '../data/productos.json');  
 
/* parseo el json producto y lo convierto en objeto */
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

 
const productosController = {
    list: (req, res) => {     /* reg requiere la informacion */  /* res devuelve la respuesta */
        res.render('destinos', {productos});
    },

    /*  
    create: (req, res) => {
        res.render('productos/creacionProd');
    },

    stock: (req, res) => {
        const marca = req.body.marca;
        const modelo = req.body.modelo;
        const precio = req.body.precio;
        const imagen = req.file ? req.file.filename : null;

        const nuevoProducto = {
            id: productos.length + 1,
            marca,
            modelo,
            precio,
            imagen
        };

        try {
            productos.push(nuevoProducto);
            fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
            res.redirect('/');
        } catch (error) {
            console.log("Error al guardar el producto");
            console.error(error);
            res.status(500).send("Error al guardar el producto en el servidor");
        }
    },

    edit: (req, res) => {
        const id = req.params.id;
        const producto = productos.find(producto => producto.id == id);
        res.render('productos/editarProd', { producto });
    },

    update: (req, res) => {
        const id = req.params.id;
        const marca = req.body.marca;
        const modelo = req.body.modelo;
        const precio = req.body.precio;
        const imagen = req.file ? req.file.filename : null;

        const productoUpdate = productos.findIndex(producto => producto.id == id);
        if (productoUpdate !== -1) {
            productos[productoUpdate] = { id: Number(id), marca, modelo, precio, imagen };
            try {
                fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
                res.redirect('/');
            } catch (error) {
                console.log("Error al guardar el producto");
                console.error(error);
                res.status(500).send("Error al guardar el producto en el servidor");
            }
        } else {
            res.status(404).send("Producto no encontrado");
        }
    },

    delete: (req, res) => {
        const id = req.params.id;
        const producto = productos.find(producto => producto.id == id);
        if (producto) {
            res.render('productos/eliminarProd', { producto });
        } else {
            res.status(404).send("Producto no encontrado");
        }
    },

    destroy: (req, res) => {
        const id = req.params.id;
        const productoEliminar = productos.findIndex(producto => producto.id == id);
        if (productoEliminar !== -1) {
            productos.splice(productoEliminar, 1);
            try {
                fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
                res.redirect('/');
            } catch (error) {
                console.log("Error al guardar el producto");
                console.error(error);
                res.status(500).send("Error al guardar el producto en el servidor");
            }
        } else {
            res.status(404).send("Producto no encontrado");
        }
    }*/
};


module.exports = productosController; /* exporto controller */
