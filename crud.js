
let http = require("http");
let url = require("url");
let fs = require('fs');
let server = http.createServer((req,res)=>{
    let parsedurl = url.parse(req.url,true);
    if(parsedurl.pathname=="/products"){
        // readFile:-
        fs.readFile("./products.json","utf-8",(err,data)=>{
            console.log(err);
            if(err){
                res.write(JSON.stringify(err.message));
                res.end();
            }
            else{
                res.write(data);
                res.end();
            }

        })
        //readFileSync:-
        // let data = fs.readFileSync("./products.json");
        // res.write(data);
        // res.end();
        //appendFile:-
        //  fs.appendFile("songs.txt","po pove yekantham, na rani na sontham, cherukundi ......","utf-8",(err)=>{
        //     if(err){
        //         res.write(JSON.stringify(err.message));
        //         res.end();
        //     }
        //     else{
        //         res.write("created using appendFile successfully !!!!");
        //         res.end();
        //     }

        // })
        // //unlink:-
        // fs.unlink("songs.txt",(err)=>{
        //     if(err){
        //         res.write(JSON.stringify(err.message));
        //         res.end();
        //     }
        //     else{
        //         res.write("deleted using unlink successfully !!!!");
        //         res.end();
        //     }
        // })
    }
    else{
        res.write("not found");
        res.end();
    }
})
var port = 3005;
server.listen(port,()=>{
    console.log("server has started "+`http://localhost:${port}`);
})
