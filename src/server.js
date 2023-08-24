import express from "express";
import morgan from "morgan";
import session from "express-session";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import rootRouter from "./routers/rootRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    console.log(sessions);
    next();
  });
});
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
