module.exports = function(app){
  app.get('/user', function(req, res){
    if(!req.isAuthenticated()){
      res.send('Not Authenticated.', 401);
      return;
    }

    res.json(req.user);
  });

}
