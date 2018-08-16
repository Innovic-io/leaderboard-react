import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header'
import {styles} from './styles';
import { UserContext } from './components/context/Context'

import {withStyles} from "@material-ui/core/styles";
import Dashboard from "./pages/dashboard/Dashboard";
import Exam from "./pages/exam/Exam";
import Course from "./pages/course/Course";
import News from "./pages/news/News";
import QandA from "./pages/q-and-a/QandA";
import Blackboard from "./pages/blackboard/Blackboard";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: '',
      notifications: '',
      messages: '',
    }
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <UserContext.Consumer>
          {(context) => (
            <React.Fragment>
              <div className={classes.root}>
                <div className={classes.left}>
                  <Sidebar user={context.state.name} avatar={context.state.avatar}/>
                </div>
                <div className={classes.right}>
                  <Header messages={context.state.messages} notifications={context.state.notifications}/>
                  <div className={classes.content}>
                    <Switch>
                      <Route path='/dashboard' component={Dashboard}/>
                      <Route path='/exam' component={Exam}/>
                      <Route path='/course' component={Course}/>
                      <Route path='/news' component={News}/>
                      <Route path='/qanda' component={QandA}/>
                      <Route path='/blackboard' component={Blackboard}/>
                    </Switch>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default withStyles(styles)(App);

/*
* */
