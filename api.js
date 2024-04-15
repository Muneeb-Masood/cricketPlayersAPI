let express = require("express");
let http = require("http");
let fs = require("fs");


let app = express();



let data = JSON.parse(fs.readFileSync("data.json" , "utf-8"));

app.get("/:name?" , (req , res) =>{

    const name = req.params.name;
    let founded = false;

   for(let i = 0 ; i < data.length ; i++){

   if(name){

    if(name.toLowerCase() == data[i].name.split(" ")[0].toLowerCase() || name.toLowerCase() == data[i].name.split(" ")[1].toLowerCase()){
        
        res.send(data[i]);
        founded = true;
        return
    }
   }

   else{

    res.send(data);
    founded = true ;
    return;
   }
   }

   if(!founded){

    res.send({
        "code": 404,
        "status": "RESOURCE_NOT_FOUND",
        "data": "Not found."
    });
   }

})

app.listen(4000 , () => {console.log("Server started")});