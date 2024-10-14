{/*what is Express js
-framework of node js ,,reciving request and giving response...use for routing */}

//at first install express:npm install express

//whenerver i cchange something my runnung localhost will not change ,,so when i change something to change in localhost--install:npm install -g nodemon

//we have to use to run: nodemon express.js

const express = require('express');

const app = express()    //basically express is function and this function now hold by app

//const port = 3000;//listenting port 3000 we can aslo uyse listen.3000 in last


app.get('/', (req, res) => {
  // here '/' is a route created
  res.send("hello this is Minhaz Uddin");

})
//another route creation'
app.get('/Me', (req, res) => {
  res.send("Another route is created");
})

app.listen(3000, () => {
  //callback function
  console.log(`3000 is listening`);
})