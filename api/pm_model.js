const db = require('../db-config')

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTasks
}

function addResource (resource) {
    return db('Resources')
        .insert(resource)
}
function getResources () {
   return db.select('*')
        .from('Resources')
}
function addProject (project) {
    return db('Projects')
        .insert(project)
}
function getProjects () {
    return db.select('*')
        .from('Projects')
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