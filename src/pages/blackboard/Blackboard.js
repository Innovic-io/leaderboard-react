import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {styles} from "./styles";

import {withStyles} from '@material-ui/core/styles';

class Blackboard extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    console.log('black');

    let c = document.getElementById("blackboard");
    let ctx = c.getContext("2d");
    ctx.moveTo(50, 50);
    ctx.lineTo(500, 500);
    ctx.stroke();
  }

  render() {

    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <canvas id="blackboard" width={1080} height={1085}>
          canvas
        </canvas>
      </div>
    )
  }
}


Blackboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Blackboard);
