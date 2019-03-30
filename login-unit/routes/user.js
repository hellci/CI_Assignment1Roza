exports.login = function(req, res) {
  var message = '';
  if (req && req.query && req.query.error && req.query.error === '401') {
    message = 'Invalid Username or Password!';
    res.render('signin.ejs', { message: message });
    return;
  }

  if (req.method == 'POST') {
    var post = req.body;
    var userName = post.user_name;
    var password = post.password;

    var sql =
      "SELECT id, name, user_name FROM `users` WHERE `user_name`='" +
      userName +
      "' and password = '" +
      password +
      "'";
    db.query(sql, function(err, results) {
      if (results && results.length) {
        console.log('id: ' + results[0].id);
        console.log('Logged in successfully!');
        res.redirect('http://localhost:8093/home?id=' + results[0].id);
      } else {
        message = 'Invalid Username or Password!';
        res.render('signin.ejs', { message: message });
      }
    });
  } else {
    res.render('signin.ejs', { message: message });
  }
};
