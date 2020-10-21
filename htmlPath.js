let path = require("path");


module.exports = function(app) {

    app.get("/reservations", function(req, res) {
        res.sendFile(path.join(__dirname, "../reservations"));
    })

    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../tables.html"));
    })
    
    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    })
}