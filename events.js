const EvEmit = require('events');

const ev = new EvEmit();

ev.on('newListener', (event, listener) => {
  console.log(`New listener added for event: ${event}`);
});

ev.emit('newListener', 'testEvent');
