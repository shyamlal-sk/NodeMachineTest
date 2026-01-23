const fs = require('fs');

////Task 1: Create Folder 

const makeFolder = (dirname) => {
    try{
        fs.mkdirSync(dirname);
        console.log("Folder Created");
    }
    catch (error) {

        console.log("Unable to create Folder", error);
    }
}

makeFolder('./Employees2');

////Create File & Write Data Inside the employees folder:

const addFile = (filename,data) =>{

    try{
        fs.writeFileSync(filename,data,'utf8');
        console.log("File Written Successfully");
    }
    catch(error){
        console.log("Unable to create file", error);
    }

}

addFile('./employees2/employees.txt', '{ID:101, Name: "Rahul", Department:"Development", Requirements:""}');

////Task 3: Append New Employee

const addEmployee = (filename,data) => {
    try{
        fs.appendFileSync(filename,data);
        console.log("Employee added Successfully");
    }
    catch(error) {
        console.log("Unable to add employee", error);
    }
}

addEmployee('./employees2/employees.txt',',{ID:102, Name: "Anjali", Department:"HR", Requirements:""}');

////Display the entire content in the console

const showEmployees = () =>{
    try{
        data = fs.readFileSync('./employees2/employees.txt','utf8');
        console.log('Employees :', data);
    }
    catch (error) {
        console.log("Unable to read employees", error);
    }
}

showEmployees();

////Task 5: Search Employee by Name Search for employee name "Anjali"

const searchEmployee = (name) =>{
    try {
        const data = fs.readFileSync('./employees2/employees.txt','utf8');
        if (data.includes(name)) {
            console.log("Employee", name, " found");
        } else {
            console.log("Employee", name ," Not Found");
        }
    }
    catch (error) {
         console.log("Unable to search employees", error);
    }
};

searchEmployee('Anjali');

///Task 6.Delete File Delete employees.txt

const deleteFile = (filename) => {
    try{
        fs.unlinkSync(filename);
        console.log("File Deleted");
    }
    catch (error) {
        console.log("Unable to Delete",  error);
    }
}

deleteFile('./employees2/employees1.txt');