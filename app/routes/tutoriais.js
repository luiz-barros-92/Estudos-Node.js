import dbConnection from '../../config/dbConnection.js';

export default function(app){

    var connection = dbConnection();
    
    app.get('/tutoriais', function(req, res){
        
        connection.query('select * from tutoriais', function(error, result){
            res.render("tutoriais/tutoriais", {projetos : result});
        });
    });
};