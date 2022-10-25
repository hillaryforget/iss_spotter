const { fetchMyIP } = require('./issPromised');

fetchMyIP()
  .then(body => console.log(body));