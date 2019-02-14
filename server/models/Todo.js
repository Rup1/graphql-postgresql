module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
        required: true,
        unique: {
          args: true,
          msg: 'Todo with description is already registered'
        }
      },
      detail: {
        type: DataTypes.STRING,
      },
    }, {});
  
    Todo.associate = () => {
      // associations can be defined here
    };
    return Todo;
  };