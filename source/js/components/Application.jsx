var React = require('react');
var Model = require('../Model.js');
var Header = require('./Header.jsx');
var SideNav = require('./SideNav.jsx');
var InformationDisplay = require('./InformationDisplay.jsx');

var Application = React.createClass({
  
  getInitialState: function () {
    return {
      currentView: 'SPLASH'
    };
  },

  updateState: function () {
    this.setState(
    {
      currentView: Model.getCurrentView()
    });
  },

  // componentDidMount: function () {
  //   Model.addChangeListener(this.updateState);
  // },

  // componentWillUnmount: function () {
  //   Model.removeChangeListener(this.updateState);
  // },

  render: function () {
    // if (this.state.currentView === 'SPLASH') {
      return (
      <div className="container-fluid">
        <Header />
        <hr className="line-break" />
        <div className="container">
          <div className="row">
            <SideNav />
            <InformationDisplay />
          </div>
        </div>
      </div>
      );
    // }
  }
});

module.exports = Application;
