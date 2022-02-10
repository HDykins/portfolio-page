import React, { useContext } from 'react';
import { ViewContext } from "../viewContext"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  switchDiv: {
    "& #styleSwitch": {
      display: "none"
    },
    "&:hover #styleSwitch": {
      display: "inline-block"
    }
  }
}))

const ViewChanger = () => {
  const { switchDiv } = useStyles();
  const { setCurrentTheme, currentPortfolioStyle, setCurrentPortfolioStyle } = useContext(ViewContext);
  const alternateStyle = currentPortfolioStyle==="old" ? "new" : "old"
  return (
    <div style={{position: "absolute"}} className={switchDiv}>
      <div id="styleSwitch" style={{fontSize: "0.75rem", border: "solid 1px grey", borderRadius: "2px"}} onClick={() => setCurrentPortfolioStyle(alternateStyle)}>{`Switch to ${alternateStyle}`}</div>
      <div>Change Theme</div>
      <div>
      <div style={{height: "20px", width: "25px", backgroundColor: "white", border: "solid 1px black", margin: "4px", borderRadius: "2px", display: "inline-block"}} onClick={() => setCurrentTheme("light")}></div>
      <div style={{height: "20px", width: "25px", backgroundColor: "black", border: "solid 1px white", margin: "4px", borderRadius: "2px", display: "inline-block"}} onClick={() => setCurrentTheme("dark")}></div>
      </div>
    </div>
  );
}
export default ViewChanger