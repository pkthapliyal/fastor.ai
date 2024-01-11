const mongoose = require('mongoose');
const { Schema } = mongoose;


const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { versionKey: false });



const Employee = mongoose.model('Employee', employeeSchema);

module.exports = { Employee };