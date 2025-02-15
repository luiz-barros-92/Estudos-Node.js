import dbConnection from '../../config/dbConnection.js';

export default function(app){

    var connection = dbConnection();

    app.get('/projetos', function(req, res){       

        connection.query('select * from projetos', function(error, result){
            res.render("projetos/projetos", {projetos : result});
        });
    });
};