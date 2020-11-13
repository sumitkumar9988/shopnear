import express from 'express'
import {authUser,authUserProfile,createUser,authUpdateUserProfile} from '../controller/userController.js'
import {protect} from '../middleware/authMiddleware.js'
const router=express.Router()


router.route('/').post(createUser)
router.route('/login').post(authUser)
router.route('/profile')
            .get(protect,authUserProfile)
            .put(protect,authUpdateUserProfile)


export default router;