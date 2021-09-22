const router = require('express').Router();
// const sequelize = require('../../config/connection');
const { User, Status, Department } = require('../../models');
// const withAuth = require('../../utils/auth');

// get all status
router.get('/', (req, res) => {
    console.log('======================');
    Status.findAll({
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
        .then(dbStatusData => res.json(dbStatusData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Status.findOne({
        where: {
            id: req.params.id
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
            if (!dbStatusData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbStatusData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Status.create({
        emoji: req.body.emoji,
        diary: req.body.diary,
        user_id: req.body.user_id
    })
        .then(dbStatusData => res.json(dbStatusData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Status.update(
        {
            emoji: req.body.emoji,
            diary:req.body.diary
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbStatusData => {
            if (!dbStatusData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbStatusData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Status.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbStatusData => {
            if (!dbStatusData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbStatusData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;