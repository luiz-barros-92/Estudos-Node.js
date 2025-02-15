import dbConnection from '../../config/dbConnection.js';

export default function(app){

    var connection = dbConnection();

    app.get('/linux', function(req, res){

        connection.query('select * from linux', function(error, result){
            res.render("linux/linux", {linux: result});
        });
    });
};