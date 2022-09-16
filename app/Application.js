/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

const User = () => {
    var user = Ext.create('Model.model.User', {
        name:
            'Ajit Kumar',
        age:
            24,
        phone:
            '555-555-5555',
        email:
            'ajitkumar@walkingtree.in'
    });
    return user

}
const ExampleUser = () => {
    var user = User();
    user.changeName();
    Ext.Msg.alert('INFO', user.get('name'));
}

const MyForm = () => {
    var formBase = {
        scrollable: 'vertical',
        items: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    text: 'Load',
                    handler: function () {
                        form.setRecord(User())
                    }
                },
                {
                    text: 'Reset',
                    ui: 'decline',
                    handler: function () {
                        form.reset();
                    }
                },
                {
                    text: 'Save',
                    ui: 'confirm',
                    handler: function () {
                        Ext.Msg.alert("INFO", "In a real implementation, this will be saved")
                    }
                }
            ]

        },
        {
            xtype: 'fieldset',
            title: 'Personal Info',
            instructions: 'Please enter the information above',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '40%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Name',
                    useClearIcon: true,
                    autoCapitalize: false
                },
                {
                    xtype: 'numberfield',
                    name: 'age',
                    label: 'Age',
                    useClearIcon: false
                },
                {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                    placeHodler: 'gx1@secsi.io',
                    useClearIcon: true
                },
                {
                    xtype: 'checkboxfield',
                    name: 'alive',
                    label: 'Is Alive',
                    useClearIcon: true
                }
            ],

        }],
        listeners: {
            submit: function (form, result) {
                console.log('success', Ext.toArray(arguments));
            },
            exception: function (form, result) {
                console.log('failure', Ext.toArray(arguments));
            }
        }
    };
    Ext.apply(formBase, {
        autoRender: true,
        floating: true,
        modal: true,
        centered: true,
        hideOnMaskTap: false,
        height: 385,
        width: 480
        })
    var form = Ext.create('Ext.form.FormPanel', formBase);
    return form;
}




Ext.define('Model.Application', {
    extend: 'Ext.app.Application',

    name: 'Model',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    launch: function () {
        // ExampleUser()
        // Ext.Viewport.add(MyForm())

    }

});
