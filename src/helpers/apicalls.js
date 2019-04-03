export const fetchElections = async url => {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    let electionData = await response.json();
    return electionData;
  } else {
    console.log(`${response.status}: ${response.statusText}`);
  }
};
