module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
     },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  Post.associate = (models) => {
    Post.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return Post;
}
