const mongoose = require('mongoose');



mongoose.pluralize(null);

const schema = new mongoose.Schema({
    candidateName: {type: String, required: true},
    candidateEmail: {type: String, required: true},
    candidatePhone: {type: String, required: true},
    candidateResume: {
        data: Buffer,
        contentType: String, 
    },
    extraFiles: {
        data: Buffer,
        contentType: String,
    },
    comment: {type: String},
    requestTime: {type: String, required: true},
    vacancyId: {type: String, required: true},
});


module.exports = mongoose.model('Candidate', schema);