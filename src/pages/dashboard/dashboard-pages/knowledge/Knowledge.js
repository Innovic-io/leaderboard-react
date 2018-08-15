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
        number: 0,
        label: '',
        content: []
      },
      tab2: {
        number: 0,
        label: '',
        content: []
      }
    }
  }

  componentDidMount() {

    getTabContent().then(data => {

      const finishedCourses = data.data.filter(value => value.finished === true);
      const unfinishedCourses = data.data.filter(value => value.finished === false);

      this.setState({
        tab1: {
          number: finishedCourses.length,
          label: 'done courses',
          content: finishedCourses
        },
        tab2: {
          number: unfinishedCourses.length,
          label: 'unfinished courses',
          content: unfinishedCourses
        }
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
