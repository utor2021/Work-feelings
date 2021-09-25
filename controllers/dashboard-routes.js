const router = require('express').Router();
// const sequelize = require('../config/connection');
const { Department, User, Status } = require('../models');

// const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
    res.render('dashboard', {title: 'Dashboard'});
    // res.render('dashboard', {loggedIn: true });
});


router.get('/myentires', (req, res) => {
    Status.findAll({
        where: {
            user_id: req.body.id
            // user_id: req.session.user_id
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
            //  res.render('view-my-entries', { status, loggedIn: true });
             res.render('view-my-entries', { status});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})


router.get('/mydepartment', (req, res) => {
    Department.findOne({
        where: {
            // name: req.session.department
            name: req.body.department
        },
        attributes: [
            'id',
            'name'
        ],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name'],
                include: [
                    {
                        model: status,
                        attributes: [
                            'id',
                            'emoji',
                            'diary',
                            'created_at',],
                        order: [['created_at', 'DESC']],
                    }
                ]
            }
        ]
    })
        .then(dbDepartmentData => {
             // serialize data before passing to template
             const department = dbDepartmentData.map(status => status.get({ plain: true }));
            //  res.render('view-my-entries', { status, loggedIn: true });
             res.render('view-my-department', { department});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})





module.exports = router;