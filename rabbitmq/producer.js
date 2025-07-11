const amqp = require('amqplib/callback_api');


amqp.connect('amqp://localhost', (error, connection) => {
  if (error) {
    throw error;
  }
  connection.createChannel((errorChannel, channel) => {
    if (errorChannel) {
      throw errorChannel;
    }
    const queue = 'hello';
    const msg = 'Hello world';

    channel.assertQueue(queue, { durable: false });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(`Producer sent a message to consumer. Message is: ${msg}`);
  })
})

