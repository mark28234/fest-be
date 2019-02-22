export default function(sequelize, DataTypes) {
  const CartItem = sequelize.define(
    'CartItem',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      quantity: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: '1'
      }
    },
    {
      tableName: 'CartItem'
    }
  );

  CartItem.associate = (models) => {
    CartItem.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    CartItem.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'productId'
    });
  };

  return CartItem;
}
