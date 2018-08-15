import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class NumberLabel extends Component {

  onClick = (event) => {
    this.props.onClick(event);
  };

  render() {

    const { classes, tab } = this.props;

    return (
      <Button
        classes={{
          root: classes.root,
          label: classes.buttonLabel
        }}
        onClick={(event) => this.onClick(event)}
      >
        <div className={classes.number}>
          <Typography color={'inherit'} variant={'display1'}>
            {tab.number}
          </Typography>
        </div>
        <div className={classes.label}>
          <Typography color={'inherit'} variant={'caption'}>
            {tab.label}
          </Typography>
        </div>

      </Button>


    )
  }
}


NumberLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NumberLabel);
