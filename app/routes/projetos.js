export default function(app){
    app.get('/projetos', function(req, res){
        res.render("projetos/projetos");
    });
};