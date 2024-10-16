//dynamic routing
//how to get data coming from frontend at backend route

//setting up parsers for form handleing like login
//setting up ejs for ejs pages //www.geeksforgeeks.com
//setting up public static file(to use css,js,html in backend )

//Ejs

const express = require('express');
const app = express();

//settig parses for form handlng
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // The render method takes the name of the html
  // page to be rendered as input.
  // This page should be in views folder 
  // in the root directory.
  
    res.render('Index');//we have set index.ejs at view folder as we said view engine,ejs
});
//another route
// Sample user data
const userData = {
    username: 'Anshul Ojha',
    age: 21,
    email: 'anshul@example.com'
};
app.get('/about', (req, res) => {
  res.render('Index', userData);
});

 app.listen(4000, function () {
  console.log('listening to port 4000')});