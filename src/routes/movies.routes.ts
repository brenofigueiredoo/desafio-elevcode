import { Router } from "express";
import {
  listMoviesController,
  retrieveMovieController,
} from "../controllers/movie.controller";

const movieRoutes: Router = Router();

movieRoutes.get("/:name", retrieveMovieController);
movieRoutes.get("/", listMoviesController);

export default movieRoutes;
