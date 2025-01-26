const http=require('http');
//to create server
http.createServer(function(req, res){
    res.writeHead(200,
        {
        'content_Type':'text/html'
    });
    res.write('hello this kevin im eb developer');
    res.end();
}).listen(8080,()=>{
    // our app is listen on 
console.log('server is running on http://localhost:8080')
});