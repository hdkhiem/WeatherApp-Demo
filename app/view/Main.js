Ext.define('WeatherApp-Demo.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Label',
        'WeatherApp-Demo.view.Forecast',
        'WeatherApp-Demo.view.Current',
        'WeatherApp-Demo.store.Current'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	 title: 'Current',
                 iconCls: 'home',
                 items: [
                     {
                         //itemTpl: Ext.create('WeatherApp-Demo.view.Current').element.dom.innerHTML,
                         xtype : 'currentView'
                         /*store : 'Current',
                         xtype: 'list',*/
                         
                     }
                 ]
                
            },
            {
                title: 'Forecast',
                iconCls: 'maps',
                items: [
                    {
                        //xtype: 'forecastView'
                    }
                ]
            }
        ]
    }
});
