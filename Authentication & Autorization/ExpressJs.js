// Import the Express framework to create a web server
const express = require('express');

// Import the 'cookie-parser' middleware to handle cookies in requests and responses
const cookieParser = require('cookie-parser');

// Create an Express application instance
const app = express();

// Use the cookie-parser middleware to enable cookie parsing functionality
app.use(cookieParser());

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  // Set a cookie named "name" with the value "harsh" in the user's browser
  res.cookie("name", "harsh");

  // Send a response indicating the cookie has been set
  res.send("done");
});

// Define a route to read cookies from the incoming request
app.get("/read", (req, res) => {
  // Log all cookies sent by the client to the server to the console
  console.log(req.cookies);

  // Send a response to indicate that the cookies have been read
  res.send("read page");
});

// Start the server and listen on port 3000
app.listen(3000);
