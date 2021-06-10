console.log("Starting the server")
const http=require('http')

const hostname='localhost'
const port=3000

let server=http.createServer((req,res)=>{
    console.log(req.headers)
    res.write("<h1> Hello world</h1>")
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})