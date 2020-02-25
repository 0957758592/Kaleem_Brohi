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
    .get(
      `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=district`
    )
    .then(res => res.data || []);

export const getFilterOptionsBuilding = ids =>
  axios
    .get(
      `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=building&ids=${ids}`
    )
    .then(res => res.data || []);

export const getFilterOptionsGrade = ids =>
  axios
    .get(
      `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=grade&ids=${ids}`
    )
    .then(res => res.data || []);

export const getFilterOptionsEventSecond = (test, newFromDate, newToDate) => {
  const url = !(newFromDate && newToDate)
    ? `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=event&test=${test}`
    : `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=event&test=${test}&fromDate=${newFromDate}&toDate=${newToDate}`;
  console.log("urt", url);
  return axios.get(url).then(res => res.data || []);
};

export const getFilterOptionsClass = ids =>
  axios
    .get(
      `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research/filters?level=class&ids=${ids}`
    )
    .then(res => res.data || []);

export const getCSVFile = data =>
  axios
    .get(
      `https://adaptive-file-extract-api-prod.rcs.rsiapps.com/adaptive/v1/research?${data}`
    )
    .then(res => {
      console.log(res);
    });
