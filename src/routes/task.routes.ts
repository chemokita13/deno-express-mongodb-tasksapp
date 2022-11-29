import { Router } from "npm:express";

import * as TaskController from "../controllers/tasks.controller.ts";

const router = Router();

router.get("/", TaskController.Index);

router.get("/tasks/get", TaskController.GetTasks);

router.get("/tasks/getOne/:id", TaskController.GetOneTask);

router.post("/tasks/new", TaskController.CreateTask);

router.put("/tasks/update/:id", TaskController.UpdateTask);

router.delete("/tasks/delete/:id", TaskController.DeleteTask);

export default router;
