const seedUsers = require('./user-seeds');
const seedStatus = require('./status-seeds');
const seedDepartments = require('./department-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedDepartments();
    console.log('finished seeding departments');

    await seedUsers();
    console.log('finished seeding users');

    await seedStatus();
    console.log('finished seeding status');


    process.exit(0);
};

seedAll();