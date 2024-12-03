import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("Username") || "");

  const login = (name) => {
    localStorage.setItem("Username", name);
    setUsername(name);
  };

  const logout = () => {
    localStorage.removeItem("Username");
    setUsername("");
  };

  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
