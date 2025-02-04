import express from 'express';

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("secao/inicio");
})

app.get('/projetos', function(req, res){
    res.render("secao/projetos");
})

app.get('/tutoriais', function(req, res){
    res.render("secao/tutoriais");
})

app.get('/linux', function(req, res){
    res.render("secao/linux");
})

app.listen(3000, function(){
    console.log("Servidor online com Express")
});