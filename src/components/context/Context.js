import React, { Component } from 'react';

import { getUser, getNotifications } from "../../services/user.services";

export const UserContext = React.createContext('User Name');

export default class Provider extends Component {

  state = {
    name: '',
    avatar: '',
    notifications: '',
    messages: '',
    userType: '',
    expo: '',
    rating: ''
  };

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
    getNotifications().then(data => {
      this.setState({
        notifications: data.notifications,
        messages: data.messages,
      })
    });
  }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
