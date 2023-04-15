import mongoose from "mongoose";
const reviewsSchema = new mongoose.Schema(
    {
       
        restaurantID: { type: String, required: true },
        userID: { type: String, required: true },
        username: { type: String, required: true },
        review: { type: String, required: true },
        date: { type: Date, default: Date.now() }
    },
    {
        collection: "reviews",
    }
);

export default reviewsSchema;