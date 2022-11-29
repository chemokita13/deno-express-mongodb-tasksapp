import { Schema, model } from "npm:mongoose";

const TasksModel = new Schema(
    {
        title: String,
        description: String,
        done: Boolean,
    },
    {
        timestamps: true,
    }
);

export default model("Task", TasksModel);
