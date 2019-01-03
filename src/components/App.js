import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import './App.css';
import Login from './login/login'
import SignUp from './signup/signup'
import AddQuestion from './question/addQues'
import ControlledTabs from './home/tabs'
import LeaderBoard from './home/leaderBoard'
import Question from './question/viewQues'
import PrivateRoute from './pri/priv'

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
                          
                          <Route path="/login" component={Login}/>
                          <Route path="/signup" component={SignUp}/>
                          <PrivateRoute exact path ="/" component={ControlledTabs}/>
                          <PrivateRoute exact path="/leaderboard" component={LeaderBoard}/>
                          <PrivateRoute exact path="/add" component={AddQuestion}/>
                          <PrivateRoute path="/questions/:id" component={Question}/>
                            
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
