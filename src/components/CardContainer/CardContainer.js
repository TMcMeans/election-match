import React from 'react';
import { ElectionCard } from '../ElectionCard/ElectionCard';

export const CardContainer = ({ electionData, error }) => {
  const electionCards = electionData.map(election => (
    <ElectionCard {...election} key={election.id} />
  ));

  return (
    <div className="card-container">
      {error ? (
        <h1>Sorry there was an issue handling your request</h1>
      ) : (
        <h1>Your results below:</h1>
      )}
      {electionCards}
    </div>
  );
};
