const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /ActualTotalLoad'
    });
});

router.post('/', (req, res, next) => {
    const ActualTotalLoad = {
        name: req.body.name,
        price: req.body.price  //change itttttttttttttttt
    }
    res.status(200).json({
        message: 'Handling POST requests to /ActualTotalLoad',
        createdActualTotalLoad: ActualTotalLoad
    });
});
router.get('/:AreaName/:Timezone', (req, res, next) => {
    const id = req.params.AreaName;
    const timeid = req.params.Timezone;
        if (id == 'Greece' && timeid == 'one') {
            res.status(200).json({
                message: 'You are home',
                id:id,
                timeid: timeid
            });
        }
     else {
        res.status(200).json({
            message: 'You passed a country'
        });
    }
})


/*router.get('/:AreaName/:Timezone', (req, res, next) => {
    const id = req.params.AreaName;
    const timeid = req.params.Timezone;
    if (id == 'Greece') {
        res.status(200).json({
            message: 'You are home',
            id: id
        });
        if (timeid=='one')
        {
             res.status(200).json({
            message: 'The time is',
            timeid: timeid
        });
        }
    } else {
        res.status(200).json({
            message: 'You passed a country'
        });
    }
});*/
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