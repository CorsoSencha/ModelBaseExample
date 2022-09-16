Ext.define('Model.store.User', {
    extend: 'Ext.data.Store',
    alias: 'store.user',
    model: 'Model.model.User',
    storeId: 'user',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/users.json',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    } 
});