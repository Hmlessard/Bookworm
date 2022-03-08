const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class BookUser extends Model { }

BookUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        book_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'book',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book_user'
    }
);

module.exports = BookUser;