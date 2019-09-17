var fs = require('fs');
exports.save = function (data) {
    storage = JSON.parse(data)
    var name = storage.name1;
    var email = storage.email;
    var cy = storage.cy;
    var sub = storage.sub1.toLowerCase();
    var replaced = sub.split(' ').join('-');
    fs.appendFile(replaced + '.csv', name + "," + email + "," + cy + "\n", function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
};