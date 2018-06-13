/*
* @Author: jay
* @Date:   2018-06-04 16:42:43
* @Last Modified by:   jay
* @Last Modified time: 2018-06-13 16:02:29
*/

const express = require('express');
let router = express.Router();

router.use('/api', require('./users'));

router.get('*', (req, res) => {
	// res.sendFile(path.join(__dirname.replace('/FreshP-API', '/FreshP-Web/src'), 'index.html'));
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = router;
