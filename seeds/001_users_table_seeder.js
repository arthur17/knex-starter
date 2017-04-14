'use strict';

const bcrypt = require('bcrypt');
const faker = require('faker');

exports.seed = (db, promise) => {

    // users to be inserted
    const users = [];

    // generate 10 random users
    for (let i = 0; i < 10; i++) {
        users.push({
            username: faker.internet.userName().toLowerCase(),
            password: bcrypt.hashSync('1234', 10)
        });
    }

    // empty table and insert generated users
    // keep in mind TRUNCATE TABLE works only with postgres
    return db
        .raw(`TRUNCATE TABLE users RESTART IDENTITY CASCADE`)
        .then(() => db('users').insert(users));

};
