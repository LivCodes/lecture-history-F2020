# Database Migrations and Seeding

## Migrations
* Migrations are special files that run queries on your DB to perform structural updates
* Version control for you Database!
* [Knex Documentation](http://knexjs.org/)

## Migration Terms
* Migration
* Up
* Down
* Migrate Latest
* Rollback
* Status

## Set Up
* `npm install knex` to install knex for your project
* `sudo npm install -g knex` to use the knex command line tool
* Otherwise, you'll have to type `node_modules/.bin/knex`
* `knex init`
    * Update your `knexfile` to the correct configurations

## Create Migration files
* `knex migrate:make <name-of-file>`
* A `migrations` folder is created for you!
* Why are migrations timestamped?
* `exports.up` and `exports.down`

## Run migration files
* `knex migrate:list` to see status of each migration
* `knex migrate:up` to run only the next migration
* `knex migrate:latest` to run all migrations
* `knex migrate:down` to undo only the last migration file
* `knex migrate:rollback` to undo the last batch of migration files

## Seeding
* Performing initial data changes to your database
* For seeding complex relational data, [read this blog](https://medium.com/@jaeger.rob/seed-knex-postgresql-database-with-json-data-3677c6e7c9bc)

## Deploying
* [How to deploy Node/Express/Postgres/Knex application](https://dev.to/sandravaphilips/how-to-deploy-to-heroku-using-postgres-2i2p)
* May have to set environment variable `PGSSLMODE` to `no-verify` in Heroku

```js
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('username');
        table.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
```

```js
exports.up = function(knex) {
    return knex.schema.createTable('pets', function (table) {
        table.increments();
        table.string('name');
        table.integer('user_id');
        table.foreign('user_id').references('users.id');
        table.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pets')
};
```

```js
exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.date('birthday');
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn('birthday')
    })
};
```

```js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'reuben', birthday: '01-10-1991', created_at: new Date(), updated_at: new Date()},
        {username: 'maya', birthday: '02-01-1991', created_at: new Date(), updated_at: new Date()}
      ]);
    })
    .then(function() {
      return knex('pets').insert([
        {name: 'Juan Pablo', user_id: 1, created_at: new Date(), updated_at: new Date()},
        {name: 'Kahlo', user_id: 2, created_at: new Date(), updated_at: new Date()}
      ]);
    })
};
```
