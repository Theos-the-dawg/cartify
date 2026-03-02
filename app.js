const express = require('express'); // this is where we import the package for express
const app = express(); // initialize the express router 
// const router = express.Router();
const path = require('path'); // sets the file path for the files(html templates that will be rendered)


const host = '127.0.0.1'; // host often the IP address but for now localhost
const port = 3000;//port number address for specific functions 

// in express a view engine is the tool used for telling express how this page 
app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, './public/views/')); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) =>{
  res.render('index', { title: 'My Express router', message: 'Hello, World!' });
})

app.get('/home',(req,res) =>{
  res.render('index', { title: 'home', message: 'Home' });
})

app.listen(port,()=>{
    console.log(`running on http://${host}:${port}`)
});


