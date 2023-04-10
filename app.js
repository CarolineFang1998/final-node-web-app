import express from "express";
import cors from 'cors'
import UsersController from "./users/users-controller.js";
import mongoose from "mongoose";

// connect to the remote database
mongoose.connect('mongodb://127.0.0.1:27017/tuiter');

const app = express()
app.use(cors())
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Welcome to Group 27's Final Project!");
});

UsersController(app);

app.listen(process.env.PORT || 4000);