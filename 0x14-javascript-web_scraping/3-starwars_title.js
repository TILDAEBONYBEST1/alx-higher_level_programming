#!/usr/bin/node
const request = require('request');
let url = "https://swapi-api.hbtn.io/api/starships/9/" + process.argv[2];
request(url, function (error, response, body) {
  console.log(error || JSON.parse(body).title);
});
