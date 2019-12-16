import axios from "axios";

const getHeaders = () => ({
  headers: {
    "Content-Type": "application/json"
  }
});

export const getFilterOptionsDistrict = () =>
  axios
    .get(`http://localhost:9202/adaptive/v1/research/filters?level=district`)
    .then(res => res.data || []);

export const getFilterOptionsBuilding = ids =>
  axios
    .get(
        `http://localhost:9202/adaptive/v1/research/filters?level=building&ids=${ids}`
    )
    .then(res => res.data || []);

export const getFilterOptionsClass = ids =>
  axios
    .get(
        `http://localhost:9202/adaptive/v1/research/filters?level=class&ids=${ids}`
    )
    .then(res => res.data || []);

export const getCSVFile = data =>
  axios
    .get(`http://localhost:9201/adaptive/v1/research?${data}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Credentials": true
      },
      fetchOptions: {
        mode: "cors"
      }
    })
    .then(res => {
      console.log("getCSVFile_resp", res);
      console.log("getCSVFile_data", data);
      // res.data
    });
