const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');


const app = express();


// Rotas
const index = require('./routes/principal');
const agenda = require('./routes/agendaRoute');
const cliente = require('./routes/clientesRoute');


app.use(cors({origin: true}));


app.use('/', index);
app.use('/agenda', agenda);
app.use('/cliente', cliente);
// app.get('/', (req, res) => res.status(200).send('Hey there!'));

exports.app = functions.https.onRequest(app);
