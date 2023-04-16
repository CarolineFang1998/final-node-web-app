import mongoose from "mongoose";
import moment from "moment-timezone";
const dateUS = moment().tz("America/Los_Angeles").format("YYYY-MM-DD HH:mm:ss");

const dealsSchema = new mongoose.Schema(
    {
       
        restaurantID: { type: String, required: true },
        userID: { type: String, required: true },
        username: { type: String, required: true },
        content: { type: String, required: true },
        date: { type: Date, default: dateUS },
        isActive: { type: Boolean, default: true }
    },
    {
        collection: "deals",
    }
);

export default dealsSchema;