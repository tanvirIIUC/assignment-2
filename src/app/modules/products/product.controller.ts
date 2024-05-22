import { Request, Response } from 'express'
import { ProductServices } from './product.service'
import productValidationSchema from './product.validation'

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body
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
      message: 'Student is created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}


export const productController = {
  createProduct,
 
}