const fs = require('fs');

// ////Task 1: Create Folder 

// fs.mkdir('./employees', (err) => {
//     if (err) {
//         console.log("directory exists",err);
//     } else {
//         console.log("directory created")
//     }
// });

// //// Task 2: Create File & Write Data . Create File & Write Data Inside the employees folder:

// fs.writeFile('./employees/employees.txt', '', (err) =>{
//     if (err) {
//         console.log("File Not Created", err);
//     } else {
//         console.log("File Created");
//     }
// })


////Write the following employee data:

// fs.appendFile('./employees/employees.txt', '{ID:101, Name: "Rahul", Department:"Development", Requirements:""}', (err)=>{
//     if (err) {
//         console.log("Record not added", err);
//     } else {
//         console.log("Record added");
//     }
// });

//// Task 3: Append New Employee:

// fs.appendFile('./employees/employees.txt', ',{ID:102, Name: "Anjali", Department:"HR", Requirements:""}', (err)=>{
//     if (err) {
//         console.log("Record not added", err);
//     } else {
//         console.log("Record added");
//     }
// });

////Display the entire content in the console

// const empData = fs.readFileSync('./employees/employees.txt', 'utf8');
// console.log('employee data :', empData);

// reading file with error checking

// const readFileContent = (filename) => {
//     if (fs.existsSync(filename)) {
//         console.log('file exists');
//         data = fs.readFileSync(filename, 'utf8');
//         console.log(data);

//     } else {
//         console.log('file does not exist');
//     }
// }

// readFileContent('./employees/employees.txt');



////5: Search Employee by Name . Search Employee by Name Search for employee name "Anjali"

// data = fs.readFileSync('./employees/employees.txt', 'utf8');
// console.log(data);

// if (data.includes('Anjali')) {
//     console.log("Employee Found");
// } else {
//     console.log("Employee Not Found");
// }


////6. Delete File Delete employees.txt

// fs.unlink('./employees/emp1.txt', (err) =>{
//     if(err) {
//         console.log("Error!",err);
//     } else {
//         console.log("File Deleted successfully!")
//     }
// });

// const deleteFile = (filename) => {
// try {
//     fs.unlinkSync(filename);
//     console.log("deleted")
// } catch (error) {
//     console.log("error", error);
// } finally {
//     console.log("It runs anyways")
// }
// };

// deleteFile('txt.txt');

const makeaFile = (filename, content) => {
    try {
        fs.writeFileSync(filename, content);
        console.log("FileWritten");
    } catch(error) {
        console.log("Error!");
    }
}

makeaFile('test.txt', 'content')

