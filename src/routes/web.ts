import express, {Express} from 'express';

const router = express.Router();

const webRoutes = (app : Express) => {
    router.get("/", (req, res) => {
        res.render("home.ejs")
    }) 
    
    router.get("/a", (req, res) => {
        res.send("Hello Huy")
    })
    
    app.use("/", router)    
}

export default webRoutes