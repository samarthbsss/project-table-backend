const express = require('express');
const mongoose = require('mongoose');
const {connection} = require('./config/db');
const cors = require('cors');

const dataRouter= require('./route/data');
const projectRouter= require('./route/project.js');

require('dotenv').config();

const port =process.env.PORT
const app =express();

app.use(express.json());
app.use(cors());

app.use('/api', dataRouter);
app.use('/api', projectRouter);

app.get('/', async(req, res)=>{
    res.send('This is the main page');
});

app.listen(port, async ()=>{
    try {
       await connection;
       console.log('Connected to server success!'); 
    } catch (error) {
        console.log(error);
    }

    console.log(`listening to server  ${port}`);
});
