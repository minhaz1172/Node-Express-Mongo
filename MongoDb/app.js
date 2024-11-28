const express = require('express'); // Import Express framework
const app = express(); // Initialize Express application
const userModel = require('./usermodel'); // Import the User model from usermodel.js

// Root route for creating a user
app.get('/', async (req, res) => {
  try {
    //multiple user input
    let users=[
      {name: "Minhaz", age: 23,email: "uminhaz885@gmail.com"},
      {name:"Marof",age:18,email:"marof342@gmail.com"}
    ];
    // Create a new user document in MongoDB (asynchronous operation)
    let createdUser = await userModel.insertMany(users);
    ;

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

// Update MongoDB user data
const myname = { name: "Minhaz" };
const setName = { $set: { name: "Minhaz Uddin" } };

app.get('/update', async (req, res) => {
  try {
  
    console.log("Query Object:", myname); // Debugging log
    let users = await userModel.find({});
    console.log("All Users in DB:", users);
    // Find and update user document in MongoDB
    let updatedUser = await userModel.findOneAndUpdate(myname, setName, { new: true });

    if (updatedUser) {
      // If a document was found and updated, respond with success
      res.send({ success: true, message: "User updated successfully", user: updatedUser });
    } else {
      // If no document matched the query, respond with failure
      res.send({ success: false, message: "User not found or no changes made" });
    }

    console.log("MongoDB document updated:", updatedUser);
  } catch (error) {
    // Handle errors during the update
    console.error("Error updating user:", error);
    res.status(500).send({ success: false, message: "Failed to update user" });
  }
});
//find any data
app.get('/find',async(req,res)=>
{

let finding=await userModel.find({name:"Minhaz"});
if (finding) {
  // If a document was found and updated, respond with success
  res.send({ success: true, message: "User exists in database", user: finding });
} else {
  // If no document matched the query, respond with failure
  res.send({ success: false, message: "User not found " });
}

}
)


// Start server on port 3004
app.listen(3004, () => console.log('Server running on http://localhost:3004'));
