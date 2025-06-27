import React, { createContext, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [User, setUser] = React.useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    if (User) {
      localStorage.setItem("user", JSON.stringify(User));
    } else {
      localStorage.removeItem("user");
    }
  }, [User]);

  const value = { User, setUser, isModalOpen, setIsModalOpen };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const UseAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("Use context within a context provider");
  }
  return context;
};

export { UseAppContext, AppContextProvider };
