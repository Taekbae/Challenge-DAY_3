import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Coding Challenge";
  res.locals.routes = routes;
  next();
};
