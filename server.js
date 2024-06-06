const express = require('express')
const dbConnect = require('./dbConnect')
const userRouter = require('./router/userRouter')
const app = express()


dbConnect()

app.use(express.json())
app.use('/users',userRouter)


const port = 4000
app.listen(port,()=>{
    console.log(`server connected port ${4000}`);
})