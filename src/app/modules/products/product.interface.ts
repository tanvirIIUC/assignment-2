import { Schema, model, connect } from 'mongoose';


export interface Variant {
    type: string;
    value: string;
}


export interface Inventory {
    quantity: number;
    inStock: boolean;
}

// Define the Product interface
export interface Product {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
}