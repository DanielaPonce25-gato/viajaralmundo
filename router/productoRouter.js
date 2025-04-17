/*estoy requiriendo a express */
const router = require("express").Router();

/* en esta constante estoy guardando el controller */
const productoController = require("../controller/productosController");

const multer = require('multer'); /*estoy requiriendo a multer */

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/imagenes');
    },
    filename: (req, file,cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer ({ storage });


/* router.get('/', (req, res) => {
    res.render('home');
});

router.get('/destinos', (req, res) => {
    res.render('destinos');
});
 */

router.get("/create", productoController.create);
router.post("/create", upload.single('imagen'), productoController.stock);

router.get("/:id/edit", productoController.edit);
router.put("/:id", upload.single('imagen'), productoController.update);

router.get("/:id/delete", productoController.delete);
router.delete("/:id", productoController.destroy);  


router.get("/", productoController.list);  /* hay tengo la vista armada para rendizar esa vista */
/* / es la rais, que es destinos. que la nombramos en controler*/

module.exports = router; /* exporto router */  