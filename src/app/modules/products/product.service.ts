import { Product } from "./product.interface";
import { ProductModel } from "./product.model";


// add new product in database
const createProductToDb = async (product:Product)=>{
    const result = await ProductModel.create(product)
    return result;
 }
// get all product from database
 const getAllProductFromDb = async ()=>{
    const result = await ProductModel.find();
    return result;
 }

 export const ProductServices = {
    createProductToDb,
    getAllProductFromDb,
   
}