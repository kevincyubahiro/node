const http=require('http');
const fs =require('fs');
http.createServer((req,res)=>{
    fs.read('table.html',function(error){
        res.writeHead(200,{
            'cont'
        })
    })
})