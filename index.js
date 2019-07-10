var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

// Add the route to receive a webhook request
server.route({
    method: 'GET',
    path:'/webhook-receiver',
    handler: function (request, reply) {
        reply().code(204);
        setImmediate(processRequest);
    }
});

// Function to do busy work
function processRequest() {
    console.log('connection should have closed');
    console.log('processing start');

    for (var i = 0; i < 5000000000; i++) {}

    console.log('processing done');
}

// Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
