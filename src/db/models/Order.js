export default function(sequelize, DataTypes) {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: 'Order'
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.OrderStatus, {
      as: 'status',
      foreignKey: 'statusId'
    });

    Order.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });

    Order.hasMany(models.OrderItem, {
      as: 'items',
      foreignKey: 'orderId'
    });
  };

  return Order;
}
