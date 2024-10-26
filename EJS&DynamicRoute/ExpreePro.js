//dynamic routing
//how to get data coming from frontend at backend route

//setting up parsers for form handleing like login
//setting up ejs for ejs pages //www.geeksforgeeks.com
//setting up public static file(to use css,js,html,imagescld in backend )

//Ejs

const express = require('express');
const app = express();

const path=require('path');

//settig parses for form handlng
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//setting up public static file(to use css,js,html,imagescld in backend )

app.use(express.static(path.join(__dirname,'public')));// firstly an folder was created calledpublic folder


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

//dynamic routing
app.get('/users/:name',(req,res)=>{
  //here name is dynamic so we have to put ':' before it
  const userName=req.params.name;
  res.send(`User name is :${userName}` );
})
//multiple dynam9ic route creation
  app.get('/users/:name/:age',(req,res)=>
  {
    const name = req.params.name;
    const age = req.params.age;
 res.send(`My name is:${name} and Age is :${age}`);
  })


 app.listen(4000, function () {
  console.log('listening to port 4000')});