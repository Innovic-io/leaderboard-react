import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'

import { styles } from './styles';
import { getUser } from "../../services/user.services";

import { withStyles } from '@material-ui/core/styles';
import AccountInfoBar from "./dashboard-components/account-info-bar/AccountInfoBar";
import SecondaryMenu from "../../components/secondary-menu/SecondaryMenu";
import Exam from "../exam/Exam";
import Course from "../course/Course";
import News from "../news/News";
import QandA from "../q-and-a/QandA";
import Knowledge from "./dashboard-pages/knowledge/Knowledge";

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      avatar: '',
      userType: '',
      expo: '',
      rating: ''
    }
  }

  componentDidMount() {

    getUser().then(data => {
      this.setState({
        name: data.name,
        avatar: data.avatar,
        userType: data.userType,
        expo: data.exp,
        rating: data.rating
      })
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Switch>
          <Route path='/knowledge' component={Knowledge}/>
          <Route path='/exam' component={Exam}/>
          <Route path='/course' component={Course}/>
          <Route path='/news' component={News}/>
          <Route path='/qanda' component={QandA}/>
        </Switch>
        <div className={classes.root}>
          <AccountInfoBar avatar={this.state.avatar} username={this.state.name} usertype={this.state.userType}
                          expo={this.state.expo} rating={this.state.rating}/>
        </div>
        <div>
          <div className={classes.menu}>
            <SecondaryMenu/>
          </div>
          <div>
            <Knowledge/>
          </div>
        </div>
      </div>


    )
  }
}


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Dashboard);
