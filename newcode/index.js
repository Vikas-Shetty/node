/*
*primary file for the API
*/
// Dependencies
var http = require('http');
var url = require('url');

// the server should respond to all requests with a string
                    
var server = http.createServer(function(req,res){

    //Get the URL and prase it
    var parsedUrl = url.parse(req.url,true);

    //get the path
    var path = parsedUrl.pathname;
    var trimmedpath = path.replace(/^\/+|\/+$/g,'');

    //Get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get the HTTP Method
    var method = req.method.toLowerCase(); 

    //send the response
    res.end('Hello world\n');

    //log the request path
    console.log('Request received on path: '+trimmedPath+ 'with method: '+method +' and with these query string paramters',queryStringObject);


});

//start the sserver, have it listen on port 13882
server.listen(13882,"0.0.0.0", function(){
    console.log("the server is listeninig on port 13882 now");
});