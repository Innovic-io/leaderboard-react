import React, {Component} from 'react';
import {styles} from './styles';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Grade from '@material-ui/icons/Grade';

class Rating extends Component {

  render() {

    const {classes, rating} = this.props;

    return (
      <div className={classes.root}>
        <Grade color={'inherit'}/>
        <Grade color={'inherit'}/>
        <Grade color={'inherit'}/>
        <Grade color={'inherit'}/>
        <Grade color={'inherit'}/>
      </div>
    )
  }
}

Rating.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Rating);
