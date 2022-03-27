
module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('movie', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    banner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    youtube_link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_reviews: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    total_comments: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
  }, {
    tableName: 'movies',
    timestamps: false
  });
  return movie;
}