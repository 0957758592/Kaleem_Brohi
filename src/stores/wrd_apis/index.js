import axios from 'axios';

const getHeaders = () => ({
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getFilterOptionsDistrict = () =>
  axios
    // .get(`http://127.0.0.1:9202/search?level=${mode}`)

// http://localhost:9202/adaptive/v1/research/filters?level=district
// http://localhost:9202/adaptive/v1/research/filters?level=building&ids=635568,635504,619716,635650,635603,635586,619594
// http://localhost:9202/adaptive/v1/research/filters?level=class&ids=635652,635570,619717

    .get(`http://localhost:9202/adaptive/v1/research/filters?level=district`)
    .then(res => res.data || []);

export const getFilterOptionsBuilding = (ids) =>
  axios
    // .get(`http://127.0.0.1:9202/search?level=${mode}`)

    // http://localhost:9202/adaptive/v1/research/filters?level=district
    // http://localhost:9202/adaptive/v1/research/filters?level=building&ids=635568,635504,619716,635650,635603,635586,619594
    // http://localhost:9202/adaptive/v1/research/filters?level=class&ids=635652,635570,619717

    .get(`http://localhost:9202/adaptive/v1/research/filters?level=building&ids=${ids}`)
    .then(res => res.data || []);

export const getFilterOptionsClass = (ids) =>
  axios
    // .get(`http://127.0.0.1:9202/search?level=${mode}`)

    // http://localhost:9202/adaptive/v1/research/filters?level=district
    // http://localhost:9202/adaptive/v1/research/filters?level=building&ids=635568,635504,619716,635650,635603,635586,619594
    // http://localhost:9202/adaptive/v1/research/filters?level=class&ids=635652,635570,619717

    .get(`http://localhost:9202/adaptive/v1/research/filters?level=class&ids=${ids}`)
    .then(res => res.data || []);

export const getCSVFile = (data) =>
  axios
    .post(
      `http://127.0.0.1:9201/filter/`,
      {
        bopdy: mode,
        
        // Todo: replace data with parameter
        // "building": [
        //   "QABS", "RIVB"
        // ],
        // "className": [
        //   "RIVC-3", "RIVC-5"
        // ]
      },
      getHeaders()
    )
    .then(res => res.data);
