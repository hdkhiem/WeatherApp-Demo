Ext.define('WeatherApp-Demo.model.Current',{
	extend : 'Ext.data.Model',
	
	config : {
		fields : ['observationtime', 'temperature', 'realfeel', 'weathertext', 'humidity', 'windspeed', 'winddirection', 'weathericon']
	}
});