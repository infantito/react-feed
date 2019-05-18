module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.post, {
      foreignKey: 'userId',
      as: 'posts',
    });
  };

  return User;
}
