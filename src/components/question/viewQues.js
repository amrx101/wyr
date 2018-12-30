import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'


class QuestionView extends Component{
     render() {
        const {question} = this.props
        const {id, optionOne, optionTwo} = question
        return (
            <Link to={`/questions/${id}`}>
                <span>{optionOne.text} or {optionTwo.text}</span>
            </Link>
        )
    }
}

function mapStateToProps({questions, "vthrdm985a262al8qx3do"}){
    return {
        question: questions{"vthrdm985a262al8qx3do"}
    }

}

export default connect()(QuestionView)