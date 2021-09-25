const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const checkinRoutes = require('./checkin-routes.js');

router.use('/', homeRoutes);
router.use('/checkin', checkinRoutes);
router.use('/api', apiRoutes);

module.exports = router;