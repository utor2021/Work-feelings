const seedUsers = require('./user-seeds');
const seedStatus = require('./status-seeds');
const seedDepartments = require('./department-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    
    await seedDepartments();
    console.log('--------------');
    
    await seedUsers();
    console.log('--------------');

    await seedStatus();
    console.log('--------------');


    process.exit(0);
};

seedAll();