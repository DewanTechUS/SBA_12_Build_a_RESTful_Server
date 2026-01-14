# Build a RESTful Server (Movie Finder API)

**Author:** Dewan Mahmud (Rocky)  
Software Engineer  
Backend Development | Node.js | Express | REST APIs

## Live Demo: https://build-a-restful-server.onrender.com

## Project Overview

The Movie Finder API is a RESTful backend server built with Node.js and Express.  
It acts as an intermediary between a client application and the OMDb (Open Movie Database) API.

The server does not store any data. Instead, it fetches movie information from the external API and returns clean JSON responses to the client.

## Features

- Search movies by title
- Retrieve detailed movie information by IMDb ID
- RESTful API design
- Secure API key handling using environment variables
- Organized project structure with routes and controllers
- Static homepage with API usage instructions

## Technologies Used

- Node.js
- Express
- Axios
- dotenv
- OMDb API

## API Endpoints

### Search Movies
GET /api/search?title=batman

### Get Movie Details
GET /api/movies/:id

Example:
GET /api/movies/tt0372784

## Installation

### Install required dependencies:
- npm install express axios dotenv

### Install development dependency:
- npm install --save-dev nodemon

### Environment Setup
Create a .env file in the root directory:
env
OMDB_API_KEY=your_api_key_here
PORT=3000
.env is listed in .gitignore.

### Running the Server
- Run with Node:
- node server.js
- Run with Nodemon (recommended):
- nodemon server.js
- Or (if configured):
- npm run dev

### The server will run at:
- http://localhost:3000

### Testing the API
Use a browser or Postman to test:
- http://localhost:3000/api/search?title=batman
- http://localhost:3000/api/movies/tt0372784

## Reflection
This project strengthened my understanding of RESTful API design and backend development using Express. I learned how to structure an application using routes and controllers, which improved organization and maintainability.

I also gained hands-on experience consuming an external API with Axios and managing sensitive configuration data securely using environment variables. Implementing proper error handling reinforced the importance of building reliable and predictable backend services.

Overall, this project increased my confidence in backend development and prepared me for more advanced full-stack applications.

## Special Thanks
Special thanks to **Per Scholas** and my instructors for their guidance and support throughout this project.  

The lessons, examples, and hands-on labs made backend development with Node.js and Express clear and practical, and helped me better understand real-world API design.

## License
MIT License

Copyright (c) 2026 Dewan Mahmud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.