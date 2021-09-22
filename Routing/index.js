// console.log("Hello World from Ali Mughal");

const http = require("http");

// First Method

// const index = (request, response) => {
//   response.writeHead(200);
//   response.end("This is node Application");
// };

// const about = (request, response) => {
//   response.end("This is about Page");
// };

// const services = (request, response) => {
//   response.end("This is services Page");
// };

// const contact = (request, response) => {
//   response.end("This is contact Page");
// };

// http
//   .createServer(function (req, res) {
//     if (req.url == "/") {
//       return index(req, res);
//     }
//   })
//   .listen(3000);


// Another Method

const routes = {
    "/": function index(request,response) {
      response.writeHead(200);
      response.end("This is node Application");
    },
    '/about': function about(request,response) {
      response.end("This is about Page");
    },
    '/services': function services(request,response) {
      response.end("This is services Page");
    },
    '/contact': function contact(request,response){
      response.end("This is contact Page");
    }
  
  };


http.createServer(function(req,res){
    if(req.url in routes){
        return routes[req.url](req,res);
    }
}).listen(3000,()=>{
    console.log("The serves is listening")
})