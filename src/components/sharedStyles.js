import paperBg from "../static/images/paper2.jpeg"

const sharedStyles = (theme) => ({
  divider: {
    height: "1rem",
    backgroundColor: "unset"
  },
  lightText: {
    color: theme.palette.secondary.main
  },
  darkText: {
    color: theme.palette.secondary.dark
  },
  lightBg: {
    background: 'rgb(175,136,78)',
    background: 'linear-gradient(0deg, rgba(175,136,78,1) 0%, rgba(219,154,109,1) 10%, rgba(215,182,133,1) 22%, rgba(209,160,64,1) 36%, rgba(150,110,53,1) 47%, rgba(189,135,59,1) 59%, rgba(209,170,115,1) 71%, rgba(227,151,71,1) 83%, rgba(214,190,131,1) 93%, rgba(195,149,116,1) 100%)'
  },
  darkBg: {
    backgroundColor: theme.palette.tertiary.dark
  },
  shadow: {
    boxShadow: '1px 1px 2px lightgrey, 1px -1px 2px lightgrey, -1px 1px 2px lightgrey'
  },
  darkPanel: {
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.primary.dark,
    boxShadow: "inset 5px 5px 2px rgb(255 255 255 / 40%), inset -5px -5px 2px rgb(0 0 0 / 40%)",
    border: "2px black solid",
    position: "relative",
    "&::before": {
      width: "6px",
      height: "6px",
      content: '""',
      border: "1px #999 solid",
      position: "absolute",
      left: "10px",
      bottom: "10px",
      borderRadius: "6px"
    },
    "&::after": {
      width: "6px",
      height: "6px",
      content: '""',
      border: "1px #999 solid",
      position: "absolute",
      right: "10px",
      bottom: "10px",
      borderRadius: "6px"
    }
  },
  papers: {
    zIndex: '5',
    border: '1px solid #ccc',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${paperBg}`,
    backgroundSize: 'cover',
    boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1), 1px 1px 3px rgba(0,0,0,0.2)',
    position: 'relative',
    padding: '2rem',
    margin: '0 1rem',
    "&::before": {
      zIndex: '-1',
      content: '',
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      webkitTransform: 'rotateZ(0.5deg)',
      oTransform: 'rotate(0.5deg)',
      transform: 'rotateZ(0.5deg)',
      border: '1px solid #ccc',
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${paperBg}`,
      backgroundSize: 'cover',
      boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1), 1px 1px 3px rgba(0,0,0,0.2)'
    },
    "&::after": {
      zIndex: '-1',
      content: '',
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      webkitTransform: 'rotateZ(-0.5deg)',
      oTransform: 'rotate(-0.5deg)',
      transform: 'rotateZ(-0.5deg)',
      border: '1px solid #ccc',
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), ${paperBg}`,
      backgroundSize: 'cover',
      boxShadow: 'inset 0 0 30px rgba(0,0,0,0.1), 1px 1px 3px rgba(0,0,0,0.2)'
    },
    '& h2': {
      fontSize: '1.8rem',
      fontWeight: 'normal',
      textAlign: 'center',
      padding: '0.2rem 0',
      margin: '0',
      borderTop: '1px solid #ddd',
      borderBottom: '2px solid #ddd'
    },
    '& p': {
      textAlign: 'left',
      margin: '1.5rem 0'
    }
  }
});

export default sharedStyles
