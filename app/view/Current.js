Ext.define('WeatherApp-Demo.view.Current', {
	extend : 'Ext.Container',
	xtype : 'currentView',
	requires : [
	            'Ext.Label',
            ],
	config : {
		layout : 'vbox',
			items : [ {
				xtype : 'label',
				itemId : 'lbTemperature'
			}, {
				xtype : 'label',
				itemId : 'lbRealfeel'
			} ]
	},
	initialize : function() {
		var  tStore = Ext.create('WeatherApp-Demo.store.Current');
		var lbTemperature = Ext.ComponentQuery.query('#lbTemperature')[0];
		var lbRealfeel = Ext.ComponentQuery.query('#lbRealfeel')[0];
		tStore.load({
        	callback: function(records, operation, success){
        		if (records[0]) {
        			lbTemperature.setHtml(records[0].get('temperature'));
        			lbRealfeel.setHtml(records[0].get('realfeel'));
        		}
        			
        	}
        });
		
	}
});