import express from "express";
import 'dotenv/config';
import webRoutes from "routes/web";
import connectMongoDB from "config/database";

const app = express()
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`My app is running on port ${PORT}`)
})

