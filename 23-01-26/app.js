const fs = require('fs');

// fs.writeFile('testfile.txt', 'file content goes here', (err) => {
//     if (err) {
//         console.log("error creating file", err);
//     } else {

//         console.log("success");
//     }
// });

const data = fs.readFileSync('testfile.txt', 'utf8');
console.log(data);