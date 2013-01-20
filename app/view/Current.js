Ext.define('WeatherApp-Demo.view.Current', {
	extend : 'Ext.Container',
	controller : 'WeatherApp-Demo.controller.Current',
	xtype : 'currentView',
	requires : [
	            'Ext.Label',
	            'Ext.Img'
            ],
	config : {
		layout : 'vbox',
			items : [
			{
				xtype : "label",
				itemId : 'lbCity',
				cls : 'lbCity',
			},
			{
				layout : 'hbox',
				cls : 'divBasicInfo',
				items : [
						{
							xtype : 'label',
							itemId : 'lbRealfeel',
							html : '&regRealfeel&nbsp',
							cls : 'lbRealfeel',
						},
						{
							xtype : 'label',
							itemId : 'lbRealfeelTemp',
							cls : 'lbRealfeelTemp', 
						},
						{
				        	 xtype : 'image',
				        	 itemId : 'imgWind',
				        	 src : 'resources/images/wind.png',
				        	 cls : 'imgWind',
				         },
				         {
				        	 xtype : 'label',
				        	 itemId : 'lbWind',
				        	 cls : 'lbWind', 
				         },
				         {
				        	 xtype : 'image',
				        	 itemId : 'imgHumidity',
				        	 src : 'resources/images/humidity.png',
				        	 cls : 'imgHumidity', 
				         },
				         {
				        	 xtype : 'label',
				        	 itemId : 'lbHumidity',
				        	 cls : 'lbHumidity', 
				         }
			         ]
			},
			{
				xtype : 'image',
				itemId : 'imgWeather',
				cls : 'imgWeather',
			},
			/*{
				xtype : 'label',
				itemId : 'lbWeatherTxt',
				cls : 'lbWeatherTxt',
			},*/
			{
				xtype : 'label',
				itemId : 'lbTemperature',
				cls : 'lbTemperature',
			}]
	},
	initialize : function() {
		var  tStore = Ext.create('WeatherApp-Demo.store.Current');
		var lbTemperature = Ext.ComponentQuery.query('#lbTemperature')[0];
		var lbCity = Ext.ComponentQuery.query('#lbCity')[0];
		var imgWeather = Ext.ComponentQuery.query('#imgWeather')[0];
		//var lbWeatherTxt = Ext.ComponentQuery.query('#lbWeatherTxt')[0];
		var lbRealfeelTemp = Ext.ComponentQuery.query('#lbRealfeelTemp')[0];
		var lbHumidity = Ext.ComponentQuery.query('#lbHumidity')[0];
		var lbWind = Ext.ComponentQuery.query('#lbWind')[0];
		tStore.load({
        	callback: function(records, operation, success){
        		if (records[0]) {
        			var weathericon = records[0].get('weathericon');
        			lbTemperature.setHtml(records[0].get('temperature') + '&deg F');
        			lbCity.setHtml('Ho Chi Minh');
        			imgWeather.setSrc('resources/images/icon_' + weathericon + '.png');
        			//lbWeatherTxt.setHtml(records[0].get('weathertext'));
        			lbRealfeelTemp.setHtml(records[0].get('realfeel') + '&deg F');
        			lbHumidity.setHtml(records[0].get('humidity'));
        			lbWind.setHtml(records[0].get('windspeed') + ' ' +  records[0].get('winddirection'));
        		}
        			
        	}
        });
	}
});