exports.register = function(req, res) {
  message = '';
  if (req.method == 'POST') {
    var post = req.body;
    var userName = post.user_name;
    var password = post.password;
    var name = post.name;
    console.log(userName);
    console.log(password);
    var sql =
      "INSERT INTO `users`(`name`,`user_name`, `password`) VALUES ('" +
      name +
      "','" +
      userName +
      "','" +
      password +
      "')";

    db.query(sql, function(err, result) {
      message = 'Succesfully! Your account has been created.';

      sql =
        "SELECT id, name, user_name FROM `users` WHERE `user_name`='" +
        userName +
        "' and password = '" +
        password +
        "' LIMIT 1";
      db.query(sql, function(err, results) {
        if (err) console.log(err);

        console.log(results);

        if (results && results.length) {
          res.redirect('http://localhost:8091/login');
        } else {
          message = 'Enter valid data!';
          res.render('signup.ejs', { message: message });
        }
      });
    });
  } else {
    res.render('signup');
  }
};
