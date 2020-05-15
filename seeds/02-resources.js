
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {id: 1, name: "Gym", description: "Somewhere to work out"},
        {id: 2, name: "Computer", description: "Something with a nice graphics card"},
        {id: 3, name: "Chair", description: "Man has been sitting since the dawn of time"}
      ]);
    });
};
