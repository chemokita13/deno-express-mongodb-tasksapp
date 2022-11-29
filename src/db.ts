import mongoose from "npm:mongoose";

try {
    await mongoose.connect("mongodb://localhost/denoDB");
    console.log("db connected");
} catch (error) {
    console.error(error);
}
