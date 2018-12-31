import React, {Component} from 'react'
// import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class ControlledTabs extends React.Component {

  render() {
    return (
    <Tabs>
        <TabList>
            <Tab><h1>Unanswered</h1></Tab>
            <Tab><h1> Answered</h1></Tab>
        </TabList>

        <TabPanel> <Home/> </TabPanel>
        <TabPanel> <Home1/> </TabPanel>
    </Tabs>
    );
  }
}

class Home extends React.Component {
    render() {
        return <h2> HELLO THERE </h2>
    }
}

class Home1 extends React.Component {
    render() {
        return <h2> GENERAL KENOBI </h2>
    }
}


export default connect()(ControlledTabs)
