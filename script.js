let http = require("http");
let fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('./index.html', "utf-8", (err, data) => {
        if (err) {
            res.write(JSON.stringify(err.message));
            res.end();
            return;
        }
        else{
            res.write(data)
        }

        // Write the contents of index.html to index1.html
        fs.writeFile('index1.html', data, "utf-8", (writeErr) => {
            if (writeErr) {
                res.write(JSON.stringify(writeErr.message));
                res.end();
                return;
            }

            // Read the newly created index1.html
            fs.readFile('./index1.html', "utf-8", (readErr, newData) => {
                if (readErr) {
                    res.write(JSON.stringify(readErr.message));
                    res.end();
                } else {
                    res.write(newData); // Send the content of index1.html
                    res.end();
                }
            });
        });
    });
});

let port = 3003;
server.listen(port, () => {
    console.log("Server started at http://localhost:" + port);
});
