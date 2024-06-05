const express = require('express');
const app= express();
const cors = require('cors');
const port=3001;
const host = 'localhost';
const mongoose  = require('mongoose');
const router = require('./router');


app.use(cors());
app.use(express.json());

const uri ="mongodb+srv://navindu:navindu123@user-management-system.isvzdvl.mongodb.net/?retryWrites=true&w=majority&appName=user-management-system";

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    }
    catch(error){
        console.log(error);
    }
};

connect();

const server = app.listen(port, host, ()=> {
    console.log(`Node Serve is Listening on port ${server.address().port}`);
})

app.use('/api',router);