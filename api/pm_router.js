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
            res.status(500).json({message: "error adding your project", error: err})
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

//get a project by ID - SPRINT

router.get('/projects/:id', (req, res) => {
    const project_id = req.params.id
    //get the project
    Model.getProjectById(project_id)
        .then(project => {
            //get the tasks
            Model.getTasksByProjectId(project_id)
                .then(tasks => {
                    Model.getResourcesByProjectId(project_id)
                        .then(resources => {
                            res.status(200).json({...project[0], tasks: tasks, resources: resources})
                        })
                        .catch(err => {
                            res.status(500).json({message: "error retreiving resources", error: err})
                        })
                })
                .catch(err => {
                    res.status(500).json({message: "error retreiving tasks", error: err})
                })

            
                
        })
        .catch(err => {
            res.status(500).json({message: "error retreiving project", error: err})
        })

    
})

//add a task
router.post('/tasks', (req, res) => {
    Model.addTask(req.body)
        .then(project => {
            res.status(200).json({data: project})
        })
        .catch(err => {
            res.status(500).json({message: "error adding task", error: err})
        })
})


//retrieve a list of all tasks
router.get('/tasks', (req, res) => {
    Model.getTasks()
        .then(tasks => {
            res.status(200).json({data: tasks})
        })
        .catch(err => {
            res.status(500).json({message: "error retreiving tasks", error: err})
        })
})

module.exports = router