const express = require('express');
const {connection} = require('./config/db');
const cors = require('cors');

const dataRouter= require('./route/data');
require('dotenv').config();


const port =process.env.PORT
const app =express();

app.use(express.json());
app.use(cors());

app.use('/api', dataRouter);

app.get('/', async(req, res)=>{
    res.send('This is the main page');
})

app.listen(port, async ()=>{
    try {
       await connection;
       console.log('Connected to server'); 
    } catch (error) {
        console.log(error);
    }

    console.log(`listening to server  ${port}`)
})