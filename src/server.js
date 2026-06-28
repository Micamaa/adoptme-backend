import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8080;


mongoose.connect("URL DE MONGO")
    .then(() => {
        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log("Mongo connection error:", err);
    });