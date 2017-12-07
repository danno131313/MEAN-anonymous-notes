const express = require('express');
const app     = express();
const bp      = require('body-parser');
const path    = require('path');
const session = require('express-session');

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bp.json());
app.use(session({secret: "robert sux"}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
