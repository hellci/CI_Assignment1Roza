exports.index = function(req, res) {
  var message = '';
  if (req && req.query && req.query.error && req.query.error === '401') {
    message = 'Invalid Username or Password!';
    res.render('signin.ejs', { message: message });
    return;
  }
  res.render('signin', { message: message });
};
