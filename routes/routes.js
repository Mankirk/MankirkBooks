var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mainpg', { title: 'Express' });
});

router.get('/about',function(req,res,next){
  res.render("aboutPg");
})

router.get('/popular',function(req,res,next){
  res.render("popularPg");
  
})

router.get('/randomBook',function(req,res,next){
  res.render("randomPg");
})

router.get('/allBooks', function(req,res,next){
  res.render('productspg',{title:'AllBooks'})
})
router.get('/allBooks/romance',function(req,res,next){
  res.render("romancePg");
})

router.get('/allBooks/war',function(req,res,next){
  res.render("warPg");
})

router.get('/allBooks/selfImprovement',function(req,res,next){
  res.render("improvPg");
})

router.get('/allBooks/thriller',function(req,res,next){
  res.render("thrillerPg");
})

module.exports = router;
