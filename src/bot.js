var constants = require('./constants');
var messages = require('./helpers/messages');

function processMessage(displayName, textMsg, roomId) {
  const text = filterMessage(textMsg);
  const firstName = displayName.split(' ')[0];
  const lastName = displayName.split(' ')[1];

  if(userGreeted(text))
    messages.sendMessage(`Hiya ${firstName}!`, '', roomId);
  else if(userAskedForJoke(text))
      sendJoke(roomId);
  else if(userThanked(text))
      messages.sendMessage(`No Problem ${lastName}!`, '', roomId)
  else if(userAskedForHelp(text))
      messages.sendMessage(``,
                           'Listen Kiddo, tag me with the word `joke`. Also don\'t forget to thank daddy :)',
                           roomId)
}

function isMentioned(people){
  return people.includes(process.env.BOT_ID);
}

function filterMessage(text) {
  let newMessage = text.replace(`${constants.botName}`, '');
  
  return newMessage.trim();
}

function userGreeted(message) {
  let msg = message.toLowerCase();

  return msg.includes('hi') || msg.includes('hello') || msg.includes('howdy');
}

function userThanked(message) {
  let msg = message.toLowerCase();

  return msg.includes('thank');
}

function userAskedForJoke(message){
  let msg = message.toLowerCase();

  return msg.includes('joke');
}

function userAskedForHelp(message) {
  let msg = message.toLowerCase();

  return msg.includes('help');
}

function sendJoke(roomId) {
  constants
  .jokeAxiosInstance
  .get('/')
  .then(function(res) {
    messages.sendMessage(res.data, '', roomId);
  })
  .catch(function(error) {
    console.log(error)
  })
}

module.exports = {processMessage, isMentioned}

