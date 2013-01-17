Ext.define('airmote.store.Npx', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.reader.Xml',
        'Ext.data.proxy.JsonP',
        'airmote.util.JsonpX'
    ],

    config: {
        model: 'airmote.model.Npx',
        autoLoad: false,

        proxy: {
            type: 'jsonp',
            url: 'http://192.168.2.106/npx=1',
            extraParams: {

            },
            reader: {
                type: 'jsonpx'
                //record: 'nowplaying',
                //rootProperty: 'nowplaying'
            }
        }
    }
});