import { Request, Response } from 'express'
import { ProductServices } from './product.service'
import productValidationSchema from './product.validation'
 
// create new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData  = req.body
    const { error, value } = productValidationSchema.validate(productData)
    const result = await ProductServices.createProductToDb(value)
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error,
      })
    }

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

// find all product data
const getAllProduct = async (req: Request, res: Response) => {
  try {
   // const {student:studentData} = req.body
    const result = await ProductServices.getAllProductFromDb()
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}


export const productController = {
  createProduct,
  getAllProduct,
 
}