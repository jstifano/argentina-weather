'use strict';

/********************************************************
* Politicas de validacion de rutas de la api de Tiempo  *
* @author :: Javier Stifano <jstifano18@gmail.com>      *
*********************************************************/

module.exports = function(app){

  /* Declaramos por consola el resumen de la solicitud a cualquier endpoint */
  app.use('*', function(req, res, next){
      console.log('Metodo solicitado :::', req.method, '|', 'Ruta :::', req.originalUrl);
      return next();
  });

}
