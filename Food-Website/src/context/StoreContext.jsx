import { createContext } from "react";

const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {};

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreContextProvider;
