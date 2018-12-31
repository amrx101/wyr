import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {handleAddQuestion} from '../../actions/questions'


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
    const {dispatch} = this.props
    const {option1, option2} = this.state
    dispatch(handleAddQuestion(option1, option2))
    this.setState({redirect: true})
  }

  render() {
      const {option1, option2, redirect} = this.state
      const isEnabled = option1.length > 0 && option2.length > 0;
      const {authedUser, noUser} = this.props
      if (noUser === true){
          return <Redirect to="/login"/>
      }
      if (redirect === true){
          // TODO: Redirect to dashboard
          console.log("There is a user. We need to switch to user view")
  
          return <Redirect to="/"/>
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

function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


function mapStateToProps({authedUser}){
    return{
        authedUser: authedUser,
        noUser : isEmpty(authedUser),
    }
}

export default connect(mapStateToProps)(AddQuestion)