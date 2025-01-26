const http=require('http');
const fs =require('fs');
http.createServer(function(req,res){
    fs.readFile('table.html',function(err, data){
        res.writeHead(200,
            {
            'content-Type':'text/html'
        });
        res.write(data);
        res.end();
    })
}).listen(8080,()=>{
    console.log('our server is start on http://localhost:8080')
})