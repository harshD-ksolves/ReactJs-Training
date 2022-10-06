 import {
    getBookStart,
    getBooksSuccess,
    getBooksFailed,
    addBookStart,
    addBookSuccess,
    addBookFailed
 } from "./booksSlice";

 import {
     BOOKS
 } from '../data';

 export const getAllBooks = (dispatch) => {
    
    dispatch(getBookStart());
    try {
        dispatch(getBooksSuccess(BOOKS));
    } catch (error) {
        dispatch(getBooksFailed());
    }
        
 }

 export const addNewBook = (book, dispatch) => {
    dispatch(addBookStart());
    
    try {
        dispatch(addBookSuccess(book));
    } catch (error) {
        dispatch(addBookFailed());
    }
 }
