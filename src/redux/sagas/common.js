import { takeEvery, call, put } from "redux-saga/effects";
import appActions from "../constants/action-types/map.actionTypes";
import CommonActions from "../constants/action-types/common";
import _ from "lodash";

function* errorApiHandler({ errors, onFailCallback, data, action, FAIL }) {
  const error = errors;

  if (error && error.cash_error_code) {
    yield put({
      type: appActions.LOG_NETWORK_CALL,
      payload: { ...error, timestamp: Date.now() },
    });
  }

  yield put({ error });

  if (onFailCallback && _.isFunction(onFailCallback)) {
    onFailCallback({ ...error }, errors);
  }
}

function* handleApiCall(action) {
  const {
    promise,
    onSuccessCallback,
    onFailCallback,
  } = action;
  const { START, SUCCESS, FAIL } = action.subtypes;
  const { data = {} } = action;

  yield put({ type: START, data });

  const apiPromise = () => promise();

  try {
    const response = yield call(apiPromise);
    const result = yield response.data;
    yield put({
      type: SUCCESS,
      subtype: "success",
      payload: result,
      data,
    });
    if (onSuccessCallback && _.isFunction(onSuccessCallback)) {
      onSuccessCallback(result);
    }
  } catch (errors) {
    yield call(errorApiHandler, { errors, onFailCallback, data, action, FAIL });
  }
}

export default function* () {
  yield takeEvery(CommonActions.COMMON_API_CALL, handleApiCall);
}
