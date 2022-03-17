const { User } = require('../models');

const userData = [
    {
        username: 'LindseyD',
        password: 'password'
    },
    {
        username: 'HeatherL',
        password: 'password'
    },
    {
        username: 'TonyL',
        password: 'password'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;