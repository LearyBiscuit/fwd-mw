var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

handle["/"] = requestHandlers.start;
//handle["/update"] = requestHandlers.update;
handle["/deploy"] = requestHandlers.deploy;

server.start(router.route, handle);
