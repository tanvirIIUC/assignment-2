import { Request, Response } from 'express'
import { ProductServices } from './product.service'
import productValidationSchema from './product.validation'

// create new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body
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

// Specific Product by product
const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId
    const result = await ProductServices.getSpecificProductFromDb(productId)
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      })
    } else {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }
  } catch (error) {
    console.log(error)
  }
}
// Specific Product by product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updatedProduct = req.body;

    const result = await ProductServices.updateProductFromDb(productId, updatedProduct);

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product not found ',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    const result = await ProductServices.deleteProductFromDb(productId);

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
}
