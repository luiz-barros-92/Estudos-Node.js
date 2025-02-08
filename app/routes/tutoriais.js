export default function(app){
    app.get('/tutoriais', function(req, res){
        res.render("tutoriais/tutoriais");
    });
};