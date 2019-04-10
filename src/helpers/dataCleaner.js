export const cleanAddress = uncleanAddress => {
  const place = uncleanAddress.city.toLowerCase().replace(' ', '_');
  const state = uncleanAddress.state.toLowerCase();
  const url = `https://api.turbovote.org/elections/upcoming?district-divisions=ocd-division/country:us/state:${state},ocd-division/country:us/state:${state}/place:${place}`;

  return url;
};
