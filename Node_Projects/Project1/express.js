const express = require('express');
const path = require('path');
const app = express();
const fs=require('fs');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//setting up public static file(to use css,js,html,imagescld in backend )

app.use(express.static(path.join(__dirname,'public')));// firstly an folder was created calledpublic folder
// Route for the home page
app.get('/', (req, res) => {
   fs.readdir('./files',(err,files)=>
  {
    if (err) {
      console.error("Error reading files directory:", err);
      files = []; // Set files to an empty array in case of an error
    }

    console.log(files);


  res.render('index',{files:files}); // Render the "index.ejs" template
});
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
