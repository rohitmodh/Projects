
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data', 'products.json');

const GetProductsFromFile = (callback) =>{
    fs.readFile(filePath, (err, data) =>{
        if(err || data.length == 0){
            //return [];
           return  callback([]);
        }
        //return JSON.parse(data);
         callback(JSON.parse(data));
    });
};
module.exports = class Product {
    constructor(title){
        this.title = title;
    }

    save(){
        GetProductsFromFile(products => {
            products.push(this);
            fs.writeFile(filePath, JSON.stringify(products), (error) =>{
                console.log(error);
            });
        });
    }

    static fetchAll(callback) {
        GetProductsFromFile(callback);
    }
}