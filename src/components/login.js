import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';

class Login extends Component {
    state = {
        authedUser: '',
        users: null,
        loginDone: false
    }

    onChange =  (e) => {
        console.log(e)
        const authedUser = e.value
        this.setState(() => ({authedUser}))
    }

    render () {
        const {authedUser} = this.state
        const {loginDone} = this.state
        if(loginDone){
            console.log("There is a user. We need to switch to user view")
            console.log(this.state.authedUser)
            return (
                <h3> We have a USER </h3>
            ) 
        }
        const scaryAnimals = [
            { label: "Alligators", value: 1 },
            { label: "Crocodiles", value: 2 },
            { label: "Sharks", value: 3 },
            { label: "Small crocodiles", value: 4 },
            { label: "Smallest crocodiles", value: 5 },
            { label: "Snakes", value: 6 },
        ];

        return (
            <div className="loginForm">
                <div className="menu">
                <Select value={this.state.authedUser} options={scaryAnimals} onChange={this.onChange} />
                </div>
            </div>

        )
    }

}

function mapStateToProps({ users, authedUser }) {
    return {
        users: users,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(Login)