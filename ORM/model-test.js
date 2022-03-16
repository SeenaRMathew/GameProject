const connection = require('./demos-connection');
const {Publisher, Platform, Games } = require('./model');

// Immediately invoked function expression IIFE (iffy)
(async function () {

try {
    let platforms = await Platform.findAll();
    for (let platform of platforms)
     {
      console.log(`${platform.platformId} ${platform.platformName}`);
     }
    } catch (error) 
    {
    console.error('Something went wrong with the database:', error);
    }

  try {
    let publishers = await Publisher.findAll();
    for (let publisher of publishers) 
    {
      console.log(`${publisher.publisherId} ${publisher.publisherName}`);
    }
     } catch (error) 
     {
    console.error('Something went wrong with the database:', error);
     }
  try {
    let games = await Games.findAll({
      limit: 10,
    });
    for (let rel of games) {
      //  console.log(`${rel.publisherId} ${rel.platformId} ${rel.getPublisher()}`);
      console.log(`${rel.publisherId} ${rel.platformId}`);
    }
  } catch (error) {
    console.error('Something went wrong with the database:', error);
  }

  connection.close();
})();
