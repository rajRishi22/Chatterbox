import React, { useContext, useEffect, useState } from "react";
import styles from "../CSS/ChatPage.module.css";
import MessageBox from "./MessageBox";
import InputBox from "./InputBox";
import Users from "./Users";
import UserContext from "../Context/UserContext";
import io from "socket.io-client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PageContext from "../Context/PageContext"

export default function ChatPage() {
  const userContext = useContext(UserContext); 
  const pageContext = useContext(PageContext)
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socket = io("http://localhost:5000"); // Replace with your Socket.IO server URL
    setSocket(() => {
      return socket;
    });

    console.log(socket);
    socket.emit("uname", userContext.name);

    return () => {
      socket.disconnect(); 
    };
  }, []);

  useEffect(()=>{
     if(!socket){
          return ;
     }
     socket.on('id' , id=>{
          console.log("user id :" , id) ;
          userContext.setId(id) ;

        }) 
  } , [socket])

  return (
    <div className={styles.ChatPage}>
      <div className={styles.Header}>
        <button
          onClick={() => {
            pageContext.setPage("LoginPage");
          }}
        >
          <ArrowBackIcon />
        </button>
        <h3>Global</h3>
        <h3> {userContext.name} </h3>
      </div>

      <div className={styles.ChatContainer}>
        <MessageBox socket={socket}> </MessageBox>
        <InputBox socket={socket}> </InputBox>
        <Users socket={socket}> </Users>
      </div>
    </div>
  );
}
