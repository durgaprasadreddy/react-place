import appActions from '../constants/action-types/map.actionTypes';
import commonActions from '../constants/action-types/common';
import * as appApi from '../api/map.api';

export const getPlacesAction = (query) => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: appActions.SEARCH_PLACE,
  promise: () => appApi.getPlaceApi(query),
});

export const getPlaceDetail = (placeId) => ({
  type: commonActions.COMMON_API_CALL,
  subtypes: appActions.GET_PLACE_DETAIL,
  promise: () => appApi.getPlaceDetailApi(placeId),
  data: placeId
});
