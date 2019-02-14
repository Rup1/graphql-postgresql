module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
        unique: true
      },
      detail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Todos') 
  };