Ext.define('airmote.controller.Main', {
    extend: 'Ext.app.Controller',

    requires: [
        'airmote.view.Main',
        'Ext.Ajax',
        'Ext.data.JsonP',
        'Ext.data.Store'
    ],

    config: {
        models: [
            'RemoteHost', 'Npx'
        ],
        stores: [
            'RemoteHost', 'Npx'
        ],
        views: [
            'Main'
        ],
        refs: {
            viewport: '#viewport',
            npxButton: 'titlebar button[name=playing]',
            SettingsView: '#airmote-settings',
            settingsButton: 'titlebar button[name=settings]',
            settingsCloseButton: 'titlebar button[name=settings-done]',
            saveButton: '#airmote-settings button[name=settings-save]',
            remoteButton: '#control-panel button'
        },
        control: {
            remoteButton: {
                tap: 'onButtonTap'
                //holdtap: 'onHoldTap'
            },
            settingsButton: {
                tap: 'onSettingsTap'
            },
            settingsCloseButton: {
                tap: 'onSettingsCloseTap'
            },
            saveButton: {
                tap: 'onSettingsSave'
            },
            npxButton: {
                tap: 'onNpxButtonTap'
            }
        },
        hostname: undefined
    },

    init: function() {
        this.callParent(arguments);
        console.log("init Controller");

        var store = Ext.getStore('RemoteHost');
        if (store.getCount() == 1) {
            this.config.hostname = store.first().get('hostname');
        }

    },

    setRemoteHost: function(newVal) {
        if (this.getRemoteHost() !== newVal) {
            this.config.hostname = newVal;
        }
    },

    getRemoteHost: function() {
        if (this.config.hostname !== undefined) {
            return this.config.hostname;
        }
        return false;
    },

    onNpxSuccess: function(response) {
        console.log("onNpxSuccess");
    },

    onNpxButtonTap: function(button, e) {
        console.log("npx tap");
        // Ext.Ajax.request({
        //     url: this.getRemoteHost() + '/npx=1',
        //     withCredentials: true,
        //     useDefaultXhrHeader: false
        // });


        if (this.getRemoteHost()) {

            var o = {}
            // var  o = {
            //     //frameId: Ext.id(),
            //     //params : params || {},
            //     request: {
            //         //callback : callback,
            //         scope : scope,
            //         arg : arg
            //     },
            //     reader: Ext.data.reader.Xml,
            //     callback : this.loadResponse,
            //     //scope: this
            // };
            //o.cb = this.loadResponse.createDelegate(this, [o], 0);
            o.frame = document.createElement('iframe');
            o.frame.id = "nowplaying-frame";
            o.frame.name = o.frameId;
            o.frame.className = 'x-hidden';
            o.frame.src = this.getRemoteHost() + '/npx=1';
            // if(Ext.isIE){
            //    document.frames[o.frameId].name = o.frameId;
            // }
            o.frame.addEventListener('load', this.loadResponse);
            document.body.appendChild(o.frame);
        }
    },

    loadResponse: function(response) {
        console.log("response");

        console.log(Ext.query('#nowplaying-frame'));
    },

    onButtonTap: function(button, e) {
        console.log(button.actionId);
        var action = button.actionId;

        if (this.getRemoteHost()) {
            Ext.data.JsonP.request({ url: this.getRemoteHost() + '/remoteAction=' + action });

        }
    },



    onSettingsTap: function(button, e) {
        console.log("settings tap");
        var form = this.getSettingsView();
        var store = Ext.getStore('RemoteHost');
        if (store.getCount() > 0) {
            var record = store.getAt(0);
            //form.setRecord(record.get('hostname'));
            form.setRecord(record);
        }

        this.getViewport().setActiveItem(1);
    },

    onSettingsCloseTap: function(button, e) {

        this.getViewport().setActiveItem(0);
    },

    onSettingsSave: function(button, e) {
        console.log("on save");

        var form = button.up('formpanel');
        var store = Ext.getStore('RemoteHost');
        var values = form.getValues();

        if (store.getCount() === 0) {
            if (values.hostname !== "") {
                store.add(values);
                store.sync();
                this.setRemoteHost(values.hostname);
            }
        } else if (store.getCount() === 1) {
            if (values.hostname !== "") {
                store.getAt(0).set('hostname', values.hostname);
                store.sync();
                this.setRemoteHost(values.hostname);
            }
        }
    }
});