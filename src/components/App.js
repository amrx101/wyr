import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import logo from './logo.svg';
import './App.css';
import Login from './login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    console.log("wait is ", this.props.wait)
    return (
      <div>
        Starter Code Check console
        {this.props.wait === true ? null : <Login/>}
      </div>
    );
  }
  
}

function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function mapStateToProps(users, questions) {
  var wait = false
  console.log(users)
  
  // if ((Object.keys(users).length === 0 && users.constructor === Object)){
  //   wait = true
  // }
  return {
    wait: isEmpty(users) || isEmpty(questions)
  }
  
}

export default connect(mapStateToProps)(App);
