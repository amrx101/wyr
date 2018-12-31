import React, {Component} from 'react'
import {connect} from 'react-redux'
import './dashboard.css';
import LeaderBoard from '../home/leaderBoard'
import AddQuestion from '../question/addQues'
import Question from '../question/viewQues'
import ControlledTabs from '../home/tabs'
import {BrowserRouter,NavLink, Route, Link, Redirect} from 'react-router-dom';

class Home extends React.Component {
	render() {
        const {noUser} = this.props
        if (noUser === true){
            return <Redirect to="/login"/>
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
        console.log("DASHBOARD PROPS: ", this.props)
        return (
            
            <div id="dashboard">
                <div className="fancy"> Hi! {this.props.user.name} </div>
                <div className="menu">
                    <Link  to="/">
                        DashBoard
                    </Link>
                    <Link  to="/leaderboard" >
                        LeaderBoard
                    </Link>
                    <Link  to="/add">
                        AddQuestion
                    </Link>
                </div>
                <div className="content">
                    <Route exact path="/" render={(props) => <Display {...this.props} />}/>
                    <Route exact path="/leaderboard" component={LeaderBoard}/>
                    <Route exact path="/add" component={AddQuestion}/>
                    <Route path="/questions/:id" component={Question}/>
                </div>
            </div>
        );
    }
}

// This is what you really care about
class Display extends React.Component {
    render() {
        console.log("HOME PROPS: ", this.props)
        return <ControlledTabs {...this.props} />
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