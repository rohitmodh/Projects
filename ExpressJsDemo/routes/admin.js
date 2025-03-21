
const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
   // res.send('<form action="/admin/product" method = "POST"><input type="text" name = "title"><button type="submit">Add PRoduct</button></form>');    
    //next(); //allows the request to continue to next middleware inline
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); //no need for ../ we can use .. as well coz anyways we are joining a path and / is added with join
    //just using utils for path - a neat way
   res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 

});
    
    //another way to define a middleware is based on request type - get/post/delete/patch/put
router.post('/product', (req, res, next) => {
    console.log(req.body); //this will not parse the body automatically, we need to add a parser before all our middleware pipelines - line no. 14, it will not parse all body types, only the one we getting through form.
    res.redirect('/');  
});


module.exports = router;