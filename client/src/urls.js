export const getFarmsUrl = (name, minRevenue, maxRevenue) => {
  let url =`${process.env.REACT_APP_BACKEND_DOMAIN}/farms`;
  if(!name && isNaN(minRevenue) && isNaN(maxRevenue)) {
    return url;
  }
  const urlParams = new URLSearchParams();
  if(name) {
    urlParams.set('farm-name', name);
  }
  if(minRevenue) {
    urlParams.set('min-revenue', minRevenue);
  }
  if(maxRevenue) {
    urlParams.set('max-revenue', maxRevenue)
  }
  return `${url}?${urlParams.toString()}`;
};
