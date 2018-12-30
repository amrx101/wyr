import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'


class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {option1: '', option2: '', redirect: false};
    this.handleChangeOption1 = this.handleChangeOption1.bind(this);
    this.handleChangeOption2 = this.handleChangeOption2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeOption1(event) {
    this.setState({option1: event.target.value});
  }

  handleChangeOption2(event) {
      this.setState({option2: event.target.value})
  }


  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
    // TODO: Dispatch authedUser
    // Set this.state.newRegistration to True
    // const {dispatch} = this.props
    // const {username} = this.state
    // const {name} = this.state
    // const {avatarURL} = this.state
    // console.log("id is ", username)
    // console.log("name is ", name)
    // console.log("avatar is", avatarURL)
    // dispatch(handleAddUser(username, name, avatarURL))
    // this.setState({newRegistration: true})
  }

  render() {
      const {option1, option2, redirect} = this.state
      const isEnabled = option1.length > 0 && option2.length > 0;
      if (redirect === true){
          console.log("There is a user. We need to switch to user view")
  
          return <Redirect to="/login"/>
      }
      return (
          <div className="add_question">
              <h2> Lets add a new Question </h2>
              <form onSubmit={this.handleSubmit} className="ModalForm">
                  <input type="text" value={this.state.option1} onChange={this.handleChangeOption1} placeholder=" Option1" />
                  <input type="text" value={this.state.option2} onChange={this.handleChangeOption2} placeholder="Option2" />
                  <input type="submit" value="Submit"  disabled={!isEnabled}/>
              </form>
          </div>
    );
  }
}

export default connect()(AddQuestion)