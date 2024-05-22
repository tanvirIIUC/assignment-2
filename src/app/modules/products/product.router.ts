import express  from "express";
import { productController } from "./product.controller";



const router = express.Router();


router.post('/products',productController.createProduct)
router.get('/products',productController.getAllProduct)
router.get('/products/:productId',productController.getSpecificProduct)
router.put('/products/:productId',productController.updateProduct)


export const productRoutes = router;