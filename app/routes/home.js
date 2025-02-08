export default function(app){
    app.get('/', function(req, res){
        res.render("home/inicio");
    });
};