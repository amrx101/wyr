import React, {Component} from 'react'
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap'
import {connect} from 'react-redux'

class Dashboard extends Component {
    state = {
        activeTab: '1'
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const {notAnsweredQIds, answeredQIds, user} = this.props
        return (
            <h3> Will do stuff here </h3>

        )
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