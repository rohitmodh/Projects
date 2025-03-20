const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');
const app = express();

//Basic use of app.use()
// app.use((req, res, next) => {
// console.log('in the middleware');
// next(); //allows the request to continue to next middleware inline
// });

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
res.send('<form action="/product" method = "POST"><input type="text" name = "title"><button type="submit">Add PRoduct</button></form>');    
//next(); //allows the request to continue to next middleware inline
});


// app.use('/product', (req, res, next) => {
//     console.log(req.body); //this will not parse the body automatically, we need to add a parser before all our middleware pipelines - line no. 14, it will not parse all body types, only the one we getting through form.
//     res.redirect('/');  
// });

//another way to define a middleware is based on request type - get/post/delete/patch/put
app.post('/product', (req, res, next) => {
    console.log(req.body); //this will not parse the body automatically, we need to add a parser before all our middleware pipelines - line no. 14, it will not parse all body types, only the one we getting through form.
    res.redirect('/');  
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express Js</h1>');    
});
    

// const server = http.createServer(app);

// server.listen(3000);
    
//instead we can use app.listen

app.listen(3000);