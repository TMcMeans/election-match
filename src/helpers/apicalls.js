export const fetchElections = async url => {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  });

  let electionData = await response.json();
  return electionData;
};
