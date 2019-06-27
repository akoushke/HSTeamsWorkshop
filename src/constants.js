const dotenv = require('dotenv');
const axios = require('axios');


function setupEnvironment() {
    let path = `${__dirname}/../.env`;

    if(process.env.NODE_ENV === 'development')
      path = `${__dirname}/../.env.development`;

      dotenv.config({path: path});
  }

  
setupEnvironment();

module.exports = {
    PORT : process.env.PORT,
    webexAxiosInstance : axios.create({
        baseURL: 'https://api.ciscospark.com/v1',
        timeout: 1000,
        headers: {'authorization':  process.env.BOT_TOKEN}
    }),
      jokeAxiosInstance : axios.create({
        baseURL: 'https://icanhazdadjoke.com',
        timeout: 1000,
        headers: {'Accept': 'text/plain'}
    }),
    botName: 'Dad'
};