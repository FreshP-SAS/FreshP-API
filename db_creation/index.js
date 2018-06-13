/*
* @Author: jay
* @Date:   2018-06-05 13:38:51
* @Last Modified by:   jay
* @Last Modified time: 2018-06-05 14:00:34
*/

const database = {
	client: 'mysql',
		connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'freshp'
	},
		pool: {
		min: 0,
		max: 1
	}
};

database.connection.password = process.argv[1];
database.connection.password = process.argv[2];

//***** All tables *****//

const users = require('./users_db');

//***** Create DB ******//

const create_db = () => {
	const db = require('knex')(database);

	return Promise.all([
			users(db)
		]).then(e => {
			process.exit(1);
		});
};

create_db().catch(err => {
	if (err.code === 'ER_ACCESS_DENIED_ERROR') {
		console.log('Bad password');
		process.exit();
	} else if (err.code === 'ER_BAD_DB_ERROR') {
		console.log('Bad db name');
		process.exit();
	} else {
		console.log(` err.code : \n ${err.code}`);
		console.error(err);
	}
});
