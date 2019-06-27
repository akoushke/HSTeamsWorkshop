const router = require('express').Router();
const constants = require('../constants');

function getPersonByID(personId) {
  return constants.webexAxiosInstance
  .get(`/people/${personId}`)
  .then(function(res) {
      return res.data;
  })
  .catch(function(error) {
    console.log(error)
  })
};

module.exports = {router, getPersonByID};