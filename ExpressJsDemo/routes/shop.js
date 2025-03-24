const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (req, res, next) => {
    // console.log('shopjs', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop', path: '/shop'});
});

module.exports = router;
