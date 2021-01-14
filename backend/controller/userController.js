import asyncHandler from 'express-async-handler'
import  User from '../models/userModel.js'
import generateToken from '../utils/gernateToken.js'

const authUser=asyncHandler(async(req,res)=>{

    const {email,password}=req.body;
    const user=await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error('Invalid email and password');
    }
    
})

const createUser=asyncHandler(async(req,res)=>{

    const {email,password,name,isAdmin}=req.body;
    const existUser=await User.findOne({email});
    if(existUser){
        res.status(400)
        throw new Error('User already Exist!')
    }

    const user =await User.create({
        email,
        password,
        name,
        isAdmin
    })
    if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user._id)
        })
    }else{
        res.status(400) 
        throw new Error('Invalid user data');
    }
})


const authUserProfile=asyncHandler(async(req,res)=>{
    
    const user=await User.findById(req.user._id);
    if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
        
    }else{
        res.status(404)
        throw new Error('User not found');
    }
    
})
const authUpdateUserProfile=asyncHandler(async(req,res)=>{
    
    const user=await User.findById(req.user._id);
    if(user){

        user.name=req.body.name||user.name
        user.email=req.body.email||user.email
        if(req.body.password){
            user.password=req.body.password
        }

        const updatedUser=await user.save();

        res.json({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
            isAdmin:updatedUser.isAdmin,
            token:generateToken(user._id)
        })
        
    }else{
        res.status(404)
        throw new Error('User not found');
    }
    
})


const getUsers=asyncHandler(async(req,res)=>{
    
    const user=await User.find({}).select('-password');
    res.json(user)
})




  const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      await user.remove()
      res.json({ message: 'User removed' })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  

  const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')
  
    if (user) {
      res.json(user)
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  

  const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.isAdmin = req.body.isAdmin
  
      const updatedUser = await user.save()
  
      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
      })
    } else {
      res.status(404)
      throw new Error('User not found')
    }
  })
  

export {authUser,authUserProfile,authUpdateUserProfile,createUser,getUsers,deleteUser,getUserById,updateUser}