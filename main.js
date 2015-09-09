var http = require('http');
var PORT = 8080;

var server = http.createServer(function(request, response) {
  console.log(request.url);

  var str = request.url;
  var strArr = str.split(/math\/(\w+)\/([0-9]+)\/([0-9]+)/g);

  console.log(strArr);
  var operator = strArr[1];
  var num1 = strArr[2];
  var num2 = strArr[3];
  var sum = 0;

  switch (operator) {
    case 'add':
      sum = +num1 + +num2;
      break;
    case 'sub':
      sum = num1 - num2;
      break;
    case 'mult':
      sum = num1 * num2;
      break;
    case 'div':
      sum = num1 / num2;
      break;
    default: console.log('You suck');
  }
  response.end('<h1>'+sum+'</h1>');
});

server.listen(PORT, function(){
  console.log('server now listening on port ' + PORT);
});
