import dbConnection from '../../config/dbConnection.js';

export default function(app){

    var connection = dbConnection();

    app.get('/', function(req, res){
        
        connection.query('select * from inicio', function(error, result){
            res.render("home/inicio", {projetos : result});
        });
    });
};