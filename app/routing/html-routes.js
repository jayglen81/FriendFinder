var path = require('path');

module.exports = function(req, res){
    
    app.get('/survey', function(req, res){
        res.sendfile(path.join(__dirname + '/../public/survey.html'));
    });

    app.use(function(req, res) {
        res.sendfile(path.join(__dirname + '/../public/home.html'));
    });

    
}