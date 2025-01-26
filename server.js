const http=require('http');
const PORT=3000;
const HOST="localhost";
const app=express();
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-Type':'text/plain'
    });
    if(req.url==='/'){
        res.end("welcome to home page");
    }
    elseif(req==='/about'){
        res.end('welcome to tha about navigation bar and still to been attracted with this system');
    }
    else{
        res.writeHead(404);
        res.end('404 not page found');
    }
    server.listen(PORT,HOST,()=>{
     Console.log('Server is start runnid at hhtp://${HOST} :${PORT}');
    });
