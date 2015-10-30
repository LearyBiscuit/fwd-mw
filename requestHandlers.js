var querystring = require("querystring");


function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    'Hi' +
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function deploy(response, postData) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  branch = querystring.parse(postData).branch;
  target = querystring.parse(postData).target;
  application = querystring.parse(postData).application;
  country = querystring.parse(postData).cc;
  
  if ((branch === undefined) || (target === undefined) || (application === undefined) || (country === undefined)) {
    response.write("Haven't got enough parameters to deploy");
  } else {
    response.write("Need to deploy " + branch + " branch of the " + application + " appication " + 
	" to the  " + country + " " + target + " server."
    );
  }
  response.end();
}

exports.start = start;
exports.deploy = deploy;