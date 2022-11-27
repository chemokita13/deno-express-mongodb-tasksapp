import { Router } from "npm:express";

const router = Router();

router.get("/", (req, res) => res.send("hi"));

router.get("/tasks", (req, res) => res.send("hi"));

export default router;
