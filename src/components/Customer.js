import React, { Component } from 'react';

/* This component takes the values passed in from its parent container, CustomerBox
and lists the name, number, and the comment body */

class Customer extends Component {
  render() {
    return(
      <div className="name-list">
        <p className="name-header">{this.props.name}</p>
        <p className="phone-header">{this.props.phone}</p>
        {/* <a href="#" className="delete">X</a> */}
        <p className="delete">X</p>
        <hr/>
        <p className="comment-body">{this.props.body}</p>
      </div>
    )
  }
}

export default Customer;
