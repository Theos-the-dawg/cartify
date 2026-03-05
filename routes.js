// app.js (or a separate routes file)

// Login Form route
app.get('/login', (req, res) => {
    res.render('login'); // Renders a login.ejs file in the 'views' folder
});

// Handle Login Form submission
app.post('/login', passport.authenticate('local', {
    successRedirect: '/', // Redirect to home on success
    failureRedirect: '/login', // Redirect back to login on failure
    failureFlash: true // Use express-flash to display messages (optional)
}));

// Logout route
app.get('/logout', (req, res) => {
    req.logout((err) => { // Passport adds a logout method to req
        if (err) { return next(err); }
        res.redirect('/');
    });
});

// Protected home route (example)
app.get('/', (req, res) => {
    if (req.isAuthenticated()) { // Passport adds isAuthenticated method
        res.render('home', { name: req.user.username });
    } else {
        res.redirect('/login');
    }
});