const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Department, User, Status } = require('../models');

// render homepage if not logged in, redirect to checkin if logged in
router.get('/', (req, res) => {
    console.log("loggedin", req.session.loggedIn);
    if (req.session.loggedIn) {
        res.redirect('/checkin');
        return;
    }
    res.render('homepage', { title: 'Work Feelings Homepage' });
});

//redirect to checkin page if logged in, otherwise render login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        // res.redirect('/checkin');
        return;
    }
    res.render('login', { title: 'Work Feelings Login' });
});

module.exports = router;