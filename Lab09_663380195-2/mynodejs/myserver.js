const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = './Lab09_663380195-2/mynodejs/mypage';
    switch (req.url) {
        case '/':
            path += '/index.html';
            break;
        case '/menu':
            path += '/menu.html';
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
})


server.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});