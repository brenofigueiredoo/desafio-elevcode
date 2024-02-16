const retrieveMovieService = async (movieName: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=title${movieName}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const movie = [];

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    json.results.forEach((elem) => movie.push(elem));
  } catch (err) {
    console.error("error:" + err);
  }

  return movie;
};

export default retrieveMovieService;
