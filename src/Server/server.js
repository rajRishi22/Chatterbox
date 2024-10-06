import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

var activeUser = 0 ;

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

// something.on means it is listening to that event 
io.on('connection' , socket => {
  activeUser++ ;
  io.emit('newUser' , {activeUser : activeUser}) 
   //console.log(socket.id) ;
   console.log("new user connected") ;  
   console.log(activeUser) ;
   

   socket.emit('connection' , {id : socket.id })
   socket.on('msg' , msg=> {
        console.log(msg) ;
        io.emit('msg' , {message : msg.message})
   }) ;

  socket.on('disconnect' , ()=> {
    activeUser-- ;
    console.log("user disconnected!") ;
    io.emit('newUser' , {activeUser : activeUser}) 
  })
})

server.listen(5000 , ()=> {
  console.log("server started") ;
}

 )