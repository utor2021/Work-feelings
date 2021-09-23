const { Department } = require('../models');

const departmentdata = [
    {
        name: 'Sales'
    },
    {
        name: 'Human Resource'
    },
    {
        name: 'Marketing'
    },
    {
        name: 'IT'
    },
    {
        name: 'Finance'
    },
];

const seedDepartments = () => Department.bulkCreate(departmentdata);

module.exports = seedDepartments;
