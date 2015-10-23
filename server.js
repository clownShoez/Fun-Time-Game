var Restify = require("restify");
var server = Restify.createServer({name: "Fun Time Server"});
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
