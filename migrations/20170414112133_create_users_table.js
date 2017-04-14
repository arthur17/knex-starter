'use strict';

exports.up = (db, promise) => {

    return db.schema.createTable('users', function (table) {

        // id, primary key, autoincrement
        table.increments();

        // username and password
        table.string('username').unique().notNullable();
        table.string('password', 60).notNullable();

        // creation timestamp column, function now() was tested with postgres
        table.timestamp('created_at').defaultTo(db.raw('now()'));

    });

};

exports.down = (db, promise) => {
    return db.schema.dropTableIfExists('users');
};
