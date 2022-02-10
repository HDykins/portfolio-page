import React, { useContext } from "react";
import OldPortfolio from "./oldPortfolio"
import NewPortfolio from "./newPortfolio"
import { ViewProvider, ViewContext } from "./viewContext"
import ThemeProvider from "./themeContext"

const App = () => {
  const { currentPortfolioStyle } = useContext(ViewContext);
  console.log("HERE", currentPortfolioStyle)
  return currentPortfolioStyle==="old" ? <OldPortfolio /> : <NewPortfolio />
}

const AppWrap = () => {
  return (
    <ThemeProvider>
      <ViewProvider>
        <App />
      </ViewProvider>
    </ThemeProvider>
  );
};



export default AppWrap;
