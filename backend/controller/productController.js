import asyncHandler from 'express-async-handler'
import  Product from '../models/productModel.js'

const getProducts=asyncHandler(async(req,res)=>{
    const products =await Product.find({});
    res.json(products)
})

const getProductById=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const prod=await Product.findById(id);
    if(prod){
        res.json(prod)
    }else{
        res.status(404);
        throw new Error('product not found')
    }
})

export {getProducts,getProductById}