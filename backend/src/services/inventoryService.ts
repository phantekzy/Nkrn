import { Product } from "../models/Product"

export const fetchAllProducts = async() =>{
    return await Product.findAll();
}
