import { createContext, useState } from "react";

const PageContext = createContext();

const PageState = (props) => {
  const [page, setPage] = useState("LoginPage");

  return (
    <PageContext.Provider
      value={{ page , setPage }}
    >
      {props.children}
    </PageContext.Provider>
  ); 
};

export default PageContext;
export { PageState };
