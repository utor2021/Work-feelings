const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { User, Status, Department } = require('../../models');
// const withAuth = require('../../utils/auth');

// get all departments
router.get('/', (req, res) => {
    Department.findAll({
        attributes: ['id', 'name'],
        include: {
            model: User,
            attributes: ['first_name', 'last_name']
        }
    })
        .then(dbDepartmentData => res.json(dbDepartmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Department.findOne({
        where: {
            id: req.params.id
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
            if (!dbDepartmentData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbDepartmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Department.create({
        name: req.body.name,
    })
        .then(dbDepartmentData => res.json(dbDepartmentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Department.update(
        {
            name: req.body.name,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbDepartmentData => {
            if (!dbDepartmentData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbDepartmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Department.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbDepartmentData => {
            if (!dbDepartmentData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbDepartmentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;