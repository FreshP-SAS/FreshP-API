/*
* @Author: jay
* @Date:   2018-06-05 14:16:13
* @Last Modified by:   jay
* @Last Modified time: 2018-06-08 19:47:18
*/
const express 	= require('express');
const bcrypt 	= require('bcryptjs');
const jwt 		= require('jsonwebtoken');
const private 	= require('../private/index');

let router 		= express.Router();

const { db, TABLES } = require('../models/index');

router.route('/users').get((req, res, next) => {
	console.log('OK');
	return res.send({success: true});
});

router.route('/accounts/register').post((req, res, next) => {

	console.log(req.body);

	const user = {
		email 		: req.body.email,
		password	: bcrypt.hashSync(req.body.password, 8),
		username 	: req.body.username
	};

	const createUser = db(TABLES.USERS).insert(user);

	return Promise.all([ createUser ])
		.then(r => {
			// create a token
		    var token = jwt.sign({ id: r.id }, private.secret, {
		      expiresIn: 86400 // expires in 24 hours
		    });

			res.send({ auth: true, token: token });
		}).catch(error => {
			console.log(error);
		});
});

module.exports = router;