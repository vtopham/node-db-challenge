const db = require('../db-config')

module.exports = {
    addResource,
    getResources,
    getResourcesByProjectId,
    addProject,
    getProjects,
    getProjectById,
    addTask,
    getTasks,
    getTasksByProjectId
}

function addResource (resource) {
    return db('Resources')
        .insert(resource)
}
function getResources () {
   return db.select('*')
        .from('Resources')
}

function getResourcesByProjectId(project_id) {
    return db.select('Resources.id', 'Resources.name', 'Resources.description') 
        .from('RequiredResources')
        .where({project_id})
        .join('Resources', 'Resources.id', '=', 'RequiredResources.resource_id')
}
function addProject (project) {
    return db('Projects')
        .insert(project)
}
function getProjects () {
    return db.select('*')
        .from('Projects')
}

function getProjectById(id) {
    return db.select('*')
        .from('Projects')
        .where({id})
        
}
function addTask (task) {
    return db('Tasks')
        .insert(task)
}
function getTasks () {
    return db.select(db.ref('Projects.name').as('Project Name'), 
    db.ref('Projects.description').as('Project Description'), 
    db.ref('Tasks.id').as("Task Id"), 
    db.ref('Tasks.description').as("Task Description"), 
    db.ref('Tasks.notes').as("Task Notes"), 'Tasks.completed_status')
        .from('Tasks')
        .join('Projects', 'Projects.id', '=', 'Tasks.project_id')

}

function getTasksByProjectId(project_id) {
    return db.select('Tasks.id', 'Tasks.description', 'Tasks.notes', 'Tasks.completed_status')
        .from('Tasks')
        .where({project_id})
        
}