const kafka = require('./kafka');

async function init() {
    
    const admin = kafka.admin();
    console.log('Connecting...');
    await admin.connect();
    console.log('Connected successfully!');


    console.log('Creating topics...');
    await admin.createTopics({
        topics: [
            {
                topic: 'ride-requests',
                numPartitions: 2, //0 and 1
            }
        ]
    });

    console.log('Topic created successfully!');
    console.log('Disconnecting...');
    await admin.disconnect();
    console.log('Disconnected successfully!');
}

init();


/// After setting topics and partitions, we can start producing messages to the topics admin work is done
/// We will use the client.js file to produce messages to the topics
