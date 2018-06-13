/**
 * Created by JayHo on 04/06/18.
 */

'use strict';

/**
 * Contains all token api and sensitive info
 */

const constants = require('constants'),
		fs = require('fs');

module.exports = {
		database: {
		client: 'mysql',
				connection: process.env.DATABASE_URL || {
						host: '127.0.0.1',
						user: 'root',
						password: 'hello',
						database: 'freshp'
				},
				pool: {
						min: 0,
						max: 10
				}
		},

		// for token
		secret: "supersecret"

};
