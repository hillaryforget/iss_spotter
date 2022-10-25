const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./issPromised");

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((body) => console.log(body));

