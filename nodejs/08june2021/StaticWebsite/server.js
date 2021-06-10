console.log("Starting the server")
const fs = require('fs')
const http=require('http')

const hostname='localhost'
const port=3000
/**
 * http://localhost:3000
 * http://localhost:3000/about
 */
//res1=require('./new')
let server=http.createServer((req,res)=>{
    url=req.url
    switch(url){
        case'/':getStaticContent(res,'./public/index.html','text/html')
            break;
        case '/about':getStaticContent(res,'./public/about.html','text/html')
            break;
    }
    
}).listen(port)
console.log(`Server running at http://${hostname}:${port}`)

function getStaticContent(res,filepath,type){
    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.writeHead(500,{"Content-Type":"text/html"})
            res.end(`500-Internal Server Error`)
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(data)
        }
    })
}

// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}`)
// })