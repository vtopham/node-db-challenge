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
function addTask () {

}
function getTasks () {

}