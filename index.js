// const { readFile, readFileSync } = require('fs');

// // Blocking!
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt)


// // Non-blocking
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt)
// });

// // Promise based, also non-blocking
// const { readFile } = require('fs').promises;

// const txt = await readFile('./hello.txt', 'utf8');

// const { readFile } = require('fs').promises;

// async function hello() {  
// const file = await readFile('./hello.txt', 'utf8')
// }

// const myModule = require ('./module')
// console.log(myModule)

const express = require('express');

const app = express();
