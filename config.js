'use strict';

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: '1234',
            database: 'knex_starter'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            database: '',
            user: '',
            password: ''
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};
