const kafka = require('./kafka');

async function init() {
    const group = process.argv[2];
    const consumer = kafka.consumer({
        groupId: group     ///creating consumer group
    });
    console.log('Connecting...');
    await consumer.connect();
    console.log('Connected successfully!');
    
    // Subscribe to the topic
    await consumer.subscribe({
        topic: 'ride-requests',
        fromBeginning: true
    });
    
    // Consume messages from the topic
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`Message received from topic: ${group} ${topic}, partition: ${partition}, key: ${message.key.toString()}, value: ${message.value.toString()}`);
        }
    });
    
    console.log('Consumer is running...');
  
}

init();