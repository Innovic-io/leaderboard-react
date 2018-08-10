import React, {Component} from 'react';
import {styles} from './styles';
import PropTypes from 'prop-types';

import AboutUser from "./about-user/AboutUser";

import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Rating from "./rating/Rating";

class AccountInfoBar extends Component {

  render() {

    const {username, avatar, usertype, expo, rating, classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.user}>
          <div className={classes.avatarDiv}>
            <Avatar className={classes.avatar} src={avatar}/>
          </div>
          <AboutUser username={username} usertype={usertype} expo={expo}/>
          <Rating rating={rating}/>
        </div>
      </div>
    )
  }
}

AccountInfoBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AccountInfoBar);
