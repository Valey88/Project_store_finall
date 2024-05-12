const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.get('/all_cart',  basketController.getAll);
router.post("/add_cart", basketController.getAdd);

module.exports = router;
