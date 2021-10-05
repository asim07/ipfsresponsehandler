var mongoose = require('mongodb').MongoClient;
require('dotenv').config();

var dbURI = process.env.MONGOKEY;
const client = mongoose.connect(dbURI).then(data => {
  console.log("connection done");
  return data.db('nft');
}).catch(err => {
  console.log("Not done");
});
module.exports.getconnection = client;