import { combineReducers } from 'redux';
import Map from './map.reducer';

const appReducer = combineReducers({
  Map,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
