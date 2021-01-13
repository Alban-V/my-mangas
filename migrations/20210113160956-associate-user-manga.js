'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'User_Manga',
      {
        id: {
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER
        },
        created_at: {
          allowNull:false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull:false,
          type: Sequelize.DATE,
        },
        UserId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          }
        },
        MangaId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Mangas',
            key: 'id',
          }
        },
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_Manga');
  },
};
