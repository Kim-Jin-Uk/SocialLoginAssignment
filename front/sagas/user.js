import axios from 'axios'
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects'

import {
  GET_EMAIL_FAILURE,
  GET_EMAIL_REQUEST,
  GET_EMAIL_SUCCESS, LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../reducers/user'

function getEmailAPI() {
  return axios.get('user')
}

function* getEmail() {
  try {
    const result = yield call(getEmailAPI)
    yield put({
      type: GET_EMAIL_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    yield put({
      type: GET_EMAIL_FAILURE,
      data: err.response.data,
    })
    console.error(err)
  }
}

function logOutAPI() {
  return axios.post('user/logout')
}

function* logOut() {
  try {
    const result = yield call(logOutAPI)
    yield put({
      type: LOGOUT_SUCCESS,
      data: result.data,
    })
  } catch (err) {
    yield put({
      type: LOGOUT_FAILURE,
      data: err.response.data,
    })
    console.error(err)
  }
}
function* watchGetEmail() {
  yield takeLatest(GET_EMAIL_REQUEST, getEmail)
}
function* watchLogOut() {
  yield takeLatest(LOGOUT_REQUEST, logOut)
}
export default function* userSaga() {
  yield all([fork(watchGetEmail), fork(watchLogOut)])
}
