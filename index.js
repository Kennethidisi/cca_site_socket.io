const io = require('socket.io')(5000,{
    cors:{
        origin:"http://localhost:3000",
    }
});


io.on('connection', (client)=>{
    console.log('A user with id ' + client.id + " just connected" )

    client.on('chat', (data)=>{
        client.broadcast.emit('chat_message', data)
    })

})