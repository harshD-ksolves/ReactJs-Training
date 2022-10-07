import { takeLatest } from "redux-saga/effects";
import { handleAddBook, handleGetBooks } from "./handlers/books";
import { getBooksStart,addBookStart } from "../booksSlice";

export function* watcherSaga() {
  yield takeLatest(getBooksStart.type, handleGetBooks);
  yield takeLatest(addBookStart.type,handleAddBook);
}