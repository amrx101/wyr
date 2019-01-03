import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, withRouter, Link} from 'react-router-dom'
import User from '../user/user'
import './view.css'
import {handleAnswerQuestion} from '../../actions/questions'


class Question extends Component{
    handleVote = (vote) => {
        const{qid, dispatch} = this.props
        dispatch(handleAnswerQuestion(qid, vote))
    }

    render(){
        const{missing} = this.props
        if (missing === true){
            return <Redirect to="/login"/>
        }
        const{author, noUser} = this.props
        if (noUser=== true){
            return <Redirect to="/login"/>
        }
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
        const{option1} = this.props
        if (option1.text === textString) {
            return "optionOne"
        } else{
            return "optionTwo"
        }
    }

    handleOnClick = (e) =>{
        const{onClick} = this.props
        onClick(this.determineOption(e.target.textContent))
    }

    calculatePercentage = (votes) => {
        const {numUsers} = this.props
        let percentage = (votes.length/numUsers) * 100
        return (parseFloat(percentage).toPrecision(4));
    }

    renderAnswered = () =>{
         const {option1, option2, votes1, votes2} = this.props
         return(
            <div>
                <h2>Question Options</h2>
                    <div className="row">
                        <div className="column" >
                            <h2>{option1.text}</h2>
                            <p>Total Votes={votes1.length}</p>
                            <p>Percentatage={this.calculatePercentage(votes1)}</p>
                        </div>
                        <div className="column">
                            <h2>{option2.text}</h2>
                            <p>Total Votes={votes2.length}</p>
                            <p>Percentatage={this.calculatePercentage(votes2)}</p>
                        </div>
                    </div>
                </div>
        )
    }

    renderUnaswered = () => {
        const {option1, option2} = this.props
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

function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


function mapStateToProps({questions, users, authedUser}, props){
    const {id} = props.match.params
    let question = questions[id]
    if(question === undefined){
        return {
            missing: true,
        }
    }
    let option1 = question.optionOne
    let option2 = question.optionTwo
    let author = question.author
    let votes1 = option1.votes
    let votes2 = option2.votes
    let answered = votes1.includes(authedUser) || votes2.includes(authedUser)
    let numUsers = Object.keys(users).length

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
        noUser: isEmpty(authedUser),
        missing: false,
        numUsers: numUsers,
    }
}


export default withRouter(connect(mapStateToProps)(Question))