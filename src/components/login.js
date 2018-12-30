import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';
import { authenticateUser}  from '../actions/authedUser'
import './login.css'

class Login extends Component {
    state = {
        authedUser: '',
        users: null,
        loginDone: false
    }

    onChange =  (e) => {
        this.updateState(e.target.value)
    }

    updateState(selectedUser) {
        this.setState({authedUser: selectedUser})
    }

    handleClick = (e) => {
        e.preventDefault()
        const {dispatch} = this.props
        const {authedUser} = this.state
        dispatch(authenticateUser(authedUser))
        this.setState({loginDone: true})
    }

    render () {
        
        const {authedUser} = this.state
        const {loginDone} = this.state
        if(loginDone){
            // TODO: Route to /UserHome
            console.log("There is a user. We need to switch to user view")
            console.log(this.state.authedUser)
            return (
                <h3> We have a USER, redirect to home page </h3>
            ) 
        }
        let us1 = Object.values(this.props.users).map(function(user) {
            return {
                id: user.id,
                name: user.name
            }
        })
        let yy = us1.map((user) => ({id: user.id, name: user.name}))
        return (
            <div className="login_page">
                <h2> Please log in. </h2>
                <div className="search_categories">
                    <div className="select">
                        <select className="selectItem" onChange={this.onChange}>
                            {yy.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <button className="select_submit" type="button" disabled={!this.state.authedUser} onClick={this.handleClick}> Login</button>
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