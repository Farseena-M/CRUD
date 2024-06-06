const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/userController')

userRouter.post('/create',(userController.createUser))
userRouter.get('/getuser/:id',(userController.getUser))
userRouter.put('/getuser/:id',(userController.updateUser))
userRouter.delete('/getuser/:id',(userController.deleteUser))


module.exports = userRouter