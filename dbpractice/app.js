const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongoose Connected"))
.catch(err => console.log(err));

const userRoutes = require('./routes/userRoutes');
app.use('/users',userRoutes);

app.listen(3000,() => console.log("Server is running on Port 3000"));