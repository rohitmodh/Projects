const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'online-shopping-app-producer',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

const producer = kafka.producer();
const admin = kafka.admin();

const connectProducer = async () => {
  await producer.connect();
  await admin.connect();
  console.log("Kafka Producer and Admin connected");
  console.log("Kafka Producer and Admin connected");
};

const disconnectProducer = async () => {
  await producer.disconnect();
  await admin.disconnect();
};

const ensureTopicExists = async (topicName) => {
  const topics = await admin.listTopics();
  if (!topics.includes(topicName)) {
    await admin.createTopics({
      topics: [{ topic: topicName }],
    });
    console.log(`✅ Created Kafka topic: ${topicName}`);
  } else {
    console.log(`✅ Kafka topic exists: ${topicName}`);
    
    //this is code to test git webhook and api
    console.log(`✅ Kafka topic exists: ${topicName}`);

        if(topics.includes(topicName)){
          //add some business logic
        }
        if(topics.includes(topicName)){
          //add some business logic
        }
  }
};

const publishProductCreated = async (product) => {
  await producer.send({
    topic: 'product-events',
    messages: [{ key: product.id, value: JSON.stringify(product) }],
  });
  console.log(`✅ product published.`);
};

module.exports = {
  connectProducer,
  publishProductCreated,
  ensureTopicExists,
  disconnectProducer
};
