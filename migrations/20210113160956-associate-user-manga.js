'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'User_Manga',
      {
        created_at: {
          allowNull:false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull:false,
          type: Sequelize.DATE,
        },
        UserId: {
          primaryKey
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
