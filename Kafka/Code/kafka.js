const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.0.0.2:9092']
});

module.exports = kafka;