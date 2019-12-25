import axios from "axios";

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
    .get(`http://localhost:9201/adaptive/v1/research?${data}` )
    .then(res => {console.log(res);
    });
