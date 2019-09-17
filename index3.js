var fs = require('fs');
exports.viewClassList = function (res, subject,url) {
    console.log(subject)
    // it will render the html table file , this file will send an ajax request whenever it is loaded
    fs.readFile(url, function (err, htmlData) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        data = "" + htmlData
        data = data.replace("_Subject", subject)
        res.end(data);
    });
}