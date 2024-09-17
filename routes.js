const fs=require('fs')

const requesthandler=(req,res)=>{
const url=req.url
const method=req.method

if(url==='/'){
    res.setHeader('content-type','text/html')              
    res.write('<html>')
    res.write('<body>')
    res.write('<form action="/welcome" method="POST">')
    res.write('<input type="text" name="message"/>')
    res.write('<input type="submit" value="submit"/>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
}

// simple code example for redirect
if(url==='/welcome' && method=='POST'){
    const body=[]  // for storing the multiple buffer data into a single array

    req.on('data',(chunk)=>{   // this code explains about how a request data is stored in stream and it is printed
        body.push(chunk)
        console.log(chunk);    // this also show how data is sent as a request
    })

    req.on('end',()=>{
        const parsed=Buffer.concat(body).toString()  // this code combines the chunk data stored in buffer into single  array and convert into a string which is human readable
        
        const message=parsed.split('=')   
        fs.writeFileSync('New.txt',message[1])  //this code is mainly for store the request message into the text file
    })


    fs.writeFileSync('New.txt','Sample')
    res.setHeader('Location','/')  //backing again to main page ny setting location
    res.statusCode=302;            
    
    return res.end()
}


res.setHeader('content-type','text/html')              
res.write('<html>')
res.write('<h1>Hello from Nodejs Server</h1>')
res.write('</html>')
res.end()

}

module.exports=requesthandler;


