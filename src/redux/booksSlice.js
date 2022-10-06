import {
    createSlice
} from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: "Books",
    initialState: {
        books: [],
        isLoading: false,
        error: false,
        success:false,
    },
    reducers: {
        getBookStart: (state) => {
            state.isLoading = true;
            state.error = false;
            
        },
        getBooksSuccess: (state, action) => {
            state.isLoading = false;
            state.error = false;
            
            state.books = action.payload;
        },
        getBooksFailed: (state) => {
            state.isLoading = false;
            state.error = true;
        
        },
        addBookStart: (state) => {
            state.error = false;
            state.isLoading = true;
            state.success=false;

        },
        addBookSuccess: (state, action) => {
            state.error = false;
            state.isLoading = false;
            state.success=true;
            state.books.push(action.payload)
        },
        addBookFailed: (state) => {
            state.error = true;
            state.success=false;
            state.isLoading = false;
        },

    }
});

export const {
    getBookStart,
    getBooksSuccess,
    getBooksFailed,
    addBookStart,
    addBookSuccess,
    addBookFailed
} = booksSlice.actions;
export default booksSlice.reducer;
