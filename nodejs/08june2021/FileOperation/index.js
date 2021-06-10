const fs=require('fs')
fs.readFile("./country.txt","UTF8",(err,data)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log(data)
    }
    console.log(data)
})