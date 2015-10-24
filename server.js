var Restify = require("restify");
var Socket = require("socket.io");

var server = Restify.createServer({name: "Fun Time Server"});
var io = Socket.listen(server.server);

server.use(Restify.fullResponse()).use(Restify.bodyParser()).use(Restify.queryParser());

server.listen(1337, function(error) {
  if(error) {
    return console.error(error);
  }

  console.log("%s listening at %s", server.name, server.url);
});

server.get(/(\/client)(\/.*)?/, Restify.serveStatic({
  directory: __dirname,
  default: "index.html"
}));

io.sockets.on('connect', function(socket) {
  console.log(socket.id);
});
