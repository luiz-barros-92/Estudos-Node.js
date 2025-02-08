export default function(app){
    app.get('/linux', function(req, res){
        res.render("linux/linux");
    });
};