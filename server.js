require("dotenv").config();
const express = require("express");
const app = express();
const movieRoutes = require("./routes/movieRoutes");
const path = require("path");
// set port from environment variable I used 3000 or default to 3001
const PORT = process.env.PORT || 3001;
// middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public")); // serve static files from 'public' directory

// use movie routes with /api prefix
app.use("/api", movieRoutes);
// root route with instructions for testing

// Serve homepage with instructions from public/index.html // learned from lesson
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
