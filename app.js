import express from "express";
import cors from 'cors'
import UsersController from "./users/users-controller.js";
import mongoose from "mongoose";
import SessionController from "./users/session-controller.js";
import session from "express-session";
import SearchDetailController from "./search-detail/search-detail-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import DealsController from "./deals/deals-controller.js";
import FavoriteRestaurantsController from "./favoriteRestaurants/favoriteRestaurants-controller.js";
// connect to the local database
// mongoose.connect('mongodb://127.0.0.1:27017/tuiter');


// connect to the remote database
// the username is webproject and the password is supersecretpassword
const CONNECTION_STRING = 'mongodb+srv://webproject:supersecretpassword@cluster0.jffgpks.mongodb.net/final?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());
app.use(
    session({
        secret: "process.env.SECRET",
        // I don't want to save the session if it is not modified
        resave: false,
        // todo: when we decided to run the app on netlify and render, we need to set secure to true
        // different cookie for different users logged in at the same time
        cookie: { secure: false },
        saveUninitialized: false
    })
);


app.get("/", function (req, res) {
    res.send("Welcome to Group 27's Final Project!");
});

SearchDetailController(app);
UsersController(app);
SessionController(app);
ReviewsController(app);
DealsController(app);
FavoriteRestaurantsController(app);

app.listen(process.env.PORT || 4000);