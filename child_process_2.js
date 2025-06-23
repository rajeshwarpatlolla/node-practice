process.on('message', (msg) => {
  console.log('Child received:', msg);

  // Send a message back
  process.send('Hi from child process!');
});
