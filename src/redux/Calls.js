 import {
    getBookStart,
    getBooksSuccess,
    getBooksFailed,
    addBookStart,
    addBookSuccess,
    addBookFailed,
    getBooks
 } from "./booksSlice";

 import {
     BOOKS
 } from '../data';

 export const getAllBooks = (dispatch) => {
    
    dispatch(getBooks());//dispatched getBooks asyncThunk Action.
        
 }

 export const addNewBook = (book, dispatch) => {
    dispatch(addBookStart());
    
    try {
        dispatch(addBookSuccess(book));
    } catch (error) {
        dispatch(addBookFailed());
    }
 }
