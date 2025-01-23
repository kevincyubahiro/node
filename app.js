const http =require('http');
const PORT=3000;
http.createServer((req,res)=>{
    res.writeHead(200,{
        'content_Type':'text/plain'
    })
   
    console.log('yes of welcome to my site')

}).listen(PORT,()=>{
    console.log('http://localhost:3000')
})

