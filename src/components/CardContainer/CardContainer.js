import React from 'react';
import { ElectionCard } from '../ElectionCard/ElectionCard';
import './CardContainer.css';

export const CardContainer = ({ electionData, error }) => {
  const electionCards = electionData.map(election => (
    <ElectionCard {...election} key={election.id} />
  ));

  return (
    <div className="card-container">
      {error ? (
        <h2>Sorry there was an issue handling your request</h2>
      ) : (
        <h2>Your results:</h2>
      )}
      {electionCards}
    </div>
  );
};
