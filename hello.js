import { createServer } from 'http';

var server = createServer(function(req, res) {

    res.end("<html><body>Primeiro servidor NodeJs</body></html>");
});

server.listen(3000);
