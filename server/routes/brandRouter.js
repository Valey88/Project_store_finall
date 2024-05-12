const Router = require("express");
const router = new Router();
const brandController = require("../controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("Admin"), brandController.create);
router.get("/", brandController.getAll);

module.exports = router;
