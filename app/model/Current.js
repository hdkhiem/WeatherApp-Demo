Ext.define('WeatherApp-Demo.model.Current',{
	extend : 'Ext.data.Model',
	
	config : {
		fields : [{name : 'observationtime'}, 'temperature', 'realfeel', 'weathertext']
	}
});