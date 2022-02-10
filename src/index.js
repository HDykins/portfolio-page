import React from "react";
import ReactDOM from "react-dom";
import Application from "./components/application.jsx"

import styles from "./sass/styles.scss"

// Little bit of uglyness here solves a lot of work + ugliness later
// Import just the fontawesome svgs and watch dom for changes
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFutbol } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare, faSteamSquare } from "@fortawesome/free-brands-svg-icons";

library.add(faCheck, faLinkedin, faGithubSquare, faSteamSquare, faFutbol);
dom.watch();

const Index = () => {
  return <Application />
};

ReactDOM.render(<Index />, document.getElementById("app"));