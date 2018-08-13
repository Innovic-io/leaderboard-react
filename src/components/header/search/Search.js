import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';
import TextInput from '../../text-input/TextInput';

import { withStyles } from '@material-ui/core/styles';

class Search extends Component {

  render() {

    const { classes } = this.props;

    return (

      <div className={classes.root}>
        <div>
          <TextInput placeholder='Type here for search'/>
        </div>
        <div>
          <img src={'/icons/search.svg'} alt=''/>
        </div>
      </div>
    )
  }
}


Search.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Search);
