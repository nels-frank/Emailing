const passport = require('passport');

module.exports = app => {
app.get(
    '/auth/google', 
    passport.authenticate('google', {
      scope: ['profile', 'email']
  })
);

//app.get('/auth/google/callback', passport.authenticate('google'));

//app.get('/api/logout', (req, res) => {
  //req.logout();
  //res.send(req.user);
//});

app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/dashboard'); // Change as needed
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(err => {
      if (err) return res.status(500).send('Logout error');
      res.redirect('/');
    });
  });

app.get('/api/current_user', (req, res) => {
  res.send(req.user);
});
};