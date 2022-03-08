const { User } = require('../models');

const userData = [
    {
        username: 'LindseyD',
        password: 'password',
        book_favs: null
    },
    {
        username: 'HeatherL',
        password: 'password',
        book_favs: null
    },
    {
        username: 'TonyL',
        password: 'password',
        book_favs: null
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;