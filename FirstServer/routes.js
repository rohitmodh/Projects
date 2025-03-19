const fs = require('fs');


// function requstHandler(){

// }

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method; 
if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if(url ==='/message' && method === 'POST'){
    const body = [];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }


res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>first page</title><head>');
res.write('<body><H1> hello from node js server</H1></body>');
res.write('<html>');
res.end();
};

//module.exports = requestHandler;
//or
module.exports = {
    handler : requestHandler,
    text: 'some text or func to export'
};

// or module.exports.handler = requestHandler;
//module.exports.text = some text;

//this is also written as more shorter way supported by node js
//exports.handler = requestHandler;
//exports.text = 'some text';