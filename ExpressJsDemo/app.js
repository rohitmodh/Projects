
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

//app.use(adminRoute);
//we may have routes with some starting like /admin/add-product
/*
this we can place in each route like in in adminRoute.js, in route.get(), but express js provides us filters to make it stripped while registering the route in app.js
*/
app.use('/admin', adminRoute);
//this will now make our add-roduct route as /admin/add-product
app.use(shopRoute);
//Basic use of app.use()
// app.use((req, res, next) => {
// console.log('in the middleware');
// next(); //allows the request to continue to next middleware inline
// });



// app.use('/product', (req, res, next) => {
//     console.log(req.body); //this will not parse the body automatically, we need to add a parser before all our middleware pipelines - line no. 14, it will not parse all body types, only the one we getting through form.
//     res.redirect('/');  
// });

//another way to define a middleware is based on request type - get/post/delete/patch/put


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));    
});
    

// const server = http.createServer(app);

// server.listen(3000);
    
//instead we can use app.listen

app.listen(3000);