var mongoose = require('mongoose');
var Schema = mongoose.Schema;

InterestSchema = new Schema({
    interest : String,
    userId : Number
})

module.exports = mongoose.model('Interest', InterestSchema);