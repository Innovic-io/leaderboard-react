import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class TabItemButton extends Component {

  onClick = (event) => {
    this.props.onClick(event);
  };

  render() {

    const { classes, content } = this.props;

    return (
      <Button
        classes={{
          root: classes.root,
          label: classes.buttonLabel
        }}
        onClick={(event) => this.onClick(event)}
        variant={"text"}
        size={"small"}
      >
        <div className={classes.icon}>

        </div>
        <div className={classes.label}>
          <Typography color={'inherit'} variant={'caption'}>
            {content.name}
          </Typography>
        </div>
      </Button>


    )
  }
}


TabItemButton.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TabItemButton);
