import React, { useContext, useState } from "react";
import styles from "../CSS/InputBox.module.css";
import UserContext from "../Context/UserContext";

export default function InputBox(props) {
  const [message, setMessage] = useState("");
  const userContext = useContext(UserContext);

  return <div className={styles.InputBox}>
    <div className={styles.InputMessage} >
      <input type="text" placeholder="" value={message} onChange={event => {
        setMessage(event.target.value);
      }} />
    </div>

    <div className={styles.SendBtn} >
      <button onClick={() => {
        props.socket.emit('global-send-message', {
          user: {
            name: userContext.name,
            id: userContext.id
          },
          message: message
        });
        setMessage("");
      }} > Send </button>
    </div>

  </div>;
}
