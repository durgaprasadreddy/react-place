import mapActions from "../constants/action-types/map.actionTypes";

const initialState = {
  loading: false,
  places: [],
  place: {},
  placeLoading: false,
};

const MapReducer = (state = initialState, action) => {
  switch (action.type) {
    case mapActions.SEARCH_PLACE.START:
      return { ...state, loading: true };
    case mapActions.SEARCH_PLACE.SUCCESS:
      return {
        ...state,
        places: action.payload.predictions || [],
        loading: false,
      };
    case mapActions.SEARCH_PLACE.FAIL:
      return {
        ...state,
        loading: false,
      };

    case mapActions.GET_PLACE_DETAIL.START:
      return { ...state, placeLoading: action.data };
    case mapActions.GET_PLACE_DETAIL.SUCCESS:
      return {
        ...state,
        place: action.payload?.result || {},
        places: [],
        placeLoading: false,
      };
    case mapActions.GET_PLACE_DETAIL.FAIL:
      return {
        ...state,
        placeLoading: false,
      };

    case mapActions.RESET_SEARCH_DATA: {
      return {
        ...state,
        places: [],
      };
    }

    default:
      return state;
  }
};

export default MapReducer;
