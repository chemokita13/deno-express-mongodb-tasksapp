import { Request, Response } from "npm:express";
import Task from "../models/task.model.ts";

export const Index = (_req: Request, res: Response) => {
    res.send("hello world!");
};

export const GetTasks = async (_req: Request, res: Response) => {
    const tasks = await Task.find({});
    res.json(tasks);
};

export const CreateTask = async (req: Request, res: Response) => {
    console.log(req);
    const newTask = await (await Task.create(req.body)).save();
    res.json(newTask);
};

export const UpdateTask = async (req: Request, res: Response) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedTask);
};

export const DeleteTask = async (req: Request, res: Response) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.json(deletedTask);
};

export const GetOneTask = async (req: Request, res: Response) => {
    console.log(req.params.id);
    const foundTask = await Task.findById(req.params.id);
    res.json(foundTask);
};
