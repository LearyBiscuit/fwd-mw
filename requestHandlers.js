var querystring = require("querystring");
var deploy = require("./lib/deploy.js");
  
function defaultRoute(response, postData) {
    console.log("Default handler was called.");
    response.writeHead(401, {"Content-Type": "text/html"});
    response.write('401');
    response.end();
  }

  function semaphoreCI(response, postData) {
    console.log("Request handler 'semaphoreci' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    parsedWebHook = JSON.parse(postData);
    console.log(parsedWebHook.result);
    branch = parsedWebHook.branch_name;
    application = parsedWebHook.project_name;
   if (parsedWebHook.result == 'passed') deploy.onSemaphoreCIHook(application, branch);
    response.end();
  }

  function gitHub(response, postData) {
    console.log("Request handler 'github' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    parsedWebHook = JSON.parse(postData);
    console.log(parsedWebHook.ref);
    branch = parsedWebHook.ref.replace(/^refs\/heads\//i, '');
    application = parsedWebHook.project_name;
    deploy.onGitHubPushHook(application, branch);
    response.end();
  }
  
module.exports.defaultRoute = defaultRoute;
module.exports.semaphoreci = semaphoreCI;
module.exports.github = gitHub;
