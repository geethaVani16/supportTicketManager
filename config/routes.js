const express=require('express')
const router=express.Router()
const userController=require('../app/controllers/UsersController')
// const phonebookController=require('../app/controllers/phonebookController')
const {authenticateUser}=require('../app/middlewares/authentication')


router.post('/users/register',userController.register)
router.post('/users/login',userController.login)
router.get('/users/all',userController.AllUserlist)




module.exports=router