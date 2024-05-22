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

 // get Specific Product by product id
 const getSpecificProductFromDb = async (_id:string)=>{
    const result = await ProductModel.findOne({_id});
    return result;
 }
 // Update Product Information

const updateProductFromDb = async (_id: string, updatedProduct: any) => {
    const result = await ProductModel.updateOne({ _id }, { $set: updatedProduct });
    return result;
  };
  

 export const ProductServices = {
    createProductToDb,
    getAllProductFromDb,
    getSpecificProductFromDb,
    updateProductFromDb,
   
}