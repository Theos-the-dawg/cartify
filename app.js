const express = require('express');
const app = express();
const path =require('path');
const host = '127.0.0.1';
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ExpressIntegration').then(()=>{app.listen(port,()=>{
  console.log(`Database connection is ready and Server is listening on port,http://${host}:${port}`);
})
})
.catch((err)=>{
  console.log ('An error occurred while connecting to the database:', err);
});


app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, './public/views/')); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) =>{
  res.render('index', { title: 'My Express App', message: 'Hello, World!' });
})
