import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';

class Course extends Component {


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        Course
      </div>
    )
  }
}


Course.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Course);
