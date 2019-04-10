import React from 'react';
import './ElectionCard.css';

export const ElectionCard = props => {
  let date = new Date(props.date).toString().substring(0, 15);

  return (
    <div className="election-card">
      <h3>{props.description}</h3>
      <h3>{date}</h3>
      <a href={props['polling-place-url']}>Your polling website</a>
    </div>
  );
};
