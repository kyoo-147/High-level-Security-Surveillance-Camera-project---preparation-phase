import axiosInstance from "./axios.js";

const autoCompleteApi = (payload) =>
  axiosInstance.get(
    `https://rsapi.goong.io/Place/AutoComplete`,
    {
      params: {
        api_key: import.meta.env.VITE_GOONG_API_KEY,
        input: payload,
        filter: "place",
        limit: 5,
        lang: "vi-VN",
      },
    });

const getPlaceDetail = (payload) =>
  axiosInstance.get(`https://rsapi.goong.io/Place/Detail`, {
    params: {
      api_key: import.meta.env.VITE_GOONG_API_KEY,
      place_id: payload,
    },
  });

const getDirections = (origin, destination) =>
  axiosInstance.get(`https://rsapi.goong.io/Direction`, {
    params: {
      api_key: import.meta.env.VITE_GOONG_API_KEY,
      origin: origin,
      destination: destination,
    },
  });

export const GoongService = {
  autoCompleteApi,
  getPlaceDetail,
  getDirections,
};
