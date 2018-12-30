import React, {Component} from 'react'
import {Nav, NavItem, TabContent, TabPane} from 'reactstrap'
import {connect} from 'react-redux'
import './dashboard.css';
import LeaderBoard from '../home/leaderBoard'
import AddQuestion from '../question/addQues'
import {BrowserRouter,NavLink, Route, Link, Redirect} from 'react-router-dom';

class Dashboard extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<DashBoard />
			</BrowserRouter>
		);
	}
}

class DashBoard extends React.Component {
    render() {
        return (
            <div id="dashboard">
                <div className="menu">
                    <NavLink exact to="/">
                        DashBoard
                    </NavLink>
                    <NavLink exact to="/leaderboard" >
                        LeaderBoard
                    </NavLink>
                    <NavLink exact to="/add">
                        AddQuestion
                    </NavLink>
                </div>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/leaderboard" component={LeaderBoard}/>
                    <Route exact path="/add" component={AddQuestion}/>
                </div>
            </div>
        );
    }
}

// This is what you really care about
class Home extends React.Component {
    render() {
        return <h1>Hello there ! You're on the home page</h1>;
    }
}

// This is what you could care about
class Automation extends React.Component {
    render() {
        return <h1>This is the Automation Panel</h1>;
    }
}


function mapStateToProps({questions, authedUser, users}) {

    const notAnsweredQuestions = Object.values(questions).filter((question) =>
        !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))

    const answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    )

    return {
        notAnsweredQIds: Object.values(notAnsweredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        answeredQIds: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        user: users[authedUser],
    }
}

export default connect(mapStateToProps)(Dashboard)