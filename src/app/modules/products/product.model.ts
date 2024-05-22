import { Schema, model } from 'mongoose'
import { Inventory, Product, Variant } from './product.interface'

const variantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
})

const inventorySchema = new Schema<Inventory>(
  {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { _id: false },
)


const productSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true },
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        delete ret._id
        return ret
      },
    },
  },
)

export const ProductModel = model<Product>('product', productSchema)
