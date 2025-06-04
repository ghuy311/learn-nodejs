import express from "express";
require('dotenv').config()

const app = express()
const PORT = process.env.PORT;

app.get("/", (req,res) => {
    res.send("Hello World nodemon") 
}) 

app.listen(PORT, () => {
    console.log(`My app is running on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`My app is running on PORT : ${PORT}`);
    console.log('env port:', process.env.PORT)
})