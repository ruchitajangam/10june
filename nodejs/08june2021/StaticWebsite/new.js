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
exports.getStaticContent(res,filepath,type)