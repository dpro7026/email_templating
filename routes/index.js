var express = require('express');
var router = express.Router();

console.log('David\'s App Running..');

// Inlining email CSS
var inlineCss = require('inline-css');
var fs = require('fs');
var html = fs.readFileSync('./email/welcome.ejs');
var css = fs.readFileSync('./email/style.css');
var options = new Object();
options['url'] = ' ';
options['extraCss'] = css;

inlineCss(html, options)
    .then(function(html) { console.log(html); });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
