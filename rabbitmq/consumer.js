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

    channel.assertQueue(queue, { durable: false });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(queue, (msg) => {
      console.log(`Receiver received a message to producer. Message is: ${msg.content.toString()}`)
    }, { noAck: true });
  })
})

