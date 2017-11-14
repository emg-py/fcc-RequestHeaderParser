var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000 );

app.get('/', function(requete, reponse) {
  var resultat = {};
  resultat.ipClient = requete.headers['x-forwarded-for'].split(',')[0];
  resultat.langage = requete.headers['accept-language'];
  resultat.userAgent = requete.headers['user-agent'];
  reponse.json(resultat);
});

var server = app.listen(app.get('port'), function() {
  console.log("le serveur est à l'écoute sur le port " + app.get('port'));
});