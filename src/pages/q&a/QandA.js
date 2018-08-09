import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';

class QandA extends Component {


  render() {

    const { classes } = this.props;

    return (
      <div>
        Q&A
      </div>
    )
  }
}


QandA.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(QandA);
