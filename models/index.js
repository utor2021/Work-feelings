
const User = require('./User');
const Department = require('./Department');
const Status = require('./Status');


User.belongsTo(Department, {
  foreignKey: 'department_id'
});

Department.hasMany(User, {
  foreignKey: 'department_id'
});

User.hasMany(Status, {
  foreignKey: 'user_id'
});

Status.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = {
  User, Department, Status
};