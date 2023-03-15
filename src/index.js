const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/Ususarios');

const app = express();
const port = process.env.PORT || 9000;


app.listen(9000, ()=> console.log('server listening on port ', port));

//middleware
app.use(express.json());
app.use('/api', userRoutes);


//conexión con mongodb  
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Conectado a Mongodb"))
.catch((error)=>console.error(error));

//routes
app.get('/', (req, res)=>{
    res.send("Welcome to my API")
})


