const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const router = express.Router();

router.get('/', (req, res, next) => {
    //res.send('<h1>Hello from express Js</h1>');    
    //sending html pages as response
    //res.sendFile('/views/shop.html'); // this wont work as / represents root directory of os, not the project and thus we need to make use of another core module of node js - path
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // __dirname is global variable holding abs path on our os to this project folder.
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
    

module.exports = router;
