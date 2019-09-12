var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (q.pathname == "/") {
        filename = "index.html";
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (q.pathname == "/enroll") {
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
    }
