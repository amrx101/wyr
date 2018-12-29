import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import LoadingBar from 'react-redux-loading'
import logo from './logo.svg';
import './App.css';
import Login from './login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  // render() {
  //   console.log("wait is ", this.props.wait)
  //   return (
  //     <div>
  //       Starter Code Check console
  //       {this.props.wait === true ? null : <Login/>}
  //     </div>
  //   );
  // }
  


  render() {
      return (
          <Router>
              <Fragment>
                  
                  {this.props.wait === true
                      ? null
                      : <div>
                          <Route path="/login" component={Login}/>
                          
                      </div>}
              </Fragment>
          </Router>
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

function mapStateToProps({users, questions}) {
  return {
    wait : isEmpty(users)
  }
}

export default connect(mapStateToProps)(App);
