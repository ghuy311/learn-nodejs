import { Request, Response } from "express";
import { getAllRoles, getAllUser, getUserByID, handleCreateUser, handleDeleteUser, updateUserByID } from "services/user.service";

const getHomePage = async(req: Request, res: Response) => {
    // Get users
    const users = await getAllUser();
    return res.render("home", {
        users : users
    });
    
}

const getCreateUserPage = async(req: Request, res: Response) => {
    const roles = await getAllRoles();
    return res.render("admin/user/create.ejs", {
        roles
    });
}

const postCreateUser = async(req: Request, res: Response) => {
    const { fullName, username, phone, role, address } = req.body
    // // handle create user
    const file = req.file;
    // const avatar = file?.filename ?? "";
    let avatar = "";
    if (file != null) {
        avatar = file.filename;
    }
    await handleCreateUser(fullName,username,address,phone, avatar, role)
    return res.redirect("/admin/user");
}


const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect("/admin/user");
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    // get user by id
    const user = await getUserByID(id); 
    const roles = await getAllRoles();
    return res.render("admin/user/detail.ejs", {
        id: id,
        user: user,
        roles
    })

}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, fullName, phone, role, address } = req.body;
    const file = req.file;
    const avatar = file?.filename ?? null;
    await updateUserByID(id, fullName, phone, role, address, avatar); 
    return res.redirect("/admin/user");  
}
export { getHomePage,getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };