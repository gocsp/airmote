Ext.define('airmote.store.RemoteHost', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        model: 'airmote.model.RemoteHost',
        autoLoad: true,

        proxy: {
            type: 'localstorage',
            id: 'remoteHost'
        }

    }
});