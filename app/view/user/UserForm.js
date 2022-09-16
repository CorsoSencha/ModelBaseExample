
Ext.define('Model.view.user.UserForm',{
    extend: 'Ext.form.FormPanel',
    title: 'User Form',
    layout: 'center',

    bodyPadding: 5,
    width: 600,
    height: 385,


    requires: [
        'Model.view.user.UserFormController',
        'Model.view.user.UserFormModel',
        'Model.store.User'
    ],
    listeners: {
        initialize: function() {
            console.log(this.store)

        }
    },

    controller: 'user-userform',
    autoRender: true,
    floating: true, 
    modal: true,
    // centered: true, 
    hideOnMaskTap: false, 
    viewModel: {
        type: 'user-userform'
    },
    defaultType: 'textfield',
    scrollable: 'vertical',
    items: [{
        xtype: 'selectfield',
        name: 'user',
        label: 'User',
        valueField: 'name',
        displayField: 'name',
        store: {
            type: 'user'
        },
    },
    {
        xtype:'button',
        text: 'Change name',
        handler: function() {
            var formpanel = this.up('formpanel');
            var store = Ext.getStore('user')
            var values = formpanel.getValues();
            var userName = values.user;
            console.log(store)
            var users  = store.getData().items
            users.forEach(function (u) {
                if (u.data.name == userName) {
                    console.log("Update " + userName)
                    u.changeName()

                }
            })
            
        }
    }
    ]

});
