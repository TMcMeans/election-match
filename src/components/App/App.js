import React, { Component } from 'react';
import './App.css';

import AddressForm from '../AddressForm/AddressForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Election Count</h1>
        </header>
        <AdderessForm />
      </div>
    );
  }
}

export default App;
