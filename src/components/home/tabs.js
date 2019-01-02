import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import QuestionView from '../question/listQues'

class ControlledTabs extends Component {
  render() {
      const {answeredQIds, notAnsweredQIds} = this.props
    return (
    <Tabs>
        <TabList>
            <Tab><h1>Unanswered</h1></Tab>
            <Tab><h1>Answered</h1></Tab>
        </TabList>
        <TabPanel> <TabContent type={"unanswered"} questions={notAnsweredQIds}/> </TabPanel>
        <TabPanel> <TabContent type={"answered"} questions={answeredQIds}/> </TabPanel>
    </Tabs>
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


export default connect()(ControlledTabs)
