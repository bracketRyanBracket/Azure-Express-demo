
/*
 * GET home page.  Made hello word!
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello World!' });
};