import { createContext, useState } from "react";

const UserContext = createContext();

const UserState = (props) => {
  const [name , setName] = useState("") ;
  const [id , setId ] = useState("") ;
  return (
    <UserContext.Provider
      value={{ name , setName , id , setId }}
    >
      {props.children}
    </UserContext.Provider>
  );
}; 

export default UserContext;
export { UserState };
