var Travis = require('travis-ci');

var travis = new Travis({
  version: '2.0.0'
});

travis.authenticate(
  {
    // available through Travis CI Account - settings
    access_token: 'Dukl6RIkyDQUMxG-nxSASg'
  },
  function(err, res) {
    if (err) {
      return console.error(err);
    }
    console.log('auth res:' + JSON.stringify(res));
    var request = require('request');
    request.post(
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Travis-API-Version': '3',
          Authorization: 'token Dukl6RIkyDQUMxG-nxSASg'
        },
        url: 'https://api.travis-ci.org/repo/MRozza%2Fhome-unit/requests',
        body: '{"request": {"branch":"master"}}'
      },
      function(error, response, body) {
        if (error) console.error(error);
        console.log('body: ' + body);
        console.log('response: ' + JSON.stringify(response));
      }
    );
  }
);
