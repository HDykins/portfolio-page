import React, { Fragment, useContext } from "react"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { ViewContext } from "../viewContext"
import cx from "classnames"
import myface from "../../static/images/myface.jpg"

const InformationDisplay = ({ currentSection }) => {
  const { currentView } = useContext(ViewContext);
  const informationDisplayClass = cx("information-display", currentSection)
  return (
    <div className="col-xs-8 right-section">
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <div className={informationDisplayClass} key={currentSection}>
          {(currentSection==="ABOUT") && <About currentSection={currentSection} />}
          {(currentSection==="PROJECTS") && <Projects currentSection={currentSection} />}
          {(currentSection==="INTERESTS") && <Interests currentSection={currentSection} />}
          {(currentSection==="BONUS") && <Bonus currentSection={currentSection} />}
        </div>
      </ReactCSSTransitionGroup>
    </div>
  )
};

export default InformationDisplay;


const About = ({ currentSection }) => 
  <Fragment>
    <p>Hi, my name is Harry Dykins and i'm a junior front-end developer looking for work in London</p>
    <hr />
    <p>I recently graduated from a 12-week intensive front-end coding course at <a href="https://www.theironyard.com/" target="_blank" className="links">The Iron Yard</a> and have since had the experience of working on a contract as an intern at <a href="https://www.lyst.co.uk" target="_blank" className="links">Lyst</a></p>
    <hr />
    <p>I graduated from the University of Birmingham with a Mechanical Engineering degree (2:1), and am pursuing a career in front-end development</p>
    <hr />
    <p>I am currently working to expand my portfolio and gain understanding of further development skills</p>
  </Fragment>


const Projects = ({ currentSection }) =>
  <Fragment>
    <h1>A christmas tree ordering website <a href="http://hdykins.github.io/final-project/" target="_blank"><i className="fab fa-github-square"></i></a></h1>
    <p>A wesbite that allows users to order a christmas tree, its decorations and extra services. The user can also preview decorations, choose delivery method and date, and review their order</p>
    <p>Tech: React.js, Flux, jQuery, Node.js, MongoDB, Bootstrap, Browserify, Gulp, Sass, moment.js, Google Maps and more APIs</p>
    <hr />
    <h1>A calendar/event planner <a href="http://hdykins.github.io/Calendar-jQuery-MVC/" target="_blank"><i className="fab fa-github-square"></i></a></h1>
    <p>A calendar that allows the user to plan for events and add location, and review events for that month. The user can add text mark the location of that event on a map by entering a postcode, and then filter events based on a date range</p>
    <p>Tech: jQuery, MVC, Bootstrap, Sass, moment.js, Google Maps and more APIs</p>
    <hr />
    <h1>Adidas landing page <a href="http://hdykins.github.io/adidas-landing-page/" target="_blank"><i className="fab fa-github-square"></i></a></h1>
    <h1>Adidas wanderlust form <a href="http://hdykins.github.io/adidas-wanderlust-form/" target="_blank"><i className="fab fa-github-square"></i></a></h1>
    <p>A simple landing page I created in a short period of time for the application for a job at a company that wanted to test my design skills. The page attempts to imitate the adidas brand and comes with a sister wanderlust competition form</p>
    <p>Tech: HTML, Bootstrap and CSS</p>
    <hr />
    <h1>My old profile page <a href="http://hdykins.github.io/Profile-page/" target="_blank"><i className="fab fa-github-square"></i></a></h1>
    <p>A profile page I created in the early weeks of my course. In making this I learned a lot about styling and media queries</p>
    <p>Tech: HTML, Javascript, Bootstrap and CSS</p>
    <hr />
    <h1>A photo viewer <a href="http://hdykins.github.io/Misc-code/" target="_blank"><i className="fab fa-github-square"></i></a></h1>
    <p>A simple photo viewer I created in the early weeks of my course. My first application created using Javascript.</p>
    <p>Tech: HTML, Javascript and CSS</p>
    <hr />
    <h1>A metro newspaper page <a href="http://hdykins.github.io/Bootstrap-Metro-page/" target="_blank"><i className="fab fa-github-square"></i></a></h1>
    <p>A static newspaper page recreated using HTML, CSS and Bootstrap. Collaborated with another student to share the workload, first introduction to HTML, CSS, Bootstrap and Git and creating a responsive page</p>
    <p>Tech: HTML, Bootstrap and CSS</p>
    <hr />
    <h1>Currently working on - MapBox drone tracking visual representation</h1>
    <p>A An application that show the path of a series of drones based on their co-ordinates and timestamp. More to come.</p>
    <p>Tech: Mapbox, jQuery, more TBD</p>
    <hr />
  </Fragment>


const Interests = ({ currentSection }) => 
  <Fragment>
    <i className="fab interests-icon fa-steam-square"></i>
    <h1>Gaming</h1>
    <p>I enjoy playing games in my free time, mostly PC but also console games. I enjoy pretty much all types, but especially FPS and RPG games and play CS:GO fairly regularly and dedicatedly. At the moment i'm currently sinking hours into Fallout 4 and HL2 mod called Synergy (pretty much HL2 story co-op)</p>
    <p>SteamID: jedikins PS Tag: Goose-god</p>  
    <hr />
    <i className="far interests-icon fa-futbol"></i>
    <h1>Sport</h1>
    <p>As with games, I like watching almost all sports, particularly football, rugby and formula 1. I also play tennis in my spare time casually, and enjoy watching eSports. I appreciate the competetive nature and skill involved in sport which I think is mirrored in professional gaming teams</p>
    <p>Fav teams: Spurs, Virtus.pro</p> 
    <hr />
  </Fragment>


const Bonus = ({ currentSection }) => 
  <Fragment>
    <h1>This is my face</h1>
    <img style={{width: "50%"}} src={myface} />
    <hr />
    <h1>This shows my determination, tenacity and the ability to go the distance...</h1>
    <iframe style={{width: "100%", height: "400px"}} src="https://www.youtube.com/embed/2GtwpEYkDQg" frameborder="0" allowfullscreen></iframe>
    <hr />
  </Fragment>
