import React from 'react';
import { ElectionCard } from '../ElectionCard/ElectionCard';

export const CardContainer = ({ electionData, error }) => {
  const electionCards = electionData.map(election => (
    <ElectionCard election={election} key={Date.now()} />
  ));

  return (
    <div className="card-container">
      <h1>Your results below:</h1>
      {electionCards}
    </div>
  );
};
