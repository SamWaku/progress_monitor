const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//mongodb middleware
const db = require('./config/keys').DB_CONNECTION;

//connect to mongoose database
mongoose
    .connect(db) 
    .then(() => console.log("connected to database! :)"))
    .catch(err => console.log(err));

//Use routes
app.use('/api/items', items); 

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server started on port ${port}!`));