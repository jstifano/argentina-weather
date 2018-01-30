/**********************************************************
* Controller  :: timeController.js                        *
* Description :: Métodos para el consumo de los servicios *
*                                                         *
* @author     :: Javier Stifano <jstifano18@gmail.com>    *
***********************************************************/
'use strict';

const request = require('request');
const API_KEY = '409167ff741942d9a59201326170304'

/**
 * Obtener el clima actual de la ciudad de Buenos Aires
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getWeather = function(req, res) {
    if ( req.method == 'GET'){
        // Consulto la información del clima actual de Argentina (Buenos Aires)
    	request('http://api.apixu.com/v1/current.json?key='+API_KEY+'&q=Argentina&lang=es', 
    		function(error,response){
    			var jsonParsed = JSON.parse(response.body); // Transformo el string a JSON
    			
    			var response = {
    				temp_celsius: jsonParsed.current.temp_c, // Temperatura en º celsius
    				humedad: jsonParsed.current.humidity, // Humedad
    				condicion_del_dia: jsonParsed.current.condition.text // Condicion del día 
    			};

	    		return res.status(200).send({'respuesta': response});
    		})
    }
    else {
        return res.status(405).send({'error': 'Método inválido'})
    }
}

/**
 * Obtener la temperatura máxima y minima en las ultimas 24 horas
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.getTemperatureLevels = function(req, res){
	if ( req.method == 'GET'){
        // Consulto la información del forecast 
    	request(' http://api.apixu.com/v1/forecast.json?key='+API_KEY+'&q=Argentina&lang=es', 
    		function(error,response){
    			var jsonParsed = JSON.parse(response.body);

    			var response = {
    				temp_maxima: jsonParsed.forecast.forecastday[0].day.maxtemp_c, // Temperatura máxima
    				temp_minima: jsonParsed.forecast.forecastday[0].day.mintemp_c // Temperatura mínima
    			}
	    		return res.status(200).send({'respuesta': response});
    		})
    }
    else {
        return res.status(405).send({'error': 'Método inválido'})
    }
}