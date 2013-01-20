Ext.define('WeatherApp-Demo.store.Current', {
	extend : 'Ext.data.Store',
	requires : [
	            'WeatherApp-Demo.model.Current',
	            'Ext.data.reader.Xml'
           ],
	config : {
		model : 'WeatherApp-Demo.model.Current',
		proxy : {
			type : 'ajax',
			url : 'http://dynagility.accu-weather.com/widget/dynagility/weather-data.asp?location=saigon&metric=0',
			reader: {
				type: 'xml', 
				rootProperty : 'adc_database',
				record : 'currentconditions '
			}
		},
	} 
});