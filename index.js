var express = require('express');
var app = express();
var http = require('http');
//var requestHeader = require('./public/js/requestheaderparser.js').requestHeaderParser;

app.set('port', process.env.PORT || 3000 );

/*
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', function(requete, reponse) {
	reponse.render('index', {
		siteTitle: 'requestHeaderParser',
    pageTitle: 'défi fcc - requestHeaderParser',
    pageID: 'index'
	});
});
*/

app.get('/', function(requete, reponse) {
	var test = requete;
	console.log(test);
	console.log(test.headers['user-agent']);
	console.log(test.headers['accept-language']);
	console.log(test.connection.remoteAddress);
	console.log(test.headers['x-forwarded-for']);
  var resultat = test.headers['user-agent'];
  reponse.json(resultat);
});

var server = app.listen(app.get('port'), function() {
  console.log("le serveur est à l'écoute sur le port " + app.get('port'));
});

