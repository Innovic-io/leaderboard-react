import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';

class Exam extends Component {


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        Exam
      </div>
    )
  }
}


Exam.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Exam);
