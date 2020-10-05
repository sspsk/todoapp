const express = require('express')
const router = express.Router();
const path = require('path');
router.get('/', (req,res) => {
	res.render('index.pug',{jsfile: 'react-report.js'})
});
module.exports = router;
