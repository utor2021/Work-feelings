const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Department, User, Status } = require('../models');

// render homepage if not logged in  
router.get('/', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/dashboard');
    //     return;
    // }
    res.render('homepage', {title: 'Work Feelings Homepage'});
});

//redirect to dashboard page if logged in, otherwise render login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login', {title: 'Work Feelings Login'});
});

module.exports = router;