
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Projects').insert([
        {id: 1, name: "Get Ripped", description: "Just get absolutely shredded", completed_status: false},
        {id: 2, name: "Learn Farsi", description: "Bilingual is cool", completed_status: false},
        {id: 3, name: "Pick up groceries", description: "No matter how many groceries you get, you have to bring them back all in one trip", completed_status: true}
      ]);
    });
};
