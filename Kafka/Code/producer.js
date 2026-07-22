const kafka = require('./kafka');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function init() {
    const producer = kafka.producer();
    console.log('Connecting...');
    await producer.connect();
    console.log('Connected successfully!');
    
    rl.setPrompt('Enter message: ');
    rl.prompt();
    
    rl.on('line', async (input) => {
        const [name, location] = input.split(' ');
        
        await producer.send({
            topic: 'ride-requests',
            messages: [
                {
                    partition: location === 'NORTH' ? 0 : 1,
                    key: 'ride-' + Date.now(),
                    name,
                    location,
                    value: name + ' ' + location
                }
            ]
        });
        console.log('Message sent successfully!');
        rl.prompt();
    }).on('close', async () => {
        await producer.disconnect();
        console.log('Disconnected successfully!');
        process.exit(0);
    });
    
    // Send a message to the topic
    // await producer.send({
    //     topic: 'ride-requests',
    //     messages: [
    //         {
    //             partition: 0,
    //             key: 'ride-1',
    //             value: 'Hello World',
    //             location: 'North India'
    //         },
    //         {
    //             partition: 1,
    //             key: 'ride-2',
    //             value: 'Hello World 2',
    //             location: 'South India'
    //         },
    //         {
    //             partition: 1,
    //             key: 'ride-3',
    //             value: 'Hello World 3',
    //             location: 'West India'
    //         }
    //     ]
    // });
    
    // console.log('Message sent successfully!');
    // await producer.disconnect();
    // console.log('Disconnected successfully!');
}

init();
