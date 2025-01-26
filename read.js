const http=require('http');
const fs =require('fs');
http.createServer((req,res)=>{
    fs.read('table.html',function(error, data){
        res.writeHead(200,{
            'content-Type':'text/html'
        });
        res.write(data);
        res.end();
    })
}).listen(3000,()=>{
    console.log('http://localhost:3000')
})