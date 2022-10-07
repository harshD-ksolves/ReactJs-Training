import {
    createSlice,
} from "@reduxjs/toolkit";




// export const getBooks=createAsyncThunk('books/getBooks',async ()=>{
//     try {
//         const res= await axios.get(booksUrl);
//         return res;
//     } catch (error) {
//         return error.message;
//     }
// });


const booksSlice = createSlice({
    name: "Books",
    initialState: {
        books: [],
        isLoading: false,
        error: false,
        success: false,
    },
    reducers: {

        getBooksStart: (state,action) => {
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
    },
    //Thunk Reducer.
    // extraReducers(builder){
    //     builder
    //     .addCase(getBooks.pending,(state,action)=>{
    //         state.isLoading = true;
    //         state.error = false;
    //     })
    //     .addCase(getBooks.fulfilled,(state,action)=>{
    //         state.isLoading = false;
    //         state.error = false;

    //         console.log(action.payload);

    //         state.books =action.payload.data;
    //     })
    //     .addCase(getBooks.rejected,(state,action)=>{
    //         state.isLoading = false;
    //         state.error = true;
    //     });
    // }
});

export const {
    getBooksStart,
    getBooksSuccess,
    getBooksFailed,

    addBookStart,
    addBookSuccess,
    addBookFailed
} = booksSlice.actions;

export default booksSlice.reducer;
