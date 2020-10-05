require('dotenv').config()
const express = require('express')
const app = express()
const auth = require('./routes/auth')
const report = require('./routes/report')
const port = parseInt(process.env.PORT,10) || 3000
//pug loaded by express

app.set('views','./src')
app.set('view-engine','pug')


app.use(express.static('src/'))
app.use('/',auth)
app.use('/reports',report)


app.listen(port, () => {
	console.log("listening at port: "+port);
});
