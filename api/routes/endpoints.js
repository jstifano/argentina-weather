/******************************************
 * Rotulador de la API para los endpoints *
 ******************************************/
 
'use strict';

module.exports = function(app) {
    var api = require('../controllers/timeController');
    
    // Ruta para obtener el clima de Buenos Aires
    app.route('/get/weather').get(api.getWeather);

    // Ruta para obtener el Forecast (Min-Max Temperature)
    app.route('/get/forecast').get(api.getTemperatureLevels);
};
