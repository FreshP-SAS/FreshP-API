/*
* @Author: jay
* @Date:   2018-06-05 14:34:04
* @Last Modified by:   jay
* @Last Modified time: 2018-06-05 20:56:35
*/


'use strict';

const Joi = require('joi'),
	p_empty = ['', null]

const account = Joi.object().keys({
	email: Joi.string().email().required(),
	password: Joi.string().min(8).max(26).required(),
	first_name: Joi.string().trim().allow(p_empty).required(),
	last_name: Joi.string().trim().allow(p_empty).required(),
});

module.exports.register = Joi.object().keys({
	account: account
});

module.exports.informations = Joi.object().keys({
		username: Joi.string().trim(),
		email: Joi.string().email(),
		social_share: Joi.number().integer(),
});