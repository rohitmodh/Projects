const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const { connectProducer, ensureTopicExists } = require('./kafka/OrderProducer'); // 👈 updated import

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

const PORT = 3000;

const start = async () => {
  const MAX_RETRIES = 5;
  let attempts = 0;

  while (attempts < MAX_RETRIES) {
    try {
      await connectProducer(); // ✅ Connect Kafka producer
      console.log('✅ Kafka Producer connected');

      await ensureTopicExists('product-events'); // 🛠️ Ensure topic is created
      console.log('✅ Kafka topic ready');

      app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
      });

      break; // success
    } catch (err) {
      attempts++;
      console.error(`❌ Kafka connection attempt ${attempts} failed:`, err.message);
      if (attempts >= MAX_RETRIES) {
        console.error('💥 Max retries reached. Exiting.');
        process.exit(1);
      }
      await new Promise(res => setTimeout(res, 3000)); // wait before retry
    }
  }
};

// 🧹 Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🔌 Gracefully shutting down...');
  try {
    const { disconnectProducer } = require('./kafka/OrderProducer');
    await disconnectProducer();
    console.log('🛑 Kafka Producer disconnected');
  } catch (err) {
    console.error('Error during shutdown:', err.message);
  } finally {
    process.exit();
  }
});

start();
