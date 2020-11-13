import express from 'express'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import connectDB from './Config/db.js'
import products from './data/products.js'
import users from './data/users.js'
import dotenv from 'dotenv'
import colors from 'colors'

const app=express();
dotenv.config();
connectDB();

const importData = async(req,res)=>{
    try{

        
        await User.deleteMany();
        await Product.deleteMany();
        
        const createUser=await User.insertMany(users);
        const adminUser=createUser[0]._id
        const sampleProduct=products.map(product=>{
            return {...product,user:adminUser}
        })

        const productInsert=await Product.insertMany(sampleProduct);
        console.log('value insert'.green.inverse);
        process.exit();


    }catch(err)
    {
        console.error(err.message);
    }
}
const deleteData=async(req,res)=>{
    try{
    
        await User.deleteMany();
        await Product.deleteMany();

        console.log('value deleted'.blue.inverse);
        process.exit();

    }catch(err){
        console.log(err.message);
    }
}

if(process.argv[2]==='-d'){
    deleteData();
}else{
    importData();
}
app.listen(3400,()=>{
    console.log('Yehhh its working....'.blue.inverse);
})