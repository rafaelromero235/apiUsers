 const usersDB=[]
 let id =1

 const findAllUsers = ()=>{
    return usersDB
 }

 const findUserById= (id)=>{
 const filteredUser = usersDB.find(user =>user.id == id)
 return filteredUser

 }

 const createNewUser = (obj)=>{
    let newUser={

    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday  || 'unknow'

                }
usersDB.push(newUser)
return newUser

 }

 module.exports={
    findAllUsers,
    findUserById,
    createNewUser
 }

