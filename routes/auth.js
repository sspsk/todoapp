const express = require('express');
const router = express.Router();
const path = require('path')

router.route('/')
  .get((req,res)=>{
  res.render('index.pug',{jsfile: 'react-index.js'})
  })
  .post((req,res)=>{
    // authenticating user here
    res.send('auth work here')
  })

module.exports = router
