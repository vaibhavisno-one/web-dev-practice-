const express = require('express');
const app = express();
const path =  require("path");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')//ejs setup

//route setup for / will do all those backend work for / route
app.get("/", function(req,res){
// res.send("kya chal raha hai")
res.render("index")// / route pae view folder ka index name ka page khulega
})  

app.get('/profile/:username', function(req,res){ //dynamic routing
    res.send(req.params.username)
    // res.send("chal raha hai")
})

app.listen(3000, function(){
    console.log('chal gaya'); 
    
}) 