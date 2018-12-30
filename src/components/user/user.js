import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';
import {Link, Redirect} from 'react-router-dom'
import {Label, Media} from 'reactstrap'
import "./user.css"


class User extends Component{

    render(){
        console.log("INSIDE USER", this.props.user)
        const {name, avatarURL, answers, questions} = this.props.user
        return(
            <div>
                <img src={avatarURL} className="circular-image" />
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
    // TODO: This will be an ID
    console.log("id is ", id)
    return {
        user: users[id],
    }
}

export default connect(mapStateToProps)(User)