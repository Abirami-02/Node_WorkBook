// Http is a inbuilt module..
let http=require('http');
http.createServer(function(req,res)
{
  // give the content  status and description 
  res.writeHead(404,{'content-type':'text/html'});
  res.end("Welcome to the Node Js Learning Journey");// if u write one line code use end() else use write();
}).listen(5870, () => {
  console.log("Server running at http://localhost:5870/");
});