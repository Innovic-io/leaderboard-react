import React, { Component } from 'react';
import {styles} from './styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SidebarItem extends Component {

    render() {

        const { icon, label, classes } = this.props;

        return(
            <div className={classes.item}>
                <div className={classes.icon}>
                    <img src={'/icons/' + icon} alt=''/>
                </div>
                <Typography className={classes.text}>
                    {label}
                </Typography>
            </div>
        )
    }
}

SidebarItem.propTypes = {
    classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default withStyles(styles)(SidebarItem);
