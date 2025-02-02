import express from 'express';

var app = express();

app.get('/', function(req, res){
    res.send("<html><body>Inicio</body></html>");
})

app.get('/projetos', function(req, res){
    res.send("<html><body>Projetos</body></html");
})

app.get('/tutoriais', function(req, res){
    res.send("<html><body>Tutoriais</body></html>");
})

app.get('/linux', function(req, res){
    res.send("<html><body>Linux</body></html>");
})

app.listen(3000, function(){
    console.log("Servidor online com Express")
});