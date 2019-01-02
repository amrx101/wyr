import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./user.css"


class User extends Component{

    render(){
        const {name, avatarURL, answers, questions} = this.props.user
        return(
            <div>
                <img src={avatarURL} className="circular-image" alt="User Avatar"/>
                <div className='contact-details'>
                    <p>Name: {name}</p>
                    <p>Asked: {questions.length}</p>
                    <p>Answered: {Object.values(answers).length}</p> 
                </div>
            </div>
        );
    }
}

function mapStateToProps({users}, {id}){
    return {
        user: users[id],
    }
}

export default connect(mapStateToProps)(User)