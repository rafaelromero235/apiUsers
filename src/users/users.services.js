const usercontrollers = require('./users.controllers')

const getAllUsers =(req,res)=>{
    const data = usercontrollers.findAllUsers()
    res.status(200).json(data)

}
const getUserById = (req,res) =>{
    const id = req.params.id
    const data = usercontrollers.findUserById(id)
    if (data ){

        res.status(200).json(data)
    }else{
        res.data(404).json({message:'invalid id'})
    }
    
}

const postNewUser = (req,res)=>{

    const {first_name,last_name,email,password,birthday} = req.body

    if (first_name && last_name && email && password){

        const data = usercontrollers.createNewUser({first_name,last_name,email,password,birthday})
        res.status(201).json(data)

    }else{

        res.status(400).json({message:'invalid data'})
    }

}

module.exports ={
    getAllUsers,getUserById,postNewUser
}
