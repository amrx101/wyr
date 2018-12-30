import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import LoadingBar from 'react-redux-loading'
import logo from './logo.svg';
import './App.css';
import Login from './login'
import SignUp from './signup/signup'
import AddQuestion from './question/addQues'
import User from './user/user'
import DashBoard from './home/dashBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
      return (
          <Router>
              <Fragment>
                  
                  {this.props.wait === true
                      ? null
                      : <div>
                          <Route exact path ="/" component={DashBoard}/>
                          <Route path="/login" component={Login}/>
                          <Route path="/signup" component={SignUp}/>
                          <Route path="/add" component={AddQuestion}/>
                          <Route path="/user" component={User}/>
                          
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
