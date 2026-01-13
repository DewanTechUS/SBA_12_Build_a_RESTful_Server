require("dotenv").config();
const express = require("express");
const app = express();
const movieRoutes = require("./routes/movieRoutes");

// set port from environment variable I used 3000 or default to 3001
const PORT = process.env.PORT || 3001;
// middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded());
// use movie routes with /api prefix
app.use("/api", movieRoutes);
// root route with instructions for testing
app.get("/", (req, res) => {
  res.send(`
    <h1>Dewan-Mahmud Movie Finder API - Build a RESTful Server</h1>

    <p>
      Try:
      <a href="/api/search?title=batman" target="_blank">/api/search?title=batman</a>
      or
      <a href="/api/movies/tt0372784" target="_blank">/api/movies/:id</a>
    </p>

    <p>
      Full URLs:<br>
      <a href="http://localhost:3000/api/search?title=batman" target="_blank">
        http://localhost:3000/api/search?title=batman
      </a>
      <br>
      <a href="http://localhost:3000/api/movies/tt0372784" target="_blank">
        http://localhost:3000/api/movies/tt0372784
      </a>
    </p>
  `);
});
// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
