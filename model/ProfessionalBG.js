var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ProfessionalSchema = new Schema({
    field: String,
    orgName: String,
    position: String,
    technology: String,
    timeFrom: Date,
    timeTo: Date,
    userId: Number
})

module.exports = mongoose.model('ProfessionalBG', ProfessionalSchema);