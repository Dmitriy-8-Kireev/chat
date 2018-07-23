import React, { Component, Fragment } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <Fragment>
        <span className="message">{this.props.text}</span>
        <span className="time">{this.props.date}</span>
      </Fragment>
    );
  }
}

export default Message;
