var mysql;
var con;
var sql;

var bodyParser = require('body-parser')

const express= require('express');

const app = new express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded(true));

connect_to_database();

function connect_to_database()
{   
   mysql = require('mysql');

   con = mysql.createConnection
    ({
          host: "localhost",
          user: "root",
          password: "",
          database : "life"
    });

   con.connect(function(err) 
   {
   if (err) throw err;    
   }
   );
}


app.get('/',function(req,res)
{
  res.sendFile('C:/Users/lenovo/Desktop/node/limitedwritings/story.html');
});

app.get('/stories',function(req,res)
{
con.query("select * from stories",function(err,result)
   {
            res.json(result);
   });
});

app.get('/add',function(req,res)
{
  res.sendFile('C:/Users/lenovo/Desktop/node/limitedwritings/admin.html');
});


app.post('/poststory',function(req,res)
{
  console.log(req.body.story_name);
  res.send(addData(req.body.story_name,req.body.story_desc,req.body.story_cover_url,req.body.story_author,req.body.story_editor,req.body.story_url));
});

function addData(a,b,c,d,e,f)
{
   var values = [[a,b,c,d,e,f]];
   var returnvalue=200;
   con.query("insert into stories(name,story_desc,cover_url,author,editor,story_url) values ?",[values],function(err,result)
   {
      if(err)
        throw err;
   });
return returnvalue;
}


app.listen(3000)
