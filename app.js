const express = require('express');
const app = express();
const path =require('path');

const host = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, './public/views/')); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) =>{
  res.render('index', { title: 'My Express App', message: 'Hello, World!' });
})

app.listen(port,()=>{
    console.log(`running on ${host}:${port}`)
});