export const cleanAddress = uncleanAddress => {
  let place = uncleanAddress.city.toLowerCase();
  place.replace(' ', '_');
  let state = uncleanAddress.state.toLowerCase();

  return { place, state };
};
