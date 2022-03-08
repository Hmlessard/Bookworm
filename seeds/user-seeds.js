const { User } = require('../models');

const userData = [
    {
        username: 'LindseyD',
        password: 'password',
        book_favs: ''
    },
    {
        username: 'HeatherL',
        password: 'password',
        book_favs: ''
    },
    {
        username: 'TonyL',
        password: 'password',
        book_favs: ''
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;