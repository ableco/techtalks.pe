const organizers = require("../data/organizers.json");

exports.handler = (_, __, callback) =>
  callback(null, { statusCode: 200, body: JSON.stringify(organizers) });
