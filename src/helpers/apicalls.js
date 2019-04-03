export const fetchElections = async address => {
  let place = address.city;
  place.replace(' ', '_');
  const state = address.state.toLowerCase();
  const url = `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}/place:${place}`;

  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

// https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:ma,ocd-division/country:us/state:ma/place:wayland
