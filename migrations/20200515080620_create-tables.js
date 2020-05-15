
exports.up = function(knex) {
  return knex.schema.createTable('Projects', tbl => {
      tbl.increments('id');
      tbl.string('name',100)
        .notNullable();
      tbl.string('description',200);
      tbl.boolean('completed_status')
        .defaultTo(false)
        .notNullable();
  })
  .createTable('Resources', tbl => {
      tbl.increments('id');
      tbl.string('name', 100)
        .notNullable();
      tbl.string('description', 200);
  })
  .createTable('RequiredResources', tbl => {
      tbl.increments('id');
      tbl.foreign('project_id')
        .notNullable()
        .references('Projects.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.foreign('resource_id')
        .notNullable()
        .references('Resources.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
  .createTable('Tasks', tbl => {
      tbl.increments('id');
      tbl.foreign('project_id')
        .notNullable()
        .references('Projects.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.string('description', 200)
        .notNullable();
      tbl.string('notes', 200);
      tbl.boolean('completed_status')
        .notNullable()
        .defaultTo(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Tasks')
    .dropTableIfExists('RequiredResources')
    .dropTableIfExists('Resources')
    .dropTableIfExists('Projects')
};
