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
import Tabs from '@material-ui/core/Tabs';


class TabsCard extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

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
              indicatorColor='none'
              textColor="secondary"
            >
            </Tabs>
          </CardMedia>
          <CardContent className={classes.content}>
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
