import {
  call,
  put
} from "redux-saga/effects";

import {
  getBooksSuccess,
  getBooksFailed,
  addBookSuccess,
  addBookFailed
} from "../../booksSlice";

import {
  requestGetBooks
} from "../requests/books";

export function* handleGetBooks(action) {
  try {
    const response = yield call(requestGetBooks);
    const {
      data
    } = response;
    yield put(getBooksSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(getBooksFailed());
  }
}


export function* handleAddBook(action) {
  try {
    console.log(action.payload)
    yield put(addBookSuccess(action.payload))
  } catch (error) {
    yield put(addBookFailed());
  }
}
