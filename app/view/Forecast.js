Ext.define("WeatherApp-Demo.view.Forecast", {
	extend : 'Ext.List',
	requires : [
	    		'WeatherApp-Demo.store.Forecast',
	    	],
	xtype : 'forecastView',
	config : {
		store : 'Forecast',
		itemTpl : '{dayHightTemp} {nightLowTemp}',
	}
});