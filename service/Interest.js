var Interest = require('../model/Interest');

async function addInterest(data) {
    await Interest.create(data, function (err, result) {
        if (err) {
            return false;
        }
        else {
            return true;
        }
    });
}

async function deleteInterest(id) {
    await Interest.remove({ '_id': id }).then(function (err) {
        if (err) {
            return false;
        }
        else {
            return true;
        }
    });
}


async function getInterest(findId) {
    const result = await Interest.findOne({ 'userId': findId });
    if (result != null) {
        return result;
    } else {
        return null;
    }
}


exports.addInterest = addInterest;
exports.deleteInterest = deleteInterest;
exports.getInterest =getInterest;