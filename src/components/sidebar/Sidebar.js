import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import LoggedInUser from "./user/LoggedInUser";
import SidebarItem from "./item/SidebarItem";
import { styles } from './styles';

class Sidebar extends Component {

  render() {

    const { classes, user, avatar } = this.props;

    return (
      <div className={classes.sidebar}>
        <LoggedInUser username={user} avatar={avatar}/>
        <List className={classes.list}>
          <ListItem button className={classes.listItem}>
            <NavLink to="/dashboard" activeClassName="selected" className={classes.link}>
              <SidebarItem icon={'dashboardIcon.svg'} label='dashboard'/>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/course" activeClassName="selected" className={classes.link}>
              <SidebarItem icon={'course.svg'} label='course'/>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/exam" activeClassName="selected" className={classes.link}>
              <SidebarItem icon={'exams.svg'} label='exam'/>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/qanda" activeClassName="selected" className={classes.link}>
              <SidebarItem icon={'q&a.svg'} label='q&a'/>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/news" activeClassName="selected" className={classes.link}>
              <SidebarItem icon={'news.svg'} label='news'/>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/blackboard" activeClassName="selected" className={classes.link}>
              <SidebarItem icon={'drawing.svg'} label='blackboard'/>
            </NavLink>
          </ListItem>
        </List>
      </div>
    )
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Sidebar);
