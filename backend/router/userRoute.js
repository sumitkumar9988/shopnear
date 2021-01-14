import express from 'express'
import {authUser,
    authUserProfile,
    createUser,
    authUpdateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,} from '../controller/userController.js'
import {protect,admin} from '../middleware/authMiddleware.js'
const router=express.Router()


router.route('/').post(createUser).get(protect,admin,getUsers)
router.route('/login').post(authUser)
router.route('/profile')
            .get(protect,authUserProfile)
            .put(protect,authUpdateUserProfile)

router.route('/:id')
        .delete(protect, admin, deleteUser)
        .get(protect, admin, getUserById)
        .put(protect, admin, updateUser)


export default router;