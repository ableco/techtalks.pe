const slogans = require("../data/slogans.json");

exports.handler = (_, __, callback) =>
  callback(null, { statusCode: 200, body: JSON.stringify(slogans) });
