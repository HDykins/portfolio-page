import React, { useState, useContext } from "react";
import Header from "./header.jsx";
import SideNav from "./sideNav.jsx";
import InformationDisplay from "./informationDisplay.jsx";
import Footer from "./footer.jsx";
import { Grid, Row } from "../grid"
import cx from "classnames"
import { ViewContext } from "../viewContext"

const oldPortfolio = () => {
  const { currentTheme } = useContext(ViewContext);
  console.log("IND: ", currentTheme)
  const [ currentSection, setCurrentSection ] = useState("ABOUT")
  const oldContent = cx("old-content", currentTheme)
  return (
    <div className={oldContent}>
      <Grid>
        <Header />
        <hr className="line-break" />
        <main>
          <Row>
            <SideNav setCurrentSection={setCurrentSection} />
            <InformationDisplay currentSection={currentSection} />
          </Row> 
        </main>
        <hr className="line-break" />
        <Row>
          <Footer />
        </Row> 
      </Grid>
    </div>
  )
};

export default oldPortfolio;
