const { DataTypes } = require('sequelize');
const connection = require('./demos-connection');


const Platform = connection.define(
    'Platform',
    {
        platformId: {
        field: 'platform_id',
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      platformName: {
        field: 'platform_name',
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { tableName: 'platform', timestamps: false }
  );

const Publisher = connection.define(
  'Publisher',
  {
    publisherId: {
      field: 'publisher_id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    publisherName: {
      field: 'publisher_name',
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'publisher', timestamps: false }
);

const Games = connection.define(
  'Games',
  {
    publisherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Publisher,
        key: 'publisherId',
      },
    },
    platformId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Platform,
        key: 'platformId',
      },
    },
    gameName: {
        field: 'game_name',
        type: DataTypes.STRING,
        allowNull: false,
      },
  gamesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    underscored: true,
    timestamps: false,
  }
);
Games.belongsTo(Publisher,{
foreignKey :'publisherId'
});
 
Publisher.hasOne(Games);
  
//Games.hasOne(Publisher, {
  //through: { model: Games },
  //foreignKey: 'publisherId',
//});
// Platform.belongsToMany(Games, {
//   through: { model: Games },
//   foreignKey: 'platformId',
// });

module.exports = { Publisher, Platform, Games };
