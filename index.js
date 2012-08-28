var http = require('http')
  , url = require('url');

var calc = function (arithmetic) {
  var result = "NaN";
  try {
    result = eval(arithmetic.replace(/[^0-9\.\+\*\-\/\(\)]/g, ""));
   } catch (e) { }
   return result || "NaN";
};

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url,true).query.q;
  var result  = calc(q);
  console.log('Query: '+q+' - Result: '+result);
  res.end(result+'');
}).listen(3000);

console.log('Webcalc is running');
