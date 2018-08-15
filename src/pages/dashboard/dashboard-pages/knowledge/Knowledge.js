import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TabsCard from "./knowledge-components/tabs-card/TabsCard";
import { getTabContent } from '../../../../services/knowledge.services';

class Knowledge extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tab1: {
        number: 12,
        label: 'done courses',
        background: '#ECF0F1',
      },
      tab2: {
        number: 3,
        label: 'unfinished courses',
        background: '#ECF0F1',
      }
    }
  }

  componentDidMount() {

    getTabContent().then(data => {
      this.setState({
        name: data.name,
        avatar: data.avatar,
        userType: data.userType,
        expo: data.exp,
        rating: data.rating
      })
    });
  }


  render() {

    const { classes } = this.props;

    return (
      <div>
        <Grid container className={classes.root}>
          <Grid item>
            <TabsCard tab1={this.state.tab1} tab2={this.state.tab2}/>
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
