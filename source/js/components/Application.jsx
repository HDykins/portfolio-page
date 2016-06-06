var React = require('react');
var Model = require('../Model.js');
var Header = require('./Header.jsx');
var SideNav = require('./SideNav.jsx');
var InformationDisplay = require('./InformationDisplay.jsx');
var Footer = require('./Footer.jsx');

var Application = React.createClass({
  
  getInitialState: function () {
    return {
      currentView: 'ABOUT'
    };
  },

  updateState: function (view) {
    this.setState(
    {
      currentView: view
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
            <SideNav updateState={this.updateState} />
            <InformationDisplay currentView={this.state.currentView} />
          </div> 
        </div>
        <hr className="line-break" />
        <div className="row">
          <Footer />
        </div> 
      </div>
      );
    // }
  }
});

module.exports = Application;
