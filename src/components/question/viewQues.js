import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'


class Question extends Component{
    render(){
        const {question, authedUser} = this.props
        // questionAuthor = question.author
        console.log("QUESTION: ", question)
        // console.log("AUTHOR: ", questionAuthor)
        console.log("AUTHEDUSER: ", authedUser)
        return(
            <div> TODQUESTION PAGE </div>
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