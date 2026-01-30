const fs = require('fs');
const path = require('path');

//Create a folder called `data` (if it doesn’t exist).

const folderpath = './data';
const filename = 'info.txt';
const filedata = 'Node.js Machine Test'
const fullpath = path.join(folderpath,filename);

try {
    fs.mkdirSync(folderpath);
    console.log(`folder named ${folderpath} exists`);
} catch (error) {
    console.log('folder exists', error);
};

// Inside `data`, create a file named `info.txt`.

try {
    fs.writeFileSync(fullpath,'','utf8');
    console.log (`file named ${filename} created!`);
}catch (error) {
    console.log('error'. error);
};

//Write the text `"Node.js Machine Test"` into the file.

try {
    fs.appendFileSync(fullpath, filedata);
    console.log(`data written to ${fullpath}`);
} catch (error) {
    console.log('unable to write to file', error);
};

//Read the file content and print it to the console.

try {
    const data = fs.readFileSync(fullpath, 'utf8');
    console.log(`file read! the content is : ${data}`)
} catch (error) {
    console.log('unable to read file', error)
};


/// OS MODULE

const os = require('os');

//OS platform

console.log(os.platform());

// Total memory

console.log(os.totalmem());

// Free memory

console.log(os.freemem());
        
// CPU count

const cpus = os.cpus();

console.log(`this pc has ${cpus.length} cpus`);

//// event

const EventEmitter = require('events');

const fileCreated = new EventEmitter();

fileCreated.on('file_created', ()=>{
    console.log("File has been created!");
});

fileCreated.emit('file_created');

///// bonus

// Append the system info (from Task 2) into the `info.txt` file.
// Trigger another event called `infoAppended` when this append is done.
//`Event Triggered: System info appended to file!`

const sysinfo = `\n platform : ${os.platform()},
                 \n total mem : ${os.totalmem()},
                 \n free mem : ${os.freemem()},
                 \n CPU count : ${os.cpus().length}`

const appendFileEmitter = new EventEmitter;

appendFileEmitter.on('appended', ()=>{
    console.log('System info appended to file');
});

try {
    fs.appendFileSync(fullpath, sysinfo);
    console.log('file appended');
    appendFileEmitter.emit('appended');
} catch (error) {
    console.log('error appending system info',error);
};