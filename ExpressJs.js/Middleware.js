
//this code isfrom expreejs.com
const express = require('express')
const app = express()

const myLogger = (req, res, next) => {
  console.log('LOGGED')
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