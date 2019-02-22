export default function(sequelize, DataTypes) {
  return sequelize.define(
    'OrderStatus',
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
      }
    },
    {
      tableName: 'OrderStatus'
    }
  );
}
