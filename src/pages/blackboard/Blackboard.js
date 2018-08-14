import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from "./styles";

import { withStyles } from '@material-ui/core/styles';
import DrawableCanvas from "./blackboard-components/DrawableCanvas";

class Blackboard extends Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <DrawableCanvas/>
      </React.Fragment>
    )
  }
}


Blackboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Blackboard);
