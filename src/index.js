import express from "express";
import routes from "./routes";
import globalRouter from "./globalRouter";
import { localsMiddleware } from "./middlewares";
import path from "path";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localsMiddleware);
app.use(routes.home, globalRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

export default app;
