// /api

const express = require('express')

const router = express.Router();
const Model = require('./pm_model')

router.get('/', (req, res) => {
    res.status(200).json({message: "You have reached /api"})
})

//add a resource
router.post('/resources', (req, res) => {
    Model.addResource(req.body)
        .then(resource => {
            res.status(200).json({data: resource})
        })
        .catch(err => {
            res.status(500).json({message: "error adding resources", error: err})
        })
})

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
router.post('/projects', (req, res) => {
    Model.addProject(req.body)
        .then(project => {
            res.status(200).json({data: project})
        })
        .catch(err => {
            res.status(500).json({message: "error retreiving projects", error: err})
        })
})

//retrieving a list of all projects

router.get('/projects', (req, res) => {
    Model.getProjects()
        .then(projects => {
            res.status(200).json({data: projects})
        })
        .catch(err => {
            res.status(500).json({message: "error retreiving projects", error: err})
        })
})

//add a task

//retrieve a list of all tasks


module.exports = router