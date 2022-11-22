const express = require('express')
const router = require('./users/users.router')
const port = 9000
const app = express()

app.use(express.json())

const usersRouter = require('./users/users.router')

app.use('/api/v1',usersRouter)

app.get('/',(req,res)=>{
    res.status(200).json({mesage:'ok'})
})

app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})