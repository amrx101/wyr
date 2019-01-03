import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import QuestionView from '../question/listQues'
import './tabs.css'

class ControlledTabs extends Component {
  render() {
      const {answeredQIds, notAnsweredQIds} = this.props
    return (
        <div className="fancy"> Hi!  {this.props.user.name} Welcome to Would You Rather!
            <Tabs>
                <TabList>
                    <Tab><h1>Unanswered</h1></Tab>
                    <Tab><h1>Answered</h1></Tab>
                </TabList>
                <TabPanel> <TabContent type={"unanswered"} questions={notAnsweredQIds}/> </TabPanel>
                <TabPanel> <TabContent type={"answered"} questions={answeredQIds}/> </TabPanel>
            </Tabs>
        </div>
    );
  }
}

class TabContent extends React.Component{
    render(){
        const{questions, type} = this.props
        return(
            <div> Questions Are: 
                <ul>
                    {questions.map((question) => (
                        <li key={question}><QuestionView id={question} type={type}/></li>
                        ))
                    }
                </ul>
            </div>
           
        )
    }

}

function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


function mapStateToProps({questions, authedUser, users}) {

    const notAnsweredQuestions = Object.values(questions).filter((question) =>
        !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser))

    const answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    )

    let user = users[authedUser]

    return {
        notAnsweredQIds: Object.values(notAnsweredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        answeredQIds: Object.values(answeredQuestions)
            .sort((a, b) => b.timestamp - a.timestamp).map((q) => q.id),
        user: users[authedUser],
        noUser: isEmpty(user)
    }
}

export default connect(mapStateToProps)(ControlledTabs)
