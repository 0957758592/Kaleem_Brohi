import axios from 'axios';

const getHeaders = () => ({
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getFilterOptions = (mode) =>
  axios
    .get(`http://127.0.0.1:9202/search?level=${mode}`)
    .then(res => res.data || []);

export const getCSVFile = (data) =>
  axios
    .post(
      `http://127.0.0.1:9201/filter1`,
      {
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
