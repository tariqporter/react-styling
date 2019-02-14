import React, { Component } from 'react';
import Hello from './Hello';
import Hello2 from './Hello2';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello2 isAlternate={true} />
      </div>
    );
  }
}

export default App;
