const express = require("express");
const router = express.Router();
const ProductsController = require("../controllers/productsController");

router.get("/busca", ProductsController.getProductByValue);
router.get("/", ProductsController.getProducts);
router.get("/:id", ProductsController.getProductById);
router.post("/", ProductsController.createProduct);
router.put("/:id", ProductsController.updateProduct);
router.delete("/:id", ProductsController.deleteProduct);

module.exports = router;
