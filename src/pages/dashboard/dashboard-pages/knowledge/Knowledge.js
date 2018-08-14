import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TabsCard from "../../../../components/tabs-card/TabsCard";

class Knowledge extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item>
            <TabsCard/>
          </Grid>
        </Grid>
      </div>


    )
  }
}


Knowledge.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Knowledge);
