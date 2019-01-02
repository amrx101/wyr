import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import './App.css';
import Login from './login/login'
import SignUp from './signup/signup'
import AddQuestion from './question/addQues'
import Home from './home/dashBoard'
import LeaderBoard from './home/leaderBoard'
import Question from './question/viewQues'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render() {
      return (
          <Router>
              <Fragment>  
                  <LoadingBar/>
                  {this.props.wait === true
                      ? null
                      : <div>
                          <Route exact path ="/" component={Home}/>
                          <Route path="/login" component={Login}/>
                          <Route path="/signup" component={SignUp}/>
                          <Route exact path="/leaderboard" component={LeaderBoard}/>
                          <Route exact path="/add" component={AddQuestion}/>
                          <Route path="/questions/:id" component={Question}/>
                            
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
    wait : isEmpty(users) || isEmpty(questions)
  }
}

export default connect(mapStateToProps)(App);
