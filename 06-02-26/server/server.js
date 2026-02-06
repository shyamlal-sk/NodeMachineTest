const express = require('express');
const app = express();

//Middleware

app.use(express.json());

//users

app.get('/users', ((req,res) => {
    res.json({"message": "User API working"});
}))

//post API 

app.post('/users', ((req,res) =>{
    let user = req.body; 
    res.json(user);
}))



//Server
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server running on http://localhost: ${PORT}`)
});



// METHOD:  GET
// URL:     localhost:3000/users
// BODY :   NONE
// RESPONSE : 
// {
//     "message": "User API working"
// }

// METHOD:  POST
// URL:     localhost:3000/users
// BODY :   
//{
//  "name": "Yan",   "role": "Developer" 
//}
// RESPONSE : 
// {
//   "name": "Yan",   "role": "Developer" 
// }

