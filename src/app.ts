import "express-async-errors";
import express from "express";
import handleErrorMiddleware from "./middlewares/handleErrors.middleware";
import userRoutes from "./routes/users.routes";
import movieRoutes from "./routes/movies.routes";
import loginRoute from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/login", loginRoute);

app.use(handleErrorMiddleware);

export default app;
