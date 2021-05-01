export const getFarmsUrl = (name, minRevenue, maxRevenue) => {
  let url =`${process.env.REACT_APP_BACKEND_DOMAIN}/farms`;
  if(!name && isNaN(minRevenue) && isNaN(maxRevenue)) {
    return url;
  }
  const urlParams = new URLSearchParams();
  //using snake case to utilize pythons kwargs at API layer
  //could make a util thing for that e.g. jsToPython or something
  if(name) {
    urlParams.set('farm_name', name);
  }
  if(minRevenue) {
    urlParams.set('min_revenue', minRevenue);
  }
  if(maxRevenue) {
    urlParams.set('max_revenue', maxRevenue)
  }
  return `${url}?${urlParams.toString()}`;
};
