import React, { useContext, useState } from 'react';
import cx from 'classnames';
import { Grid, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { ViewContext } from '../viewContext';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Panel from './Panel';
import Footer from './Footer';

import sharedStyles from '../sharedStyles';

const useStyles = makeStyles(theme => ({
  vertDivider: {
    width: '1.5rem',
    backgroundColor: 'unset'
  },
  main: {
    padding: '2rem'
  },
  anchor: {
    display: 'block',
    content: ' ',
    marginTop: '-150px',
    height: '150px',
    visibility: 'hidden',
    pointerEvents: 'none'
  },
  ...sharedStyles(theme)
}));

const newPortfolio = ({}) => {
  const { shadow, divider, vertDivider, main, anchor, darkPanel, lightBg, darkBg, papers } = useStyles();
  const view = useContext(ViewContext);
  const isDarkTheme = view.currentTheme==='dark'

  // const [hideOnScroll, setHideOnScroll] = useState(true)

  // useScrollPosition(({ prevPos, currPos }) => {
  //   const isShow = currPos.y > prevPos.y
  //   // const isInView
  //   if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  // }, [hideOnScroll])

  return (
    <Box p='1rem 2rem' className={isDarkTheme ? darkBg : lightBg} >
      <Grid container direction='column'>
        <TopNav/>
        <Divider className={divider}/>
        <Grid container xs item> 
          <SideNav />
          <Divider className={vertDivider} orientation='vertical'/>
          <Grid xs item container direction='column' className={isDarkTheme ? cx(main, darkPanel) : cx(main, shadow, papers)}>
            <Panel>
              <span id='about' className={anchor}></span>
              <h1>About me</h1>
              <p>I am a full-stack developer based in London, searching for a senior developer position.</p>
              <p>I am looking for an opportunity where I can learn from other senior devs while helping to deliver an interesting and unique product, at a company that has a great collaborative culture.</p>
              <p>An ideal position would be one that allows working remotely as default, but also allows teammates/company to meet and socialise occasionally to avoid people going stir crazy.</p>
              <p>My top priority is to find a place where I be part of a friendly and dedicated team, and an environment where I can grow my skills and fill any holes in my knowledge as a developer.</p>
              <p>I would describe myself as honest, hard-working and a great team player, and always willing to offer my opinion and help.</p>
            </Panel>
            <Panel>
              <span id='experience' className={anchor}></span>
              <h1>Experience</h1>
              <p>I am currently working as a senior developer at Adludio, an adtech company that offers a wholistic realization of an advert, from ideation, creation, management and analysis of the advertising campaign.</p>
              <p>My main role at the company is involved in building our platform to help manage these campaigns, and guide the client throughout the campaign creation process.</p>
              <p>Within our dev team, I have been acting as lead-dev for the last 4 months, and my responsibilities lie in helping to manage the team, provide support and review all code committed by devs.</p>
              <p>I have also taken the responsibility for the majority of any dev-ops tasks that crop up, or dealing with issues in our deployment pipe and/or AWS infrastructure issues.</p>
              <p>I have been working at Adludio for over 5 years, although it still retains a lot of what made me stay for this time; great team environment with a strong culture of collaboration, I believe it's time for something new for me, where I can fully progress to be a complete senior dev.</p>
              <p>Before Adludio I worked at Lyst as an Intern for 2 weeks as part of a contract, transcribing articles into HTML and working with both the editorial and engineering teams. Here I learned how a dev-team collaborates with other teams, and how code and features are deployed effectively.</p>
              <p>In 2014 I graduated to the University of Birmingham with a 2:1 in Mechanical Engineering. Luckily ~6 Years ago I decided to switch to a career in coding, and completed an intensive 12-week Javascript course at the Iron Yard coding school, which taught me the basics of web-development and launched my career.</p>
            </Panel>
            <Panel>
              <span id='stack' className={anchor}></span>
              <h1>Stack</h1>
              <p>Node</p>
              <p>React</p>
              <p>Typescript</p>
              <p>MYSQL</p>
              <p>MongoDB</p>
              <p>GraphQL</p>
              <p>Express</p>
              <p>AWS</p>
              <p>SASS/CSS</p>
            </Panel>
            <Panel>
              <span id='interests' className={anchor}></span>
              <h1>Interests</h1>
              <p>I like to unwind by playing video games, and enjoy most genres.</p>
              <p>Playing low-stakes turn-your-brain-off multiplayer games with friends has mostly replaced any competetive focussed games, though I still do dip into them from time to time.</p>
              <p>Still, it's probably my biggest passion and I do enjoying discussing them, and I most enjoy games with role playing elements where I can fully immerse myself in the world for a time.</p>
              <p>Aside from games, I enjoy going down youtube rabbit-holes for things I previously had no interest in/thought for.</p>
              <p>Recently this has been quite engineering focussed, but it could honestly be about anything; history, law, formula one, history of speedrunning are all examples I can remember from the last 3 months.</p>
              <p>I also enjoy watching sports, though watching professional competetive CSGO is usually enough to scratch that itch.</p>
            </Panel>
            <Panel>
              <span id='showoff' className={anchor}></span>
              <h1>Showoff</h1>
              <p>Here I will add things I would like to show off, whether they be work-related or random achievements of mine.</p>
            </Panel>
          </Grid>
        </Grid>
        <Divider className={divider} />
        <Footer/>
      </Grid>
    </Box>
  )
}

export default newPortfolio;
