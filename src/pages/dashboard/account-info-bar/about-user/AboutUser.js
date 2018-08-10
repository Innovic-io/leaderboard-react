import React, { Component } from 'react';

import { styles } from './styles';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class AboutUser extends Component {

  render() {

    const { username, classes, usertype, expo } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant='title' className={classes.username}>
          {username}
        </Typography>
        <div className={classes.userType}>
          <Typography style={{ marginRight: 5 }} color={'inherit'} variant='subheading'>
            {usertype + ' ● '}
          </Typography>
          <a href={''}>Learn more</a>
        </div>
        <div className={classes.expo}>
          <img path={{ fill: '#7F8C8D' }} className={classes.img} src={'/icons/leaf-solid.svg'} alt=''/>
          <Typography variant='subheading' color={'inherit'}>
            {expo + ' exp'}
          </Typography>
        </div>

      </div>
    )
  }

}

AboutUser.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AboutUser);
