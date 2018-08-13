import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class TextInput extends Component {

  render() {

    const { classes, placeholder } = this.props;

    return (
      <TextField
        className={classes.root}
        placeholder={placeholder}
        id='input'
        InputProps={{
          disableUnderline: true,
          classes: {},
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    )
  }
}


TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TextInput);
