//HTTPS is a more secure version of HTTP that encrypts data sent between a user's browser and a website:
//Hypertext Transfer Protocol is the standard protocol for transferring data over a network, such as website content and API calls


//creating server

var http = require('http');

const myServer = http.createServer((req, res) => {
  console.log('request received');
  console.log(req.headers);//infromation about incoming request in server
  res.write('hello ,,server cretaed');//data write
  res.end();//end resporns

})

myServer.listen(8000, () => {
  //callback functon
});
//8000 is a port,,,one server holds one port only


