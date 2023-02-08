import apiService from "./axios-service";
import { GET_PLACE, SEARCH_PLACE } from "../constants/endpoint-constants";
import { getMapApiQuery } from "../../utils";

export const getPlaceApi = (searchQuery) => apiService.get(`${SEARCH_PLACE}?${getMapApiQuery(`input=${searchQuery}`)}`);

export const getPlaceDetailApi = (placeId) => apiService.get(`${GET_PLACE}?${getMapApiQuery(`place_id=${placeId}`)}`);
