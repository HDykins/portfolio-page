import React, { useState } from "react"

const initialContext = {
  currentTheme: "",
  currentPortfolioStyle: ""
};

export const ViewContext = React.createContext(initialContext);

export const ViewProvider = ({ children }) => {
  const [ currentTheme, setCurrentTheme ] = useState("light");
  const [ currentPortfolioStyle, setCurrentPortfolioStyle ] = useState("new");

  return (
    <ViewContext.Provider value={{ currentTheme, setCurrentTheme, currentPortfolioStyle, setCurrentPortfolioStyle }}>
      {children}
    </ViewContext.Provider>
  );
}
