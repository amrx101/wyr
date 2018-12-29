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

    updateState(selectedUser) {
        this.setState({
            authedUser: selectedUser.value
        })
    }

    render () {
        
        const {authedUser} = this.state
        console.log("authedUser is ", authedUser)
        const {loginDone} = this.state
        if(loginDone){
            console.log("There is a user. We need to switch to user view")
            console.log(this.state.authedUser)
            return (
                <h3> We have a USER, redirect to home page </h3>
            ) 
        }
        const options = [
            { label: "Alligators", value: 100 },
            { label: "Crocodiles", value: 2 },
            { label: "Sharks", value: 3 },
            { label: "Small crocodiles", value: 4 },
            { label: "Smallest crocodiles", value: 5 },
            { label: "Snakes", value: 6 },
        ];

        console.log(this.props)
        console.log(this.props.users)

        //console.log(this.state.users) 

        // const options = this.props.users.map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))


        return (
            <div className="loginForm">
                <div className="menu">
                <Select name="foem-field-name" value={this.state.authedUser} options={options} onChange={this.onChange} />
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