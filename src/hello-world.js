import { createServer } from 'http';

var server = createServer(function(req, res) {

    var categoria = req.url;

    if (categoria == '/projetos') {
        res.end("<html><body>Projetos</body></html>");

    } else if (categoria == '/tutoriais') {
        res.end("<html><body>Tutoriais</body></html>");

    } else if (categoria == '/linux') {
        res.end("<html><body>Linux</body></html>");

    } else {
        res.end("<html><body>Inicio</body></html>");
    }    
});

server.listen(3000);
