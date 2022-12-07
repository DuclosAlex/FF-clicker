require('dotenv').config(); 
const express = require('express');
const router = require('./app/router');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.urlencoded({extended : true}));


app.use(router); 

const port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});