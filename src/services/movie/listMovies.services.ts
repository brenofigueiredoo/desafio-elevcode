import fetch from "node-fetch";

const listMoviesService = async () => {
  const url =
    "https://api.themoviedb.org/3/search/movie?query=title&include_adult=false&language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const movies = [];

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    json.results.forEach((elem) => movies.push(elem));
  } catch (err) {
    console.error("error:" + err);
  }

  return movies;
};

export default listMoviesService;
