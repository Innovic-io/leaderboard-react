import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {styles} from './styles';

class SecondaryMenu extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="knowledge" className={classes.item}/>} />
        <BottomNavigationAction label="course" className={classes.item}/>} />
        <BottomNavigationAction label="exam" className={classes.item}/>} />
        <BottomNavigationAction label="q&a" className={classes.item}/>} />
        <BottomNavigationAction label="news" className={classes.item}/>} />
        <BottomNavigationAction label="activity" className={classes.item}/>} />
        <BottomNavigationAction label="friends" className={classes.item}/>} />
      </BottomNavigation>
    );
  }
}

SecondaryMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondaryMenu);
