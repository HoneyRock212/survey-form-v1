const Mysql         = require('mysql2/promise');
const Constants     = require("./constants");

var connection      = Mysql.createPool(Constants.DATABASE);

module.exports = connection;
