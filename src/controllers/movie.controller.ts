import { Request, Response } from "express";
import retrieveMovieService from "../services/movie/retrieveMovie.services";
import listMoviesService from "../services/movie/listMovies.services";

const listMoviesController = async (req: Request, res: Response) => {
  const movies = await listMoviesService();
  return res.status(200).json(movies);
};

const retrieveMovieController = async (req: Request, res: Response) => {
  const movieName = req.params.name;
  const movie = await retrieveMovieService(movieName);
  return res.status(200).json(movie);
};

export { retrieveMovieController, listMoviesController };
