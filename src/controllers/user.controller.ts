import { Request, Response } from "express";
import { getAllUser, getUserByID, handleCreateUser, handleDeleteUser, updateUserByID } from "services/user.service";

const getHomePage = async(req: Request, res: Response) => {
    // Get users
    const users = await getAllUser();
    return res.render("home", {
        users : users
    });
    
}

const getCreateUserPage = (req : Request, res : Response) => {
    return res.render("create-user");
}

const postCreateUser = async(req: Request, res: Response) => {
    const { fullName, email, address } = req.body
    // handle create user
    const a = await handleCreateUser(fullName, email, address)
    return res.redirect("/");
}


const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect("/");
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    // get user by id
    const user = await getUserByID(id); 
    return res.render("view-user.ejs", {
        id: id,
        user : user
    })

}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address, fullName } = req.body;
    // get user by id
    const a = await updateUserByID(id, email, address, fullName); 
    return res.redirect("/");  

}
export { getHomePage,getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };