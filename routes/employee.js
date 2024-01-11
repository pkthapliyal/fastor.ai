require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Employee } = require("../models/employee");
const employeeRouter = express.Router();



// register route
employeeRouter.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        let isEmployee = await Employee.findOne({ email });

        // Check already registered student
        if (isEmployee) {
            return res.status(400).json({ message: 'Employee already registered with this email' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new Employee instance
        const newEmployee = new Employee({
            name,
            email,
            password: hashedPassword,

        });

        // Save the Employee to the database
        const savedEmployee = await newEmployee.save();

        res.status(201).send({ message: "Registered Successfully" });
    } catch (error) {
        console.error('Error registering Employee:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// login 
employeeRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // is employeee
        const isEmployee = await Employee.findOne({ email });

        if (!isEmployee) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // cheking password
        const passwordMatch = await bcrypt.compare(password, isEmployee.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // token
        const token = jwt.sign(
            { employeeId: isEmployee._id, role: 'Employee' },
            process.env.JWT_SECRET,
            { expiresIn: '5h' }
        );

        res.json({ message: "Login Success", token, role: 'employee', employeeId: isEmployee._id });

    } catch (error) {
        console.error('Error logging in Employee:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});



module.exports = { employeeRouter };