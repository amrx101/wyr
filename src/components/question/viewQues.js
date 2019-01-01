import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import User from '../user/user'


class Question extends Component{
    render(){
        const {question, authedUser} = this.props
        let option1 = question.optionOne.text
        let option2 = question.optionTwo.text
        let votes1 = question.optionOne.votes
        let votes2 = question.optionTwo.votes
        let author = question.author
        let voted = votes1.includes(authedUser) || votes2.includes(authedUser)
        console.log("VOTED IS: ", voted)
        return(
            <div>
                <User id={question.author} className="UserInfo"/>
                <div className="option1">{option1}</div>
                <div className="option2">{option2}</div>
            </div>
            
        )
    }
}

class AnsweredQuestion extends Component{
    render(){
        const {question} = this.props
        return (
            <div>Happy</div>
        )
    }

}



function mapStateToProps({questions, user, authedUser}, props){
    const {id} = props.match.params
    return{
        question: questions[id],
        authedUser: authedUser,
    }

}

export default withRouter(connect(mapStateToProps)(Question))