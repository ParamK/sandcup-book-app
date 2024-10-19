import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/books.json'; // Import the JSON data

const initialState = {
    books: booksData,
    readingList: [],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addToReadingList: (state, action) => {
            const book = state.books.find((book) => book.id === action.payload);
            if (!state.readingList.includes(book)) {
                state.readingList.push(book);
            }
        },
        removeFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter((book) => book.id !== action.payload);
        }
    },
});

export const { addToReadingList, removeFromReadingList } = booksSlice.actions;
export default booksSlice.reducer;
