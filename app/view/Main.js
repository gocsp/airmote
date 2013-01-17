Ext.define('airmote.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.form.Panel',
        'Ext.form.FieldSet'
    ],
    config: {
        id: 'viewport',
        layout: {
            type: 'card',
            animation: 'flip',
            duration: 300,
            easing: 'ease-in-out'
        },
        items: [
            {
                title: 'Control',
                iconCls: 'home',
                id: 'airmote-view',

                styleHtmlContent: true,
                scrollable: true,
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'AirMote',
                        items: [
                            // {
                            //     xtype: 'button',
                            //     align: 'left',
                            //     text: 'now playing',
                            //     ui: 'confirm',
                            //     name: 'playing'
                            // },
                            {
                                xtype: 'button',
                                align: 'right',
                                text: 'Settings',
                                ui: 'action',
                                name: 'settings'
                            }
                        ]
                    },
                    // {
                    //     xtype: 'spacer',
                    //     flex: 1
                    // },
                    {
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            pack: 'stretch',
                            align: 'stretch',
                        },
                        flex: 6,
                        items: [
                                // {
                                //     xtype: 'spacer',
                                //     flex: 1
                                // },
                                {
                                    xtype: 'container',
                                    id: 'control-panel',
                                    defaults: {
                                        xtype: 'button',
                                        iconMask: true,
                                        flex: 1
                                        //padding: 20

                                    },
                                    layout: {
                                        type: 'fit',
                                        pack: 'stretch',
                                        align: 'stetch',
                                    },
                                    items: [
                                        {
                                            xtype: 'spacer',
                                            flex: 1,
                                        },
                                        {
                                            iconCls: 'action',
                                            ui: 'action',
                                            text: 'Menu',
                                            actionId: 1,
                                            padding: 10,
                                            margin: 5,
                                            listeners : {
                                                element : 'element',
                                                taphold : function() {
                                                    var btn = this;



                                                }
                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'center',
                                                pack: 'center',
                                            },
                                            defaults: {
                                                xtype: 'button',
                                                iconMask: true,
                                                padding: 20,
                                                margin: 5,
                                                flex: 1
                                            },
                                            items: [
                                                {
                                                    xtype: 'spacer',
                                                    flex: 1,
                                                },
                                                {
                                                    iconCls: 'arrow_up',
                                                    actionId: 3
                                                },
                                                {
                                                    xtype: 'spacer',
                                                    flex: 1,
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'stretch',
                                                align: 'stretch'
                                            },
                                            defaults: {
                                                xtype: 'button',
                                                iconMask: true,
                                                padding: 20,
                                                margin: 5,
                                                flex: 1
                                            },
                                            items: [
                                                {
                                                    iconCls: 'arrow_left',
                                                    actionId: 6
                                                },
                                                {
                                                    iconCls: 'circle3',
                                                    actionId: 5,
                                                    ui: 'confirm'
                                                },
                                                {
                                                    iconCls: 'arrow_right',
                                                    actionId: 7
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            layout: {
                                                type: 'hbox',
                                                align: 'center',
                                                pack: 'center',
                                            },
                                            defaults: {
                                                xtype: 'button',
                                                iconMask: true,
                                                padding: 20,
                                                margin: 5,
                                                flex: 1
                                            },
                                            items: [
                                                {
                                                    xtype: 'spacer',
                                                    flex: 1
                                                },
                                                {
                                                    iconCls: 'arrow_down',
                                                    actionId: 4
                                                },
                                                {
                                                    xtype: 'spacer',
                                                    flex: 1
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            defaults: {
                                                xtype: 'button',
                                                iconMask: true,
                                                padding: 20,
                                                margin: 5,
                                                flex: 1
                                            },
                                            style: 'margin-top:5%;',
                                            layout: 'hbox',
                                            items: [
                                                // {
                                                //     iconCls: 'rewind',
                                                //     actionId: 19
                                                // },
                                                {
                                                    iconCls: 'stop',
                                                    actionId: 17
                                                },
                                                {
                                                    iconCls: 'play1',
                                                    actionId: 16
                                                },
                                                {
                                                    iconCls: 'pause',
                                                    actionId: 15
                                                },
                                                // {
                                                //     iconCls: 'fforward',
                                                //     actionId: 18
                                                // }
                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            defaults: {
                                                xtype: 'button',
                                                iconMask: true,
                                                padding: 20,
                                                margin: 5,
                                                flex: 1
                                            },
                                            style: 'margin-top:5%;',
                                            layout: 'hbox',
                                            items: [
                                                // {
                                                //     iconCls: 'rewind',
                                                //     actionId: 19
                                                // },
                                                {
                                                    iconCls: 'rewind',
                                                    actionId: 19
                                                },
                                                {
                                                    xtype: 'spacer',
                                                    flex: 1
                                                },
                                                {
                                                    iconCls: 'fforward',
                                                    actionId: 18
                                                },
                                                // {
                                                //     iconCls: 'fforward',
                                                //     actionId: 18
                                                // }
                                            ]
                                        }
                                    ]
                                },
                        ]
                    },
                    // {
                    //     xtype: 'spacer',
                    //     flex: 1
                    // }
                ]

            },
            {
                title: 'Settings',
                iconCls: 'settings',
                id: 'airmote-settings',
                xtype: 'formpanel',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Settings',
                        items: {
                            xtype: 'button',
                            align: 'right',
                            text: 'Done',
                            ui: 'action',
                            name: 'settings-done'
                        }
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Apple TV IP or Hostname',
                        items: [
                            {
                                xtype: 'textfield',
                                placeHolder: 'http://your-apple-tv-ip-address',
                                name: 'hostname'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        ui: 'confirm',
                        name: 'settings-save',
                        text: 'Save'

                    }
                ]
            }
        ]
    }
});

// @include pictos-iconmask('circle3');

// @include pictos-iconmask('arrow_up');
// @include pictos-iconmask('arrow_down');
// @include pictos-iconmask('arrow_left');
// @include pictos-iconmask('arrow_right');

// @include pictos-iconmask('play1');
// @include pictos-iconmask('pause');
// @include pictos-iconmask('stop');

// @include pictos-iconmask('rewind');
// @include pictos-iconmask('fforward');
// Menu = 1
// Menu Hold = 2

// Select = 5

// Arrow Up = 3
// Arrow Down = 4
// Arrow Left = 6
// Arrow Right = 7

// Play/Pause = 10
// Pause = 15
// Play = 16
// Stop = 17

// Fast Forward = 18
// Rewind = 19

// Chapter Skip Forward = 20
// Chapter Skip Backwards = 21

// List/Select Hold = 22
