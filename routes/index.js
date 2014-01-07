module.exports = function (app) {

  require('./auth')(app);
  require('./user')(app);

  app.get('/', function (req, res) {
    if(req.user){
      res.json(req.user);
      return;
    }

    if(req.isAuthenticated()){
      res.send('Jo, aber ohne daten');
      return;
    }

    res.send('Not Authorized. : <a href="/auth/google">Login with google</a>', 401);
  })

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
}