require('dotenv').config()
const express = require('express')
const app = express()
const port = parseInt(process.env.PORT,10) || 3000
const myrouter = require('./myroute')

app.use('/',myrouter)

app.listen(port, () => {
	console.log("listening at port: "+port);
});
