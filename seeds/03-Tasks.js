
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {id: 1, project_id: 1, description: "Do a handstand", notes: "I promise this is relevant", completed_status: true},
        {id: 2, project_id: 2, description: "Do complex mathematical equations", notes: "Get smart!", completed_status: true},
        {id: 3, project_id: 3, description: "Hang out", notes: "Just like, chill, man", completed_status: false},
      ]);
    });
};
