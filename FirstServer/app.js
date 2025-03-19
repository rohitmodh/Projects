const fs = require('fs');
const http = require('http');
const routes = require('./routes');

// function rqListener(req, res){

// }
// http.createServer(rqListener);

// http.createServer(function(req, res) {
    
// });

const server = http.createServer(routes.handler); // if not multiple func or keys to export then simply use routes(the one exported) here we used routes.handler coz we have exported multiple key values
server.listen(3000);