/*
* @Author: jay
* @Date:   2018-06-05 13:35:01
* @Last Modified by:   jay
* @Last Modified time: 2018-06-05 13:59:55
*/

//***** Create Users DB ******//

const Users = (db) => {
	return db.schema.createTableIfNotExists('users', function(t) {
		t.increments();
		t.string('email', 128).notNullable();
		t.string('password', 128).notNullable();
		t.string('username', 128).notNullable();
	    t.timestamp('creation_date').defaultTo(db.raw('CURRENT_TIMESTAMP'));
		t.timestamp('updated_at').defaultTo(db.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
		t.charset('utf8')
	});
};

module.exports = Users;
