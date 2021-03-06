export const fetchElections = async () => {
  let response = await fetch(
    'https://election-match-be.herokuapp.com/api/elections',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }
  );

  if (response.ok) {
    let electionData = await response.json();
    return electionData;
  } else {
    console.log(`${response.status}: ${response.statusText}`);
    return `${response.status}: ${response.statusText}`;
  }
};

export const postAddress = async ocd_id => {
  let response = await fetch(
    'https://election-match-be.herokuapp.com/api/search',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ocd_id
      })
    }
  );

  if (response.ok) {
    console.log('sucessfully sent user address to server');
  } else {
    console.log(`${response.status}: ${response.statusText}`);
    return `${response.status}: ${response.statusText}`;
  }
};
