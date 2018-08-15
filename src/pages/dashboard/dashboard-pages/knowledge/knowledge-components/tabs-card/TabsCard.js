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
              <div className={classes.icon}>
                <svg className="svg-inline--fa fa-angle-double-down fa-w-10" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512">
                  <path fill="currentColor"
                        d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path>
                </svg>
              </div>

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
