import axios from "axios";

export const API__ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    let res = await axios.get(`${API__ENDPOINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchNewAlbums = async () => {
  try {
    let res = await axios.get(`${API__ENDPOINT}/albums/new`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongAlbums = async () => {
  try {
    let res = await axios.get(`${API__ENDPOINT}/songs`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const queAndAns = async () => {
  try {
    let res = await axios.get(`${API__ENDPOINT}/faq`);
    // console.log(res.data.data)
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
