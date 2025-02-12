import express from "express";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mangodb.js";

import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// console.log("✅ authRouter loaded:", authRouter.stack);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("PORT:", PORT);

// as soon as we start our application on localhost
app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`);
  await connectToDatabase();
});

export default app;
