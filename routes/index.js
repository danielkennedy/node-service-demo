var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // FIXME: Pretty ENV rendering
  // FIXME: Box for user-provided service (Twitter feed)
  // FIXME: Box for system service (echo)
  // FIXME: Box for docker service (crud mysql???)
  res.render('index', { title: 'Services Demo', status: process.env.VCAP_SERVICES || {} });
});

module.exports = router;
