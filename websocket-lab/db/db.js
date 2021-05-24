const employees = new Map();

employees
.set('1234567890', {
    name: 'Rowan Weber',
    saldo: 900
})
.set('0987654321', {
    name: 'Arnold Hammond',
    saldo: 800
})
.set('1231111111', {
    name: 'Maxwell Larson',
    saldo: 1000
})
.set('3212222222', {
    name: 'Adrian Blake',
    saldo: 432
})
.set('3453333333', {
    name: 'Edie Wheeler',
    saldo: 678
})
.set('4545664444', {
    name: 'Tony Colon',
    saldo: 1000
});

module.exports = {
    
    getEmployeeById: id => employees.get(id)

}