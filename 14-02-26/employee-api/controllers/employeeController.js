//EMPLOYEE CONTROLLER

const mongoose = require ('mongoose');
const Employee = require('../models/Employee');


//GET EMPLOYEES
exports.getEmployees = async (req,res) => {
    try{
        const employees = await Employee.find();
        console.log('GET emplyee 200')
        res.status(200).json({
            status: 'success',
            result: employees,
        })
    } catch (error) {
        res.status(500).json({
            message: 'error',
        })
        console.error('ERROR')
    }
};

//ADD EMPLOYEE
exports.addEmployee = async (req,res) => {
    try{
        const newEmployee = new Employee(req.body);
        if (!newEmployee.name) {
            res.json({
                message: 'no data',
            })
        } else {
            
        await newEmployee.save();
        res.status(201).json({
            status:'succes',
            message: 'employee added',
            employee: newEmployee,

        });
        console.log('POST 200 Employee Added');
        }
        
    } catch (error) {
        res.status(500).json({message:'error'})
        console.error(`error:${error}`);
    }
} 

