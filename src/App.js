import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'

import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header'
import {styles} from './styles';
import {getUser, getNotifications} from './services/user.services'

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

  componentDidMount() {

    getUser().then(data => {
      this.setState({
        user: {
          name: data.name,
          avatar: data.avatar,
        }
      })
    });

    getNotifications().then(data => {
      this.setState({
        notifications: data.notifications,
        messages: data.messages,
      })
    });
  }

  render() {
    const {classes} = this.props;

    return (
      <div>
        <div className={classes.root}>
          <div className={classes.left}>
            <Sidebar user={this.state.user.name} avatar={this.state.user.avatar}/>
          </div>
          <div className={classes.right}>
            <Header messages={this.state.messages} notifications={this.state.notifications}/>
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
      </div>
    );
  }
}

export default withStyles(styles)(App);
