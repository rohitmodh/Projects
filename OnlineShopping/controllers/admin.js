const Product = require('../models/product');
const { publishProductCreated } = require('../kafka/OrderProducer');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = async (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();

  // Send Kafka event
  const eventPayload = {
    id: `product-${Date.now()}`, // Unique ID for Kafka key
    title,
    imageUrl,
    price,
    description,
    eventType: 'PRODUCT_CREATED',
    createdAt: new Date().toISOString()
  };

  try {
    await publishProductCreated(eventPayload);
    console.log('Product event published to Kafka');
  } catch (err) {
    console.error('Kafka publish error:', err.message);
  }

  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
