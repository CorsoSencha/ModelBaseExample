/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Model.Application',

    name: 'Model',

    requires: [
        // This will automatically load all classes in the Model namespace
        // so that application classes do not need to require each other.
        'Model.*'
    ],

    // The name of the initial view to create.
    mainView: 'Model.view.user.UserForm'
});
