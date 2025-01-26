const express=require('express');
const app= express();
const port = 3000;
app.get('/',(req,res)=>{
    res.write('hello kevin')
    app.listen(port,()=>
        concole.log('server running http://:3000')
    });
