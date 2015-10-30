var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

handle["/"] = requestHandlers.defaultRoute;
handle["/github"] = requestHandlers.github;
handle["/semaphoreci"] = requestHandlers.semaphoreci;

server.start(router.route, handle);
