const mongoose = require('mongoose'); // Import Mongoose library
const url = "mongodb://localhost:27017/myDatabase"; // MongoDB connection string (include database name)

// Connect to MongoDB
mongoose.connect(url)
.then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for user data
const userSchema = mongoose.Schema({
  name: String, // User's name
  age: Number,  // User's age
  email: String // User's email
});

// Export the model for use in other files
module.exports = mongoose.model("User", userSchema); // 'User' is the collection name
