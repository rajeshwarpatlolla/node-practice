const { exec, spawn, fork } = require('child_process');

// EXEC
// exec('ls -la', (error, stdout, stderr) => {
//   if (stderr) {
//     console.log('stderr:', stderr);
//   }
//   if (error) {
//     console.log('error:', error.message);
//     return;
//   }
//   console.log('stdout:', stdout);
// });

// SPAWN
// const child = spawn('ls', ['-la', '/usr']);

// child.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// child.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// FORK
const child = fork('child_process_2.js', ['arg1', 'arg2']);
child.on('message', (message) => {
  console.log('Message from child:', message);
  // process.exit();
  child.kill();
});
child.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});
child.send({ hello: 'world' });
