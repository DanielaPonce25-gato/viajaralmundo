/*estoy requiriendo a express */
const router = require("express").Router();

/* en esta constante estoy guardando el controller */
const productoController = require("../controller/productosController");

router.get("/", productoController.list);  /* hay tengo la vista armada para rendizar esa vista */
/* / es la rais, que es destinos. que la nombramos en controler*/



/*
const multer = require('multer'); /*estoy requiriendo a multer  


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/imagenes');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });




router.get("/create", productoController.create);
router.post("/create", upload.single('imagenes'), productoController.stock);

router.get("/:id/edit", productoController.edit);
router.put("/:id", upload.single('imagenes'), productoController.update);

router.get("/:id/delete", productoController.delete);
router.delete("/:id", productoController.destroy);*/


module.exports = router; /* exporto router */  

/* aqi me quede */