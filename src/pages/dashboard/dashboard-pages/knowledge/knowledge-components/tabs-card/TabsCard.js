import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NumberLabel from "./number-label-component/NumberLabel";
import TabItemButton from "./tab-item-button/TabItemButton";
import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';

class TabsCard extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {

    this.setState({
      value,
    });
  };

  render() {

    const { classes, tab1, tab2 } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <div>
            <Tabs
              value={this.state.value}
              fullWidth
              textColor="secondary"
              indicatorColor='primary'
            >
              <NumberLabel onClick={(event) => this.handleChange(event, 0)} tab={tab1}/>
              <NumberLabel onClick={(event) => this.handleChange(event, 1)} tab={tab2}/>
            </Tabs>
          </div>
          <div className={classes.content}>{
            (this.state.value === 0) ?
              tab1.content.map((item, index) => (<TabItemButton key={index} content={item}/>))
              :
              tab2.content.map((item, index) => (<TabItemButton key={index} content={item}/>))
          }
          </div>
          <CardActions className={classes.actions}>
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
