const router = require("express").Router();
const c = require("../controllers/productController");

// Static routes MUST come before "/:id"
router.get("/low-stock", c.getLowStock);
router.get("/summary", c.getSummary);

router.route("/").post(c.createProduct).get(c.getProducts);
router.patch("/:id/stock", c.adjustStock);
router.route("/:id").get(c.getProductById).put(c.updateProduct).delete(c.deleteProduct);

module.exports = router;