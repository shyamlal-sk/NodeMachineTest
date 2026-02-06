const express = require('express');
const router = express.Router();

//User route

router.get('/userslist', (req,res)=>{
    res.json({'message':'route working'})
});

//users API

router.get('/users', ((req,res) => {
    res.json({"message": "User API working"});
}))

//post API 
router.post('/users', ((req,res) =>{
    let user = req.body; 
    res.json(user);
}))

module.exports = router;


