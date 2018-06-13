/*
* @Author: jay
* @Date:   2018-06-04 16:53:14
* @Last Modified by:   jay
* @Last Modified time: 2018-06-06 15:18:18
*/

'use strict';

const config = require('../private'),
  knex = require('knex')(config.database);

// if (process.env.DEBUG === true)
// knex.on('query', (query) => console.log('SQL %s', query.sql));

exports.db = knex;

exports.TABLES = {
	USERS: 'users'
};