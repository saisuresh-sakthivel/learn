var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({'extended':false});
app.get('/index.htm',function(req,res){
	res.sendFile(__dirname+"/program.htm");
})
app.get('/listusers',function(req,res){
	fs.readFile(__dirname+"/user_data.json",'utf-8',function(err,data){
		/*var user_data = JSON.parse(data);
		user_data.push({
      "name" : "suresh",
	  "password" : "password2",
	  "profession" : "librarian",
	  "id": user_data.length
	  
   })*/
	   res.end(JSON.stringify(data));
	});	
});
app.get('/users',function(req,res){
   res.sendFile(__dirname+"/users.htm");	
});

app.get('/:id', function (req, res) {
	fs.readFile(__dirname+"/user_data.json",'utf-8',function(err,data){
		var users = JSON.parse(data);
		var id = req.params.id-1;
		console.log(users[id])
		res.end(JSON.stringify(users[id]));
	});
})

//app.use(express.static('public'));
app.post('/addusers', urlencodedparser,function(req,res){
	fs.readFile(__dirname+"/user_data.json",'utf-8',function(err,data){
		var user_data = JSON.parse(data);
		user_data.push({
      "name" : req.body.name,
	  "password" : req.body.password,
	  "profession" : req.body.profession,
		"id": user_data.length+1});
	  fs.writeFile("user_data.json",JSON.stringify(user_data),function(err){
		if (err) {
      return console.error(err);
      }
	  });	  
    })
    res.end('added User');	
});
/*app.post('/process_post', urlencodedparser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})*/
app.listen(8081,function(){
	console.log('server started');
});