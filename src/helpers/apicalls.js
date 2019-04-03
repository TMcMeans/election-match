export const fetchElections = async url => {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  let electionData = await response.json();
  return electionData;
};
