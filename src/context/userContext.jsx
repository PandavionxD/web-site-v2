import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialDarkToggle = document.documentElement.className.includes("dark");
  const [darkToggle, setDarkToggle] = useState(initialDarkToggle);

  useEffect(() => {
    if (darkToggle) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkToggle]);
  return (
    <UserContext.Provider value={{ setDarkToggle, darkToggle }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
