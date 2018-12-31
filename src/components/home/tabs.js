import React, {Component} from 'react'
// import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class ControlledTabs extends React.Component {
  render() {
      console.log("CONTROLLED TABS  :", this.props)
      const {answeredQIds, notAnsweredQIds, user} = this.props
    return (
    <Tabs>
        <TabList>
            <Tab><h1>Unanswered</h1></Tab>
            <Tab><h1>Answered</h1></Tab>
        </TabList>
        <TabPanel> <TabContent type={"unanswered"} questions={notAnsweredQIds} user={user}/> </TabPanel>
        <TabPanel> <TabContent type={"answered"} questions={answeredQIds} user={user}/> </TabPanel>
    </Tabs>
    );
  }
}

class TabContent extends React.Component{
    render(){
        const{questions, type, user} = this.props
        return(
            <div> Questions Are: 
                <ul>
                    {questions.map((question) => (
                        <li key={question}>{question}</li>
                        ))
                    }
                </ul>
            </div>
           
        )
    }

}


export default connect()(ControlledTabs)
