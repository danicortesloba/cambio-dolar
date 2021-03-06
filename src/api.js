const User = require("./db");
const express = require('express')
const app = express()
require('dotenv').config();

let subscribers;
let unsubscribers;

app.use((req, res, next) => {
  if(req.headers.chano){
    next();
  } else {
    res.send('No eres chano');
  }
});

app.get('/', async function (req, res) {
let findSubscribers = await User.find({subscription: true}, function (err, people) {
    if(err){
      return console.log(err);
    } else {
      subscribers = people;
    }
  });
  let findUnsubscribers = await User.find({subscription: false}, function (err, people) {
      if(err){
        return console.log(err);
      } else {
        unsubscribers = people;
      }
    });
  res.json({subscribers: subscribers, unsubscribers: unsubscribers})
})

module.exports = app;
