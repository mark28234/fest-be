export default function(sequelize, DataTypes) {
  const ProductDescription = sequelize.define(
    'ProductDescription',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: 'ProductDescription'
    }
  );

  ProductDescription.associate = (models) => {
    ProductDescription.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'productId'
    });
  };

  return ProductDescription;
}
