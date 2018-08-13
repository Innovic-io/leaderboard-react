import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';

class News extends Component {


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        News
      </div>
    )
  }
}


News.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(News);
