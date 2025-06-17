import { Request, Response } from "express";
import { getAllUser } from "services/user.service";

const getDashboardPage = async(req: Request, res: Response) => {
    // Get users
    return res.render("admin/dashboard/show.ejs");
}


const getAdminUserPage = async(req: Request, res: Response) => {
    // Get users
    const users = await getAllUser();
    return res.render("admin/user/show.ejs", {
        users: users
    });
}

const getAdminOrderPage = async(req: Request, res: Response) => {
    // Get users
    
    return res.render("admin/order/show.ejs");
}

const getAdminProductPage = async(req: Request, res: Response) => {
    // Get users
    
    return res.render("admin/product/show.ejs");
}

export {getDashboardPage, getAdminUserPage,getAdminOrderPage,getAdminProductPage}