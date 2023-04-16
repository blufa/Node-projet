const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const port = 5000
//Connexion à la base de donnée
connectDB();
const app = express()


// app.get("/post", (req, res)=>{
//     res.json({message:"Voici les données"})
// });

//Middleweare qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use("/post", require("./routes/post.routes"));

//Pour lancer le server
app.listen(port, ()=> console.log("Le serveur a demmaré sur le port: "+port))