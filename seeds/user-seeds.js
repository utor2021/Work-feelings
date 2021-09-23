const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        email: 'a1@gmail.com',
        password: '1111',
        first_name: 'Hayley',
        last_name: 'Adams',
        department_id: '1'
    },
    {
        email: 'a2@gmail.com',
        password: '1111',
        first_name: 'Karen',
        last_name: 'Torres',
        department_id: '2'
    },
    {
        email: 'a3@gmail.com',
        password: '1111',
        first_name: 'Tia',
        last_name: 'Reese',
        department_id: '3'
    },
    {
        email: 'a4@gmail.com',
        password: '1111',
        first_name: 'Lillian',
        last_name: 'Morgan',
        department_id: '4'
    },
    {
        email: 'a5@gmail.com',
        password: '1111',
        first_name: 'Adam',
        last_name: "O'Connor",
        department_id: '5'
    },
    {
        email: 'a6@gmail.com',
        password: '1111',
        first_name: 'Thomas',
        last_name: 'Lewis',
        department_id: '1'
    },
    {
        email: 'a7@gmail.com',
        password: '1111',
        first_name: 'Joseph',
        last_name: 'Hernandez',
        department_id: '2'
    },
    {
        email: 'a8@gmail.com',
        password: '1111',
        first_name: 'John',
        last_name: 'Walters',
        department_id: '3'
    },
    {
        email: 'a9@gmail.com',
        password: '1111',
        first_name: 'Elmer',
        last_name: 'Chapman',
        department_id: '4'
    },
    {
        email: 'a10@gmail.com',
        password: '1111',
        first_name: 'Samuel',
        last_name: 'Hughes',
        department_id: '5'
    },

];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
