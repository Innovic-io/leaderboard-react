import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from "../../../node_modules/@material-ui/core/Tabs/Tabs";
import Tab from "../../../node_modules/@material-ui/core/Tab/Tab";

class TabsCard extends Component {

  render() {

    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia className={classes.media}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              fullWidth
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab label="RECENTS"/>
              <Tab label="FAVORITES"/>
              <Tab label="NEARBY"/>
            </Tabs>
          </CardMedia>
          <CardContent>
            content
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

}

TabsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsCard);
