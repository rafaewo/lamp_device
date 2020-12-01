var express = require('express');
var router = express.Router();
var model = require('./../model/status')();

/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(null, function(err, status) {
    if(err) {
      throw err
    }
    res.render('index', { title: 'Smart Lamp', status: status });
    console.log('status: ',status)
  })
})

router.post('/add', function(req, res, next) {
  var body = req.body
  body.status = false
  model.create(body, function(err, status) {
    if(err){
      throw err
    }
    console.log('request body: ', body)
    res.redirect('/')
  })
})

router.get('/turn/:id', function(req, res, next) {
  var id = req.params.id
  model.findById(id, function(err, status) {
    if(err) {
      throw err
    }
    status.status = !status.status
    status.save(function() {
      res.redirect('/')
    })
  })
})

module.exports = router;
