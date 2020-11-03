const http = require("http")
const fs = require('fs')
const lo = require('lodash')
const server = http.createServer((req,res)=>{
    //lodash
    const num = lo.random(0,20)
    console.log(num)

    const greet = lo.once(() =>{
        console.log("hello")
    })
    greet()
    // Set Header content type
    res.setHeader('Content-Type','text/html')
    
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
            //Redirect
        case '/about-me':
           // path += 'about.html'
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    // Send an html file
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{

            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost',()=>{
    console.log('listening for requests on port 3000')
})