const constants = require('../constants');

function getMessageByID(messageId) {
  return constants.webexAxiosInstance
  .get(`/messages/${messageId}`)
  .then(function(res) {
      return res.data;
  })
  .catch(function(error) {
    console.log(error)
  })
};

function sendMessage(text, markdown, roomId) {
  return constants.webexAxiosInstance
  .post(`/messages`, {
    text: text,
    markdown: markdown,
    roomId: roomId
  })
  .then(function(res) {
    return res.data;
  })
}

module.exports = {getMessageByID, sendMessage};