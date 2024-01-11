const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    courseInterest: {
        type: String,
        required: true
    },
    claimed: {
        type: Boolean,
        default: false
    },
    claimedBy: {
        type: String,
        required: false  // 'not required' by default
    }
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);

module.exports = { Enquiry };
