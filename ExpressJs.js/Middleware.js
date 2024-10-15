
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


app.listen(3000, () => {
  console.log("requst received")
})