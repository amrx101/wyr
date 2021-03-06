import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticateUser}  from '../../actions/authedUser'
import './login.css'
import {Link, Redirect} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'

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
        const {loginDone} = this.state
        const {from} = this.props.location.state || {from: {pathname: '/'}}

        if(loginDone){
            return <Redirect to={from}/>
        }
        let us1 = Object.values(this.props.users).map(function(user) {
            return {
                id: user.id,
                name: user.name
            }
        })
        let yy = us1.map((user) => ({id: user.id, name: user.name}))
        const options = yy.map(option =>
            <option key={option.id} value={option.id}>{option.name}</option>
        )
        return (
            <div className="login_page">
                <LoadingBar/>
                <h2> Existing User. Please LogIn. </h2>
                <div className="search_categories">
                    <div className="select">
                        <select className="selectItem" onChange={this.onChange}>
                            <option value="">Select option</option>
                                {options}
                        </select>
                    </div>
                </div>
                <div>
                    <button className="select_submit" type="button" disabled={!this.state.authedUser} onClick={this.handleClick}> Login</button>
                </div>
                <h2> New Users</h2>
                <Link to="/signup">Sign Up</Link>

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