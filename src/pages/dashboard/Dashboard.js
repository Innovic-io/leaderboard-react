import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {getUser} from "../../services/user.services";

import {withStyles} from '@material-ui/core/styles';
import AccountInfoBar from "./dashboard-components/account-info-bar/AccountInfoBar";
import SecondaryMenu from "../../components/secondary-menu/SecondaryMenu";

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      avatar: '',
      userType: '',
      expo: '',
      rating: ''
    }
  }

  componentDidMount() {

    getUser().then(data => {
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

    const {classes} = this.props;

    return (
      <div>
        <div className={classes.root}>
          <AccountInfoBar avatar={this.state.avatar} username={this.state.name} usertype={this.state.userType}
                          expo={this.state.expo} rating={this.state.rating}/>
        </div>
        <div>
          <div className={classes.menu}>
            <SecondaryMenu/>
          </div>
        </div>
      </div>


    )
  }
}


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Dashboard);
