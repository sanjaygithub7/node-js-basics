// simple example of getting input data from request storing in text

const http=require('http')   
const requesthandler=require('./routes')

console.log('testing nodemon');

 
const server=http.createServer((requesthandler))   


server.listen(5000) 