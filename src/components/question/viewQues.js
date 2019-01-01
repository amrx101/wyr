import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import User from '../user/user'
import './view.css'


class Question extends Component{
    render(){
        const {question, authedUser} = this.props  
        return(
            <div>
                <User id={question.author} className="UserInfo"/>
                <QuestionInfo {...this.props}/>
            </div>      
        )
    }
}

class QuestionInfo extends Component{
    render() {
        const {question, authedUser} = this.props
        let option1 = question.optionOne.text
        let option2 = question.optionTwo.text
        let votes1 = question.optionOne.votes
        let votes2 = question.optionTwo.votes
        let author = question.author
        let voted = votes1.includes(authedUser) || votes2.includes(authedUser)
        return(
            <div>
                <h2>Question Info</h2>
                    <div className="row">
                        <div className="column" >
                            <h2>{option1}</h2>
                            <p>Votes={votes1.length}</p>
                        </div>
                        <div className="column">
                            <h2>{option2}</h2>
                            <p>Votes={votes2.length}</p>
                        </div>
                    </div>
            </div>
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