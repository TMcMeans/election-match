import React, { Component } from 'react';
import { CardContainer } from '../CardContainer/CardContainer';
import { cleanAddress } from '../../helpers/dataCleaner';
import { fetchElections, postAddress } from '../../helpers/apicalls';
import { mockElectionData } from '../../helpers/mockElectionData';
import './App.css';

import AddressForm from '../AddressForm/AddressForm';

class App extends Component {
  state = {
    electionData: [],
    error: ''
  };

  submitForm = async address => {
    const ocd_id = cleanAddress(address);
    //post url to proxy server
    await postAddress(ocd_id);
    //get external data back from proxy server
    this.handleGetRequest();
  };

  handleGetRequest = async () => {
    try {
      let electionData = await fetchElections();
      this.setState({
        electionData: electionData
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
