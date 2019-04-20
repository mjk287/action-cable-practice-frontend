import React, { Component } from 'react';
import './App.css';
import LandingPage from './pages/landing'
import { connect } from 'react-redux'
import Routes from './pages/routes'


class App extends Component {

  render() {
    return (
      <div className="App">
        <button onClick={this.props.handleLogOut}>Log Out</button>
        { !!this.props.currentUser.username ? <Routes /> : <LandingPage /> }

      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return ({
    handleLogOut: () => {
      localStorage.removeItem("token")
      dispatch({type: "LOGOUT"})}
  })
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
