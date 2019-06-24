import express from "express";
import routes from "./routes";
import { home, join, photos, profile } from "./globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.photos, photos);
globalRouter.get(routes.profile, profile);

export default globalRouter;
