import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("roles"))) {
    return await knex.schema.createTable("roles", function (table) {
      table.increments();
      table.string("name");
      table.string("description");
      table.integer("created_by");
      table.boolean('status').defaultTo(false);
      table.boolean('isCreated').defaultTo(false);
      table.boolean('isModified').defaultTo(false);
      table.boolean('isList').defaultTo(false);
      table.boolean('isDetail').defaultTo(false);
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {}

