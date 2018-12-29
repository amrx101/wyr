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
    console.log(this.props)
    return (
      <div>
        Starter Code Check console
        <Login/>

      </div>
    );
  }
  
}

function mapStateToProps(users, questions) {
  var wait = false
  console.log(users)
  if ((Object.keys(users).length === 0 && users.constructor === Object) || (Object.keys(questions).length === 0 && questions.constructor === Object)){
    wait = true
  }
  return {
    wait: wait

  }
  
}

export default connect(mapStateToProps)(App);
