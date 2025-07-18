const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs')//ejs setup

//route setup for / will do all those backend work for / route
app.get("/", function(req,res){
// res.send("kya chal raha hai")
res.render("index")// / route pae view folder ka index name ka page khulega
})  

app.listen(3000, function(){
    console.log('chal gaya');
    
}) 