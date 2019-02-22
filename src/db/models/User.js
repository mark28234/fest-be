export default function(sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      profileImageUrl: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: 'User'
    }
  );

  return User;
}
