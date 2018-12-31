import React, {Component} from 'react'
import {connect} from 'react-redux'
import './dashboard.css';
import LeaderBoard from '../home/leaderBoard'
import AddQuestion from '../question/addQues'
import {BrowserRouter,NavLink, Route, Link, Redirect} from 'react-router-dom';

class Dashboard extends React.Component {
	render() {
        const {noUser} = this.props
        if (noUser === true){
            return <Redirect to="/"/>
        }
		return (
			<BrowserRouter>
				<DashBoard {...this.props} />
			</BrowserRouter>
		);
	}
}

class DashBoard extends React.Component {
    render() {
        console.log("DASHBOARD: ", this.props)
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

export default connect(mapStateToProps)(Dashboard)