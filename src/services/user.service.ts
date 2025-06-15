import { prisma } from "config/client";
import getConnection from "config/database"

const handleCreateUser = async(fullName: string, email: string, address: string) => {
    //insert into database
    //return result

   const newUser = await prisma.user.create({
    data: {
      fullName: fullName,
      username: email,
      address: address,
      password: "",
      accountType: "",
     }
   })
  return newUser;
}

const handleDeleteUser = async(id: string) => {
  const deleteUser = await prisma.user.delete({
    where: {id: +id}
  })
  return deleteUser;
}

const getAllUser = async () => {
  const user = await prisma.user.findMany();
  return user;
}

const getUserByID = async(id: string) => {
  const user = await prisma.user.findUnique({
    where:{id : +id}
  })
  return user;
} 

const updateUserByID = async (id: string, email: string, address: string, fullName: string) => {
  const updateUser = await prisma.user.update({
    where: { id : +id },
    data: {fullName:fullName, username:email, address:address, password:"",accountType:""}
  })
  return updateUser;
} 

export{handleCreateUser, getAllUser,handleDeleteUser, getUserByID,updateUserByID}