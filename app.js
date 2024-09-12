const http=require('http')     // this import the http module from core module of nodejs
 
const server=http.createServer((req,res)=>{    // this method 'create server' creates a server and function is given for handling the request and response

    
    // creating html response to browser request
    res.setHeader('content-type','text/html')     //the response should be in html code         
    res.write('<html>')
    res.write('<h1>Hello from Nodejs Server</h1>')
    res.write('</html>')
    res.end()
})     
server.listen(5000)                          // creating a port  where requests and responses are sent and received in a network

