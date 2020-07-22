import config from "./config.js";
const axios = require("axios").default;

const apiKey = config.Key;
const BASE_URL = "https://ws.audioscrobbler.com/";
const URL_ARTISTS =
  "2.0/?method=geo.gettopartists&country=spain&api_key=1f69dbc44572d9aacc331a83c31c4295&format=json";
const URL_TRACKS =
  "2.0/?method=geo.gettoptracks&country=spain&api_key=1f69dbc44572d9aacc331a83c31c4295&format=json";

const URL_TAGS =
  "2.0/?method=chart.gettoptags&api_key=1f69dbc44572d9aacc331a83c31c4295&format=json";

async function getArtists() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_ARTISTS}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getTopTracks() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TRACKS}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getTopTags() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TAGS}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default {
  getArtists,
  getTopTracks,
  getTopTags,
};
