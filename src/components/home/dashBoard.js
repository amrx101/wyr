import React, {Component} from 'react'
import {connect} from 'react-redux'
import './dashboard.css';
import LeaderBoard from '../home/leaderBoard'
import AddQuestion from '../question/addQues'
import Question from '../question/viewQues'
import ControlledTabs from '../home/tabs'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import {signOut} from '../../actions/authedUser'

class Home extends Component {
	render() {
        const {noUser} = this.props
        if (noUser === true){
            return <Redirect to="/login"/>
        }
		return (
            <div>
                <div className="fancy"> Hi!  {this.props.user.name} Welcome to Would You Rather!</div>
                <BrowserRouter>
                    <DashBoard {...this.props} />
                </BrowserRouter>
                
            </div>
		);
	}
}

class DashBoard extends React.Component {

    state = {
        goToLogin: false
    }

    handleOnClick = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        dispatch(signOut())
        this.setState({goToLogin: true})
    }
    render() {
        if (this.state.goToLogin === true){
            return <Redirect to="/login"/>
        }
        return ( 
            <div id="dashboard" className="sss">
                
                <div className="menu">
                    <Link  to="/">DashBoard</Link>
                    <Link  to="/leaderboard" >LeaderBoard</Link>
                    <Link  to="/add">AddQuestion</Link>
                    <Link to="#" onClick={this.handleOnClick}>SignOut</Link>
                </div>
                <div className="content">
                    <Route exact path="/" render={(props) => <ControlledTabs {...this.props} />}/>
                    <Route exact path="/leaderboard" component={LeaderBoard}/>
                    <Route exact path="/add" component={AddQuestion}/>
                    <Route path="/questions/:id" component={Question}/>
                </div>
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


function mapStateToProps({questions, authedUser, users}) {

    const notAnsweredQuestions = Object.values(questions).filter((question) =>
        !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))

    const answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    )

    let user = users[authedUser]

    return {
        notAnsweredQIds: Object.values(notAnsweredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        answeredQIds: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        user: users[authedUser],
        noUser: isEmpty(user)
    }
}

export default connect(mapStateToProps)(Home)