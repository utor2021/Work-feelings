const router = require('express').Router();
const sequelize = require('../config/connection');
const { Department, User, Status } = require('../models');

// const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    res.render('checkin', { title: 'Check In!', loggedIn: true });
    // res.render('dashboard', {loggedIn: true });
});

router.get('/dashboard', (req, res) => {
    Status.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'emoji',
            'diary',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name'],
                include: [
                    {
                        model: Department,
                        attributes: ['name']
                    }
                ]
            }
        ]
    })
        .then(dbStatusData => {
            // serialize data before passing to template
            const status = dbStatusData.map(status => status.get({ plain: true }));
            Status.findAll({
                where: {
                    user_id: req.session.user_id
                },
                attributes: [
                    'emoji',
                    [sequelize.fn('count', 'emoji'), 'emojiCount']
                ],
                group: ['emoji']
            })
            .then(dbEmojiData => {
                const emojiData = dbEmojiData.map(emojiCount => emojiCount.get({ plain: true }));
                console.log(emojiData);
                res.render('dashboard', { status, emojiData, title: 'Dashboard', loggedIn: true });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// router.get('/tview', (req, res) => {
//     Department.findOne({
//         where: {
//             id: req.session.department_id
//         },
//         attributes: [
//             'id',
//             'name'
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['first_name', 'last_name'],
//                 include: [
//                     {
//                         model: Status,
//                         attributes: [
//                             'id',
//                             'emoji',
//                             'diary',
//                             'created_at',],
//                         order: [['created_at', 'DESC']],
//                     }
//                 ]
//             }
//         ]
//     })
//         .then(dbDepartmentData => {
//             // serialize data before passing to template
//             const department = dbDepartmentData.map(status => status.get({ plain: true }));
//             res.render('tview', { department, title: 'View Your Team', loggedIn: true });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


router.get('/tview', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
        where: { department_id: req.session.department_id },
        include: {
            model: Status,
            attributes: [
                'id',
                'emoji',
                'diary',
                'created_at',],
            order: [['created_at', 'DESC']],
        }
    })
        .then(dbUserData => {
            // serialize data before passing to template
            const users = dbUserData.map(user => user.get({ plain: true }));
            res.render('tview', { users, title: 'View Your Team', loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;