import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddUser} from '../../actions/users'


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', username: '', avatarURL: '', newRegistration: false};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeId(event) {
      this.setState({username: event.target.value})
  }

  handleChangeAvatar(event) {
      this.setState({avatarURL: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
    // TODO: Dispatch authedUser
    // Set this.state.newRegistration to True
    const {dispatch} = this.props
    const {username} = this.state
    const {name} = this.state
    const {avatarURL} = this.state
    console.log("id is ", username)
    console.log("name is ", name)
    console.log("avatar is", avatarURL)
    dispatch(handleAddUser(username, name, avatarURL))
    this.setState({newRegistration: true})
  }

  render() {
      const {newRegistration} = this.state
      if (newRegistration === true){
          console.log("There is a user. We need to switch to user view")
          return (
            <h3> We have a USER, redirect to home page </h3>
          ) 
      }
      return (
          <div className="Modal">
              <div className="input_div">
                <form onSubmit={this.handleSubmit} className="ModalForm">
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} />
                    <input type="text" value={this.state.username} onChange={this.handleChangeId} />
                    <input type="text" value={this.state.avatarURL} onChange={this.handleChangeAvatar}/>
                    <input type="submit" value="Submit" />
                </form>
              </div>
          </div>
    );
  }
}

export default connect()(SignUp)