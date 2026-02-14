//EMPLOYEE MACHINE TEST SERVER

//IMPORTS
const express = require('express');
const app = express();
const empRouter = require('./routes/employeeRoute')
const connectDB = require('./config/db')


//CONNECT DB;
connectDB();

//MIDDLEWARES
app.use(express.json());

// //BASIC ROUTE

// app.use('/', (req,res) =>{
//     res.send('Employee API running');
// })

//MOUNT ROUTES
app.use('/employees', empRouter);

//SERVER
PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`);
});