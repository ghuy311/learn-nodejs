import { prisma } from "config/client";
import getConnection from "config/database"

const handleCreateUser = async(fullName: string, email: string, address: string) => {
    //insert into database
    //return result

   const newUser = await prisma.user.create({
    data: {
      name: fullName,
      email: email,
      address : address
     }
   })
  return newUser;
}

const handleDeleteUser = async(id: string) => {
  try {
    const connection = await getConnection();
  const sql = 'DELETE FROM `users` WHERE `id` = ?';
  const values = [id];

  const [result, fields] = await connection.execute(sql, values);

  return result
} catch (err) {
    console.log(err);
    return [];
}
}

const getAllUser = async () => {
  const user = await prisma.user.findMany();
  return user;
}

const getUserByID = async(id: string) => {
  try {
    const connection = await getConnection();
  const sql = 'SELECT *  FROM `users` WHERE `id` = ?';
  const values = [id];

  const [result, fields] = await connection.execute(sql, values);
    return result[0];
} catch (err) {
    console.log(err);
    return [];
}
} 

const updateUserByID = async (id: string, email: string, address: string, fullName:string) => {
  try {
    const connection = await getConnection();
    const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?';
    const values = [fullName, email,address,id];
    const [result, fields] = await connection.execute(sql, values);
    return result;
} catch (err) {
    console.log(err);
    return [];
}
} 

export{handleCreateUser, getAllUser,handleDeleteUser, getUserByID,updateUserByID}