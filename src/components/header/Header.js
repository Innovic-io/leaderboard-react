import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';
import IconFactory from '../icon-factory/IconFactory';

import { withStyles } from '@material-ui/core/styles';
import Search from "./search/Search";

class Header extends Component {


  render() {

    const { classes, messages, notifications } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.icons}>
          <IconFactory icon='personal.svg' badge={0}/>
          <IconFactory icon='inbox.svg' badge={messages}/>
          <IconFactory icon='notification.svg' badge={notifications}/>
        </div>
        <div className={classes.logo}>
          <img src={'/logo.svg'} alt=''/>
        </div>
        <div className={classes.search}>
          <Search/>
        </div>
      </div>
    )
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);
