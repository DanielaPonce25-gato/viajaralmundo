const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

/* cuando hay que cargar imagenes, hay que instalar multer ( npm i multer ) */
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/imagenes');
    },
    filename: (req, file,cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer ({ storage });

/* estas dos lineas son necesarias que esten para poder insertar datos en el json */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

/* traigo la ruta */
const routerProducto = require('./router/productoRouter');
app.use("/", routerProducto); 

 
app.use(methodOverride('_method')); /* lo nececitamos para poder editar o eliminar los objetos/productos */


app.set('view engine', 'ejs'); /* mi motor de plantilla */
app.set('views', path.join(__dirname, 'views')); /* mis vistas van a estar en la carpeta views */


// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));



app.listen(3000, () => {
    console.log(' El Servidor esta requerido en el puerto 3000');
});

/* localhost:3000/ */