
//this code isfrom expreejs.com
/*Middleware in Node. js refers to a concept where functions can be used to process incoming requests before they reach their final destination and handle outgoing responses before they are sent back to the client */

//const http= require('http'); here http dont require express do this anonymously   
const express = require('express')
const app = express()

//create server by express
//const server =http.createServer(app);

//creating middleware app.use     it has three =>(req,res,next)
const myLogger = (req, res, next) => {
  console.log('middleware',req.url,req.method);
  next()
}

app.use(myLogger);
//route creation
app.get('/', (req, res) => {
  res.send('Middleware working')
})
//another route
app.get('/profile', (req, res) => {
  res.send('My name is minhaz uddin ');
})

app.get('/about', (req, res, next) => {
  res.send('profile showing');
  return next(new Error("Somethig wrong"))//it will show in console
})

//error handling by middle ware
//search middleare error handler expreess js in google
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')//sho in frontend
})

app.listen(3000, () => {
  //optional callback func
  console.log("requst received")
})