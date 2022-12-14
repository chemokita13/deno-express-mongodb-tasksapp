import express from "npm:express";
import tasksRoutes from "./routes/task.routes.ts";

const app = express();

app.use(express.json());

app.use(tasksRoutes);

export default app;
