// /api

const express = require('express')

const router = express.Router();
const Model = require('./pm_model')

router.get('/', (req, res) => {
    res.status(200).json({message: "You have reached /api"})
})

//add a resource


//retrieve the list of resources
router.get('/resources', (req, res) => {
    Model.getResources()
        .then(resources => {
            res.status(200).json({data: resources})
        })
        .catch(err => {
            res.status(500).json({message: "error retreiving resources", error: err})
        })
})

//adding a project

//retrieving a list of all projects

//add a task

//retrieve a list of all tasks


module.exports = router