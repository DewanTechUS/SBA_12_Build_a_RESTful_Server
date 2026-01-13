const omdbClient = require("../services/api-client");
// This is my function to search movies by title
async function searchMovies(req, res) {
  try {
    const { title } = req.query;

    if (!title) {
      return res
        .status(400)
        .json({ error: "Title query parameter is required" });
    }

    const response = await omdbClient.get("/", {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error });
    }

    return res.json(response.data.Search);
  } catch (error) {
    console.error("searchMovies error:", error.message);
    return res.status(500).json({ error: "Failed to fetch movies" });
  }
}
// This is my function to get movie details by ID
async function getMovieDetails(req, res) {
  try {
    const id = req.params.id;

    const response = await omdbClient.get("/", {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error });
    }

    return res.json(response.data);
  } catch (error) {
    console.error("getMovieDetails error:", error.message);
    return res.status(500).json({ error: "Failed to fetch movie details" });
  }
}

module.exports = {
  searchMovies,
  getMovieDetails,
};
