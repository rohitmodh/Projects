
const Product = require('../Models/products');

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'add-product.html')); 
    res.render('add-product', {docTitle: 'Add Product', path: '/admin/add-product'});
 
};


exports.postAddProduct = (req, res, next) => {
    console.log('admin', req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');  
};


exports.getProducts = (req, res, next) => {
    // console.log('shopjs', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
   // const products = Product.fetchAll();
    //now this will not get products, because fetchall method runs but data is fetched inside inner function (readfile), and due to async behaviour the outer funtion is retuned with no data for this, we will pass a callback inside fetchAll, this will ensure that the inner part is run once we recieve the data.
    Product.fetchAll(products =>{
        res.render('shop', {
            prods: products,
            docTitle: 'Shop',
            path: '/shop'
        });
    });
};