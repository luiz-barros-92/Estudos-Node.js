export default function(app){

    app.get('/projetos', function(req, res){
    var mysql = require('mysql2');

    var connection = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : '1234',
        database : 'luiz_barros'
    });

    connection.query('select * from projetos', function(error, result){
        res.send(result);
    });
    
       //res.render("projetos/projetos");
    });
};