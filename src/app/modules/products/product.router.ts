import express  from "express";
import { productController } from "./product.controller";



const router = express.Router();


router.post('/products',productController.createProduct)
router.get('/products',productController.getAllProduct)
router.get('/products/:productId',productController.getSpecificProduct)
router.put('/products/:productId',productController.updateProduct)
router.delete('/products/:productId', productController.deleteProduct);
router.get('/product', productController.searchProductsByName);


export const productRoutes = router;