import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import { cleanAddress, cleanElectionData } from '../../helpers/dataCleaner';
import { fetchElections } from '../../helpers/apicalls';
import { mockElectionData } from '../../helpers/mockElectionData';
import './App.css';

import AddressForm from '../AddressForm/AddressForm';

class App extends Component {
  state = {
    electionData: [],
    error: ''
  };

  submitForm = address => {
    const ocd_id = cleanAddress(address);
    //post to server

    this.handleGetRequest(ocd_id);
  };

  handleGetRequest = async url => {
    try {
      let electionData = await fetchElections(url);
      // let cleanedElectionData = cleanElectionData(electionData);
      this.setState({
        electionData: mockElectionData
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error
      });
    }
  };

  render() {
    return (
      <div className="app">
        <h1>Election Match</h1>
        <p>
          Fill out the form and on submit, see a list of upcoming elections in
          your area.
        </p>
        <div className="flex-wrapper">
          <AddressForm submitForm={this.submitForm} />
          <CardContainer
            electionData={this.state.electionData}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
