var fs = require('fs');
exports.addFile = (function (req, res) {

        req.addListener("data", function (reqData) {
            console.log("data : " + reqData)
            var data2 = JSON.parse(reqData);
            var filename = data2.sub1.split(" ").join("-");
            fs.appendFile(filename + ".csv", data2.sub1 + "," + data2.name1 + "," + data2.email + "\n", function (err) {
                
                if (err) throw err;
                console.log('Saved!');
            });
            res.end();

        });

})