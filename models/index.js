
const User = require('./user');
const Department = require('./department');
const Status = require('./status');


User.belongsTo(Department,{
  foreignKey: 'department_id'
});

Department.hasMany(User,{
  foreignKey: 'user_id'
}); 

User.hasMany(Status,{
  foreignKey: 'status_id'
});

Status.belongsTo(User,{
  foreignKey: 'user_id'
});


module.exports = {
  User,Department,Status
};