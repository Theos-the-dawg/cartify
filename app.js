const express = require('express');
const session = require('express-session');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your-secret-key', // Change to a secure key
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'ejs');

// Routes
app.get('/login', (_req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Replace with real validation (e.g., database check)
    if (username === 'admin' && password === 'password') { // Example
        req.session.username = username;
        return res.redirect('/dashboard');
    }
    
    res.render('login', { error: 'Invalid credentials' });
});

app.get('/dashboard', (req, res) => {
    if (!req.session.username) {
        return res.redirect('/login');
    }
    res.render('dashboard', { username: req.session.username });
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(3000, () => console.log('Server running on port 3000'));