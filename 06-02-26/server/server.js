const express = require('express');
const app = express();

const router = require('./src/routes/routes');


//Middleware

app.use(express.json());


//mount route

app.use('/',router);




//Server
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server running on http://localhost: ${PORT}`)
});




