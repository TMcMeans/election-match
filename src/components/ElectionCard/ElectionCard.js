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

//Election object descriptors:
// the jurisdiction it affects (defined using an Open Civic Data Identifier, or OCD-ID)
// a type label (e.g. - municipal, special, school)
// the deadline to register to vote
// the deadline to request an absentee ballot
// whether or not same-day voter registration is available
// whether or not absentee voting requires an excuse
// (for primary elections) whether participation is open to voters without a party affiliation, or closed to party members only
