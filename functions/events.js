const events = require("../data/events.json");

exports.handler = (_, __, callback) =>
  callback(null, { statusCode: 200, body: JSON.stringify(events) });
