import { prisma } from "config/client";
import { ACCOUNT_TYPE } from "config/constant";
import bcrypt from'bcrypt';
const saltRounds = 10;

const hashPassword = async(plainText : string) => {
  return await bcrypt.hash(plainText, saltRounds);
}
const handleCreateUser = async(fullName: string, email: string, address: string, phone : string, avatar : string, role : string) => {
  //insert into database
  //return result
  const defaultPassword = await hashPassword("123456");
  const newUser = await prisma.user.create({
    data: {
      fullName: fullName,
      username: email,
      address: address,
      password: defaultPassword,
      accountType: ACCOUNT_TYPE.SYSTEM,
      avatar: avatar,
      phone: phone,
      roleId : +role,
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

const getAllRoles = async () => {
  const roles = await prisma.role.findMany();
  return roles;
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

export{handleCreateUser, getAllUser,handleDeleteUser, getUserByID,updateUserByID, getAllRoles, hashPassword}