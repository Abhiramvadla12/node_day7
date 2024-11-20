let http = require("http");
let url = require("url");
let fs = require('fs');
let server = http.createServer(async(req,res)=>{
    parsed_data = url.parse(req.url,true);
    if(parsed_data.pathname=="/products"){
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        fs.writeFile("products.json",JSON.stringify(data,null,2),"utf-8",(err)=>{
            if(err){
                res.write(JSON.stringify(err.message));
                res.end();
            }
            else{
                res.write("file created succesfully!");
                res.end();
            }          
        })
    }
    else{
        res.write("not found");
        res.end();
    }
})
let port = 3002;
server.listen(port,()=>{
    console.log("server running"+"http://localhost:"+port);
})