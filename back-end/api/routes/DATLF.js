const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /DATLF'
    });
});

router.post('/', (req, res, next) => {
    const DATLF = {
        daID: req.body.daID,
        daprice: req.body.daprice  //change itttttttttttttttt
    }
    res.status(200).json({
        message: 'Handling POST requests to /DATLF',
        createdDATLF: DATLF
    });
});

router.get('/:AreaName', (req, res, next) => {
    const id = req.params.AreaName;
    if (id == 'Greece') {
        res.status(200).json({
            message: 'You are home',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed a country'
        });
    }
});
router.patch('/:AreaName', (req, res, next) => {
    res.status(200).json({
        message: 'Updated AreaName'
    });
});
router.delete('/:AreaName', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted AreaName'
    });
});

module.exports = router;