/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
} from "react";

const contextValue = {
  token: "",
  changeToken: (data) => {},
};

const TokenContext = createContext(contextValue);

function TokenProvider({ children }) {
  const initialValue = localStorage.getItem("user") ?? "";
  const [token, setToken] = useState(initialValue);

  const changeToken = useCallback(
    (data) => {
      const newData = data ?? "";
      if (data) {
        localStorage.setItem("user", newData);
      } else {
        localStorage.removeItem("user");
      }
      setToken(newData);
    },
    [token]
  );

  const tokenContextValue = useMemo(
    () => ({
      token,
      changeToken,
    }),
    [token, changeToken]
  );

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
}

function useToken() {
  const tokenContext = useContext(TokenContext);

  if (tokenContext === undefined) {
    console.log("ERROR, useToken must be used within TokenContext");
  }

  return tokenContext;
}

export { TokenProvider, useToken };
