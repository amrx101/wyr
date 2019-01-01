import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, withRouter, Link} from 'react-router-dom'
import User from '../user/user'
import './view.css'
import {handleAnswerQuestion} from '../../actions/questions'


class Question extends Component{
    handleVote = (vote) => {
        //TODO: Make an api request to handle vote
        // change props
        // re=render
        const{qid, dispatch} = this.props
        console.log(vote, qid)
        dispatch(handleAnswerQuestion(qid, vote))
    }

    state = {
        voted: false
    }
    render(){
       const{author} = this.props
        return(
            <div>
                <User id={author} className="UserInfo"/>
                <QuestionInfo {...this.props} onClick={this.handleVote}/>
            </div>      
        )
    }
}

class QuestionInfo extends Component{

    determineOption = (textString) =>{
        const{option1, option2} = this.props
        if (option1.text === textString) {
            return "optionOne"
        } else{
            return "optionTwo"
        }
    }

    handleOnClick = (e) =>{
        console.log("ONCLIKC")
        const{onClick} = this.props
        let vote = this.determineOption(e.target.textContent)
        onClick(vote)
    }

    renderAnswered = () =>{
         const {question, authedUser, option1, option2, votes1, votes2, answered} = this.props
         return(
            <div>
                <h2>Question Info</h2>
                    <div className="row">
                        <div className="column" >
                            <h2>{option1.text}</h2>
                            <p>Votes={votes1.length}</p>
                        </div>
                        <div className="column">
                            <h2>{option2.text}</h2>
                            <p>Votes={votes2.length}</p>
                        </div>
                    </div>
                </div>
        )
    }

    renderUnaswered = () => {
        const {question, authedUser, option1, option2, votes1, votes2, answered} = this.props
        return (
            <div>
                <h2>QuestionInfo</h2>
                <div className="row">
                    <div className="column">
                        <Link to="#" onClick={this.handleOnClick}><h2>{option1.text}</h2></Link>
                    </div>
                    <div className="column">
                        <Link to="#" onClick={this.handleOnClick}><h2>{option2.text}</h2></Link>
                    </div>

                </div>
            </div>

        )

    }
    
    render() {
        const{answered} = this.props
        return(
            <div>
                {answered === true? this.renderAnswered(): this.renderUnaswered()}
            </div>
        )
    }
}


function mapStateToProps({questions, user, authedUser}, props){
    const {id} = props.match.params
    let question = questions[id]
    let option1 = question.optionOne
    let option2 = question.optionTwo
    let author = question.author
    let votes1 = option1.votes
    let votes2 = option2.votes
    let answered = votes1.includes(authedUser) || votes2.includes(authedUser)

    return{
        question: questions[id],
        authedUser: authedUser,
        option1: option1,
        option2: option2,
        author: author,
        votes1: votes1,
        votes2: votes2,
        answered: answered,
        qid: id,
    }
}


export default withRouter(connect(mapStateToProps)(Question))