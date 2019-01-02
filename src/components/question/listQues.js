import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'


class QuestionView extends Component{
     render() {
         const {id, question} = this.props
         const {optionOne, optionTwo} = question
         return (
            <Link to={`/questions/${id}`}>
                <span>{optionOne.text} or {optionTwo.text}</span>
            </Link>
        )
    }
}

function mapStateToProps({questions}, {id}){
    return {
        question: questions[id]
    }

}

export default connect(mapStateToProps)(QuestionView)