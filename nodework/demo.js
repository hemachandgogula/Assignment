const http = require('http');
var mysql=require('mysql');
const hostname = '127.0.0.1';
const port = 3000;
var con=mysql.createConnection({
    host:'localhost',
    user:'chandu',
    pass:'123456',
});
con.connect(function(err){

    var sql="";
    con.query(sql,function(err,result){
        
            console.log("yes u r here now");
    })
});
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>This is the time to lead a happy life</h1>')
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});