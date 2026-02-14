//ROUTER

//IMPORT
const express = require('express');
const router = express.Router();
const {
    getEmployees,
    addEmployee,
} = require ('../controllers/employeeController');

//ROUTER

router.get('/', getEmployees);
router.post('/',addEmployee);

//EXPORT
module.exports = router;