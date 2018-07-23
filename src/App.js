import React, { Component, Fragment } from 'react';
import Chat from './components/Chat/Chat';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Title />
          <Chat />
        </div>
      </Fragment>
    );
  }
}

export default App;
