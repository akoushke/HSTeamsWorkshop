const router = require('express').Router();
const messages = require('./../helpers/messages');
const people = require('./../helpers/people');
const constants = require('../constants');
const bot = require('../bot');


router.post('/', listen);


function listen(request, response) {  

  messages
  .getMessageByID(request.body.data.id)
  .then(function(res) {
    const {text, roomId, mentionedPeople} = res;

    people
    .getPersonByID(request.body.data.personId)
    .then(function(res) {
      const displayName = res.displayName;

      if(bot.isMentioned(mentionedPeople)) {
        bot.processMessage(displayName, text, roomId);
      }
      
    })
    .catch(function(error) {
      response.send(error.message)
    })

    })
    .catch(function(error) {
      response.send(error.message);
    })
  
};

module.exports = {router, listen};
