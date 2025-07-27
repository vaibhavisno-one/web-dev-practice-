import express from "express";

import data from "./data.js"
const app = express();

const port =3000


app.get("/",(req,res)=>{
    res.status(200).send("ho gaya kaam")
})

//industry standards

// req.query is for keyvalue? pair
app.get("/users",(req,res)=>{
    const {name} = req.query;  //1  Route Setup and Query Extraction


    if(name){  //2  Conditional Check

        const user = data.filter((user)=>{//3  Filtering the Data

            return user.name===name//4  Exact Name Match

        })
        res.send(user)//5  Respond with Filtered Data

    }
    res.send(data)//6  Respond with All Data

})


// router params

// req.params is for dynamic routing 
app.get("/users/:id",(req,res)=>{
    const id = req.params;

    
})





app.listen(port,(req,res)=>{
    console.log("banadiya server")
})   