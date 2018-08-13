import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {styles} from './styles';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';

class IconFactory extends Component {

    iconTooltip(tooltip, icon, classes){
        return (
            <Tooltip title={tooltip} placement='top'>
                <IconButton className={classes.tooltipIcon}>
                    <img src={'/icons/' + icon} alt=''/>
                </IconButton>
            </Tooltip>
        )
    }
    iconBadge(badgeContent, icon, classes){
        return(
            <IconButton className={classes.badgeIcon}>
                {badgeContent > 0 &&
                <Badge badgeContent={badgeContent} color='secondary'>
                    <img src={'/icons/' + icon} alt=''/>
                </Badge>}
                {badgeContent === 0 && <img src={'/icons/' + icon} alt=''/>}
            </IconButton>
        )
    }
    render() {

        const { classes, icon, tooltip, badge } = this.props;

        return(
            <React.Fragment>
                {(tooltip !== undefined) ? this.iconTooltip(tooltip, icon, classes) : this.iconBadge(badge, icon, classes)}
            </React.Fragment>
        )
    }
}



IconFactory.propTypes = {
    classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
};
export default withStyles(styles)(IconFactory);
