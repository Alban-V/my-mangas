const express = require('express');
const apiRouter = require('./apiRouter').router;
const app = express();
const port = 3000;

app.listen(port,() => console.log('Serveur démarré sur le port '+ port));