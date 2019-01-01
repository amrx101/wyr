import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import User from '../user/user'


class Question extends Component{
    render(){
        const {question, authedUser} = this.props
        let option1 = question.optionOne.text
        let option2 = question.optionTwo.text
        return(
            <div>
                <User id={question.author}/>
                <div>{option1}</div>
                <div>{option2}</div>
            </div>
            
        )
    }
}

class AnsweredQuestion extends Component{

    render(){
        const {question} = this
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