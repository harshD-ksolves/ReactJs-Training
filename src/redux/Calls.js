 import {
    addBookStart,
    getBooksStart
 } from "./booksSlice";


 export const getAllBooks = (dispatch) => {
    dispatch(getBooksStart());//dispatched getBooks  Action.      
 }

 export const addNewBook = (book, dispatch) => {
   dispatch(addBookStart(book));
 }
