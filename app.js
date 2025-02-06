import express from 'express';
import msgFunction from './mod_01.js';

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/inicio");
})

app.get('/projetos', function(req, res){
    res.render("projetos/projetos");
})

app.get('/tutoriais', function(req, res){
    res.render("tutoriais/tutoriais");
})

app.get('/linux', function(req, res){
    res.render("linux/linux");
})

app.listen(3000, function(){
    console.log(msgFunction());
});