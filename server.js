var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000

/**
 * Establecer la politica para validar si llega la peticion HTTP
 **/
var policies = require('./api/policies/middleware');  
policies(app);

/**
 * Establecer rutas de la api
 **/
var routes = require('./api/routes/endpoints');
routes(app); 

/**
 * Establecer respuesta en caso de elemento no encontrado
 **/
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

/**
 * Levantar el servidor
 **/
app.listen(port, function(){
	console.log("API's weather online on port:", port);
});

