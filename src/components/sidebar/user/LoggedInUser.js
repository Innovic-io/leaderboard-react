import React, {Component} from 'react';
import {styles} from './styles';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class LoggedInUser extends Component {

  render() {

    const {username, avatar, classes} = this.props;

    return (
      <div className={classes.root}>
        <Avatar className={classes.avatar} src={avatar}/>
        <Typography variant='subheading' className={classes.username}>
          {username}
        </Typography>
      </div>
    )
  }

}

LoggedInUser.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LoggedInUser);
