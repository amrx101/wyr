import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';
import {Link, Redirect} from 'react-router-dom'
import {Label, Media} from 'reactstrap'
import "./user.css"


class User extends Component{

    render(){
        // const answeredQuestions = user.answers.length
        // const askedQuestions = user.questions.length
        // const name = user.name
        // const avatarURL = user.avatarURL
        const {name, avatarURL, answers, questions} = this.props.user
        return(
            <div>
                <img src={avatarURL} className="circular-image" />
                <div className='contact-details'>
                    <p>Name: {name}</p>
                    <p>Asked: {questions.length}</p>
                    <p>Answered: {answers.length}</p> 
                </div>
            </div>
        );

    }


}

function mapStateToProps({users, authedUser}){
    return {
        user: users[authedUser],
    }
}

export default connect(mapStateToProps)(User)