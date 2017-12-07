const home = require('../controllers/home');
module.exports = function(app) {
    app.post('/addNote', (req, res) => {
        console.log("THIS STUFF", req.body);
        home.create(req, res);
    });

    app.get('/notes', (req, res) => {
        home.getAll(req, res);
    });

    app.all("*", (req, res) => {
        res.sendFile(path.resolve("../../client/dist/index.html"));
    });
}
