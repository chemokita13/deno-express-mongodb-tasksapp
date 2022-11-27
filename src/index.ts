import express from "npm:express";
import tasksRoutes from "./routes/task.routes.ts";

const app = express();

app.use(tasksRoutes);

app.listen(3000, () => console.log("server sunning on port 3000"));
