import express from 'express';
const server = express()
const port = (process.env.PORT || 5000)
server.set('port', port)

server.use(express.static('public'));
server.listen(server.get('port'), function(){
    console.log('Server running, PORT:', server.get('port'));
});