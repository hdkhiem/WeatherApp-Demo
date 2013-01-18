Ext.define('WeatherApp-Demo.store.Forecast', {
	extend : 'Ext.data.Store', 
	requires : [
	    		'WeatherApp-Demo.model.Forecast',
	    		'Ext.data.reader.Xml',
	    	],
	config : {
		model : 'WeatherApp-Demo.model.Forecast',
		autoLoad : true,
		proxy : {
			type : 'ajax',
			url : 'http://dynagility.accu-weather.com/widget/dynagility/weather-data.asp?location=saigon&metric=1',
			reader: {
	            type: 'xml',
	            rootProperty : 'adc_database.forecast',
	            record: 'day'      
	        }
		},
		
	}
	
});