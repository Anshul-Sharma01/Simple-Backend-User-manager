require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoutes.js')
const connectToDb = require('./config/db.js')
const app = express();



//Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const cors = require("cors")
app.use(cors())

// init connection to db
connectToDb()


app.use('/', userRoutes);

module.exports = app;