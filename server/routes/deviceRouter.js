const Router = require("express");
const router = new Router();
const deviceController = require("../controllers/deviceController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("Admin"), deviceController.create);
router.get("/", deviceController.getAll);
router.get("/:id", deviceController.getOne);
router.post("/delete", deviceController.delete);
router.post("/search", deviceController.search);

module.exports = router;
