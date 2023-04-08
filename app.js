import express from "express";
import cors from 'cors'
import UsersController from "./users/users-controller.js";
import SearchController from "./search/search-controller.js";

const app = express()
app.use(cors())
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Welcome to Group 27's Final Project!");
});

SearchController(app);

// app.listen(process.env.PORT || 4000);
app.listen(4000);