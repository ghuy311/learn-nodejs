import { Request, Response } from "express";
import { getAllUser, handleCreateUser } from "../services/user.service";

const getHomePage = async(req: Request, res: Response) => {
    // Get users
    const users = await getAllUser();
    console.log("check user",  users)
    return res.render("home", {
        name : users
    });
    
}

const getCreateUserPage = (req : Request, res : Response) => {
    return res.render("create-user");
}

const postCreateUser = (req: Request, res: Response) => {
    const { fullName, email, address } = req.body
    // handle create user
    handleCreateUser(fullName, email, address)
    return res.redirect("/");
}



export { getHomePage,getCreateUserPage, postCreateUser };