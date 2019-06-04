import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class UserItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.user.firstName}</p>
      </div>
    )
  }
}

//PropTypes
UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem
