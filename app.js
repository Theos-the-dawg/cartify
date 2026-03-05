const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');  
const path =require('path');

const host = '127.0.0.1';
const port = 3000;

app.set('view engine', 'ejs'); 

app.set('views', path.join(__dirname, './public/views/')); 

app.use(express.static(path.join(__dirname, 'public')));

//Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure express-session middleware
app.use(session({
  secret: 'i_am_code_cussler',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport and use it with sessions
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res) =>{
  res.render('index', { title: 'My Express App', message: 'Hello, World!' });
})

app.listen(port,()=>{
    console.log(`running on ${host}:${port}`)
});