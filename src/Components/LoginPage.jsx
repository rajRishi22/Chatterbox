import React, { useContext } from "react";
import styles from "../CSS/LoginPage.module.css";
import UserContext from "../Context/UserContext";
import PageContext from "../Context/PageContext";

export default function Loginpage() {
    const pageContext = useContext(PageContext);
    const userContext = useContext(UserContext);

    return <div className={styles.LoginPage}>
        <div className={styles.LoginBlock}>
            <div className={styles.Heading} >
                My Chat App
            </div>

            <div className={styles.nameInput}>
                <p> Name : </p>
                <input type="text" placeholder="Username" onChange={(event) => {
                    userContext.setName(event.target.value);
                }} />
            </div>

            <div className={styles.joinBtn} >
                <button onClick={() => {
                    pageContext.setPage("ChatPage")
                }}> Join Chat </button>
            </div>

        </div>


    </div>;
}
