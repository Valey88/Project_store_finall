const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("Admin"), typeController.create);
router.get("/", typeController.getAll);

module.exports = router;
