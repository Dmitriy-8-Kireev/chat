import React, { Component } from 'react';
import './Chat.css';
import Message from 'components/Message';
class Chat extends Component {
  state = {
    messages: [],
    messagesInput: '',
    date: []
  };
  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    });
  };
  sendMessageOnEnter = e => {
    let time = new Date();
    if (e.key === 'Enter' && this.state.messageInput !== '') {
      this.setState({
        messages: [
          ...this.state.messages,
          { text: this.state.messageInput, date: time.toLocaleTimeString() }
        ]
      });
      this.setState({ messageInput: '' });
    }
  };
  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => {
              return (
                <Message
                  key={Math.random()}
                  text={message.text}
                  date={message.date}
                />
              );
            })}
          </div>
        </div>
        <input
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
