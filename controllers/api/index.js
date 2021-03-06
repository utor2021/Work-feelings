const router = require('express').Router();

const userRoutes = require('./user-routes');
const statusRoutes = require('./status-routes');
const departmentRoutes = require('./department-routes.js');

router.use('/users', userRoutes);
router.use('/status', statusRoutes);
router.use('/departments', departmentRoutes);

module.exports = router;
