const http=require('http');
http.createServer(function(req, res){
    res.writeHead(200,
        {
        'content_Type':'text/html'
    });
    res.write('hello this kevin im eb developer');
    res.end();
}).listen(8080,()=>{
console.log('server is running on http://localhost:8080')
});