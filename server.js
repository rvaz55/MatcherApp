//Here we start by downloading the 
//npm modules listed below
var fs = require("fs");
var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");

//Creating the instance of express and 
//storing it in the app variable then naming the port
var app = express()
var PORT = 3000

//Then we make sure that the server we created 
//is LISTENING 
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});

//Here we create two routes: 'survey' & 'home'
app.get('/home', function(req,res){
    console.log("this is the home route")
});
app.get('/survey', function(req,res){
    console.log("this is the survey route")

});
    
    
   