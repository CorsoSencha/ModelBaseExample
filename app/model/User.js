Ext.define('Model.model.User', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'name', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'phone', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'alive', type: 'boolean', defaultValue: true}

    ],
    changeName : function() {
        var oldName = this.get('name');
        newName = oldName + ' Updated ! ';
        this.set('name', newName);
    }
});
