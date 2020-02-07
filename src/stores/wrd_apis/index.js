import axios from "axios";

const getHeaders = () => ({
  headers: {
    "Content-Type": "application/json"
  }
});
/*
export const defaultConnection = () =>
  axios
    .get(
      `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?`
    )
    .then(res => res.data || []);
*/
export const getFilterOptionsDistrict = () =>
  axios
    .get(`https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=district`)
    .then(res => res.data || []);

export const getFilterOptionsBuilding = ids =>
  axios
    .get(
        `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=building&ids=${ids}`
    )
    .then(res => res.data || []);

export const getFilterOptionsClass = ids =>
  axios
    .get(
        `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=class&ids=${ids}`
    )
    .then(res => res.data || []);

export const getFilterOptionsEvent = () =>
  axios
    .get(`https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=event`)
    .then(res => res.data || []);

export const getCSVFile = data =>
  axios
    .get(`https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research?${data}` )
    .then(res => {console.log(res);
    });
