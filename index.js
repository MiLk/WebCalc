var http = require('http')
  , url = require('url');

var calc = function (arithmetic) {
  var result = "NaN";
  try {
    result = eval(arithmetic.replace(/[^0-9\.\%\+\*\-\/\(\)\<\>\=!]/g, ""));
   } catch (e) { }
   return result;
};

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url,true).query.q;
  var result  = calc(q);
  console.log('Query: '+q+' - Result: '+result);
  res.end('<html><head><title>WebCalc</title><head><body><p>'+result+'</p></body></head>');
}).listen(3000);

console.log('Webcalc is running');
