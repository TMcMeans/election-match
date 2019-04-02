import React, { Component } from 'react';
import './App.css';

import AddressForm from '../AddressForm/AddressForm';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Election Count</h1>
        <p>
          Fill out the form and on submit, see a list of upcoming elections in
          your area.
        </p>
        <div className="flex-wrapper">
          <AddressForm />
        </div>
      </div>
    );
  }
}

export default App;
