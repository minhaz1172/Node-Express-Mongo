const express = require('express'); // Import Express framework
const app = express(); // Initialize Express application
const userModel = require('./usermodel'); // Import the User model from usermodel.js

// Root route for creating a user
app.get('/', async (req, res) => {
  try {
    // Create a new user document in MongoDB (asynchronous operation)
    let createdUser = await userModel.create({
      name: "Minhaz",
      age: 23,
      email: "uminhaz885@gmail.com"
    });

    // Log success message to console
    console.log("MongoDB document created:", createdUser);

    // Respond to client with created user data
    res.send({ success: true, user: createdUser });
  } catch (error) {
    // Handle errors during user creation
    console.error("Error creating user:", error);
    res.status(500).send({ success: false, message: "Failed to create user" });
  }
});

// Start server on port 3004
app.listen(3004, () => console.log('Server running on http://localhost:3004'));
