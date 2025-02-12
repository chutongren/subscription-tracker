import { Router } from "express";
import { signUp, signIn } from "../controller/auth.controller.js";
const authRouter = Router();
authRouter.post("/sign-up", signUp);
authRouter.get("/sign-in", signIn);
authRouter.post("/sign-out", (req, res) => res.send({ title: "Sign Out" }));
export default authRouter;
