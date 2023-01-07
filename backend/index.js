require('dotenv').config(); 
const express = require('express');
const { personnageBaseRouter, usersRouter, monsterRouter } = require('./app/router');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({extended : true}));

const bodyParser = multer();
app.use(bodyParser.none());

app.use('/personnageBase', personnageBaseRouter); 
app.use('/users', usersRouter);
app.use('/monster', monsterRouter);

const port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});