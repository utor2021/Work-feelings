const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        email: 'a1@gmail.com',
        password: '1111',
        first_name: 'Hayley',
        last_name: 'Adams',
        department_id: '4'
    },
    {
        email: 'a2@gmail.com',
        password: '1111',
        first_name: 'Karen',
        last_name: 'Torres',
        department_id: '4'
    },
    {
        email: 'a3@gmail.com',
        password: '1111',
        first_name: 'Tia',
        last_name: 'Reese',
        department_id: '4'
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
        department_id: '4'
    },
    {
        email: 'a6@gmail.com',
        password: '1111',
        first_name: 'Thomas',
        last_name: 'Lewis',
        department_id: '4'
    },
    {
        email: 'a7@gmail.com',
        password: '1111',
        first_name: 'Joseph',
        last_name: 'Hernandez',
        department_id: '4'
    },
    {
        email: 'a8@gmail.com',
        password: '1111',
        first_name: 'John',
        last_name: 'Walters',
        department_id: '4'
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
        department_id: '4'
    },
    {
        email: 'a11@gmail.com',
        password: '1111',
        first_name: 'Lavina',
        last_name: 'Kurnett',
        department_id: '4'
    },
    {
        email: 'a12@gmail.com',
        password: '1111',
        first_name: 'Lacey',
        last_name: 'Hardy',
        department_id: '4'
    },
    {
        email: 'a13@gmail.com',
        password: '1111',
        first_name: 'Timmy',
        last_name: 'Torence',
        department_id: '4'
    },
    {
        email: 'a14@gmail.com',
        password: '1111',
        first_name: 'Alias',
        last_name: 'Vetter',
        department_id: '4'
    },
    {
        email: 'a15@gmail.com',
        password: '1111',
        first_name: 'Mariano',
        last_name: "Demps",
        department_id: '4'
    },
    {
        email: 'a16@gmail.com',
        password: '1111',
        first_name: 'Donald',
        last_name: 'McSorley',
        department_id: '4'
    },
    {
        email: 'a17@gmail.com',
        password: '1111',
        first_name: 'Brenda',
        last_name: 'Moulder',
        department_id: '4'
    },
    {
        email: 'a18@gmail.com',
        password: '1111',
        first_name: 'Kayla',
        last_name: 'Bains',
        department_id: '4'
    },
    {
        email: 'a19@gmail.com',
        password: '1111',
        first_name: 'Millie',
        last_name: 'Tallton',
        department_id: '4'
    },
    {
        email: 'a20@gmail.com',
        password: '1111',
        first_name: 'Michelle',
        last_name: 'Landwehr',
        department_id: '4'
    },
    {
        email: 'a21@gmail.com',
        password: '1111',
        first_name: 'Jeanette',
        last_name: 'Brumfield',
        department_id: '4'
    },
    {
        email: 'a22@gmail.com',
        password: '1111',
        first_name: 'Marivel',
        last_name: 'Reams',
        department_id: '4'
    },
    {
        email: 'a23@gmail.com',
        password: '1111',
        first_name: 'Brent',
        last_name: 'Raul',
        department_id: '4'
    },
    {
        email: 'a24@gmail.com',
        password: '1111',
        first_name: 'Angelo',
        last_name: 'Spear',
        department_id: '4'
    },
    {
        email: 'a25@gmail.com',
        password: '1111',
        first_name: 'Charlene',
        last_name: "Schreffler",
        department_id: '4'
    },
    {
        email: 'a26@gmail.com',
        password: '1111',
        first_name: 'Miquel',
        last_name: 'Jaques',
        department_id: '4'
    },
    {
        email: 'a27@gmail.com',
        password: '1111',
        first_name: 'Charles',
        last_name: 'Talor',
        department_id: '4'
    },
    {
        email: 'a28@gmail.com',
        password: '1111',
        first_name: 'Marcelina',
        last_name: 'Bembry',
        department_id: '4'
    },
    {
        email: 'a29@gmail.com',
        password: '1111',
        first_name: 'Alana',
        last_name: 'Wotton',
        department_id: '4'
    },
    {
        email: 'a30@gmail.com',
        password: '1111',
        first_name: 'Lane',
        last_name: 'Maez',
        department_id: '4'
    },
    {
        email: 'a31@gmail.com',
        password: '1111',
        first_name: 'Aimee',
        last_name: 'Carrillo',
        department_id: '4'
    },
    {
        email: 'a32@gmail.com',
        password: '1111',
        first_name: 'Danica',
        last_name: 'Reale',
        department_id: '4'
    },
    {
        email: 'a33@gmail.com',
        password: '1111',
        first_name: 'Matilde',
        last_name: 'Heckard',
        department_id: '4'
    },
    {
        email: 'a34@gmail.com',
        password: '1111',
        first_name: 'Nick',
        last_name: 'Toohey',
        department_id: '4'
    },
    {
        email: 'a35@gmail.com',
        password: '1111',
        first_name: 'Jean',
        last_name: "Swicegood",
        department_id: '4'
    },
    {
        email: 'a36@gmail.com',
        password: '1111',
        first_name: 'Renea',
        last_name: 'Every',
        department_id: '4'
    },
    {
        email: 'a37@gmail.com',
        password: '1111',
        first_name: 'Corinne',
        last_name: 'Augren',
        department_id: '4'
    },
    {
        email: 'a38@gmail.com',
        password: '1111',
        first_name: 'Rosealva',
        last_name: 'Hermanson',
        department_id: '4'
    },
    {
        email: 'a39@gmail.com',
        password: '1111',
        first_name: 'Elizabeth',
        last_name: 'Dubias',
        department_id: '4'
    },
    {
        email: 'a40@gmail.com',
        password: '1111',
        first_name: 'Velda',
        last_name: 'Campione',
        department_id: '4'
    },
    {
        email: 'a41@gmail.com',
        password: '1111',
        first_name: 'Mauritzio',
        last_name: 'Whitmer',
        department_id: '4'
    },
    {
        email: 'a42@gmail.com',
        password: '1111',
        first_name: 'Jaqueline',
        last_name: 'Ross',
        department_id: '4'
    },
    {
        email: 'a43@gmail.com',
        password: '1111',
        first_name: 'Cali',
        last_name: 'Widger',
        department_id: '4'
    },
    {
        email: 'a44@gmail.com',
        password: '1111',
        first_name: 'Keith',
        last_name: 'Pelligreeni',
        department_id: '4'
    },
    {
        email: 'a45@gmail.com',
        password: '1111',
        first_name: 'Lisette',
        last_name: "Heenan",
        department_id: '4'
    },
    {
        email: 'a46@gmail.com',
        password: '1111',
        first_name: 'Terese',
        last_name: 'Pieroni',
        department_id: '4'
    },
    {
        email: 'a47@gmail.com',
        password: '1111',
        first_name: 'Julene',
        last_name: 'Vermillion',
        department_id: '4'
    },
    {
        email: 'a48@gmail.com',
        password: '1111',
        first_name: 'Myrtice',
        last_name: 'Wan',
        department_id: '4'
    },
    {
        email: 'a49@gmail.com',
        password: '1111',
        first_name: 'Latoria',
        last_name: 'Cecil',
        department_id: '4'
    },
    {
        email: 'a50@gmail.com',
        password: '1111',
        first_name: 'Delmar',
        last_name: 'Bodie',
        department_id: '4'
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
