import React, { useEffect, useState } from "react";
import styles from "../CSS/MessageBox.module.css";

export default function MessageBox(props) {
  const [messages, setMessages] = useState([
    {
      content: "Hello",
      sender: {
        name: "Robin",
        id: "221445"
      }
    }
  ]);
  useEffect(() => {
    if (!props.socket) {
      return;
    }
    props.socket.on("global-recv-message", (message) => {
      console.log("Messsage received : ", message);
      var msg={
        content: message.message,
        sender: {
          name: message.user.name,
          id: message.user.id
        }
      }
      setMessages((prev) => {
        return [...prev, msg];
      });
    });
  }, [props.socket]);
  return (
    <div className={styles.MessageBox}>
      <div className={styles.MessageWrapper}>
        {messages.map((message) => {
          return <div className={styles.Message}> {message.content} <span className={styles.MessageSender}>{message.sender.name}</span> </div>;
        })} 
      </div>
    </div> 
  );
}
