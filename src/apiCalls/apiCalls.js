export const fetchAreasData = () => {
  return fetch("https://vrad-api.herokuapp.com/api/v1/areas")
    .then((response) => response.json())
    .then((areaData) => {
      const promises = areaData.areas.map((area) => {
        let url = `https://vrad-api.herokuapp.com${area.details}`;
        return fetch(url)
          .then((response) => response.json())
          .then((areaDetails) => areaDetails);
      });
      return Promise.all(promises);
    });
};

export const fetchListingsData = () => {
  return fetch("https://vrad-api.herokuapp.com/api/v1/listings/").then((response) => response.json());
};
