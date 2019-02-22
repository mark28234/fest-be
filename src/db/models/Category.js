export default function(sequelize, DataTypes) {
  return sequelize.define(
    'Category',
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
      parent: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: '0'
      }
    },
    {
      tableName: 'Category'
    }
  );
}
